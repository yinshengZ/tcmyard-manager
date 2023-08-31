<template>
  <div>
    <div class="operation-buttons">
      <div class="add-button">
        <el-button @click="add_item_row" type="info" icon="el-icon-plus">Herb</el-button>
      </div>

    </div>

    <el-form v-model="treatment_detail" label-width="120px">

      <div v-for="(inventory, index) in treatment_detail.inventories" :key="inventory.id">
        <el-form-item :label="'Item ' + (index + 1)">
          <div class="grid-container">
            <div class="herb-select">
              <el-select v-model="treatment_detail.inventories[index].id">
                <el-option v-for="item in all_inventories" :key="item.id" :label="item.name + ' / stock: ' + item.stock"
                  :value="item.id">
                </el-option>
              </el-select>
            </div>

            <div class="herb-units">
              <el-input-number v-model="inventory.pivot.units" size="mini"></el-input-number>

            </div>

            <div class="herb-buttons">
              <el-button @click="remove_item_row(index)"><svg-icon icon-class="delete"></svg-icon></el-button>

            </div>
          </div>
        </el-form-item>
      </div>


      <el-form-item label="Quantity">
        <el-input-number v-model="treatment_detail.quantity" :min="1" :max="99999" :step="1"></el-input-number>
      </el-form-item>



      <el-form-item label="Extra Options">
        <el-checkbox v-model="with_finance">
          With Income
        </el-checkbox>
        <el-checkbox v-model="with_date">With Date</el-checkbox>
      </el-form-item>

      <div v-if="with_finance">
        <el-form-item label="Discount">
          <el-input-number v-model="treatment_detail.incomes[0].discount" :min="0" :max="100"></el-input-number>
        </el-form-item>


        <el-form-item label="Price">

          <el-input-number v-model="treatment_detail.incomes[0].amount" :min="0" :max="999999999"
            :precision="2"></el-input-number>
          <el-button type="primary" @click="calculate_herb_price">Calculate</el-button>
        </el-form-item>

        <el-form-item label="Original Price: £" label-width="150px">
          <span>{{ treatment_detail.incomes[0].original_amount }}</span>
        </el-form-item>

        <el-form-item label="Payment Type">
          <el-select v-model="treatment_detail.incomes[0].payment_type_id">
            <el-option v-for="payment_method in payment_methods" :key="payment_method.id"
              :label="uppercaseFirst(payment_method.payment_type)" :value="payment_method.id">

            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="Description">
          <el-input v-model="treatment_detail.incomes[0].description"></el-input>
        </el-form-item>
      </div>

      <div v-if="with_date">
        <el-form-item label="Date">
          <el-date-picker v-model="treatment_detail.date"></el-date-picker>

        </el-form-item>
      </div>







      <el-button type="success" @click="update_herbs">Submit</el-button>

      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getSingleTreatment, updateHerbs } from "@/api/treatment";
import { getPaymentMethods } from "@/api/finance"
import { uppercaseFirst } from "@/filters";

import { get_herbs } from "@/api/inventory";
export default {
  props: ["treatment_id", "treatment_category", "patient_id", "user_id"],

  data() {
    return {
      id: this.treatment_id,
      category_id: this.treatment_category,
      treatment_detail: [],
      updated_treatment_detail: {},
      quantity: 1,

      updated_inventory_id: [],
      updated_inventory_units: [],
      all_inventories: [],
      final_detail: {},
      payment_methods: [],

      original_price: 0,
      final_price: 0,
      description: '',
      payment_type: '',
      payment_methods: [],
      service_id: '',
      with_finance: false,
      with_date: false,
      date: ''
    };
  },

  created() {
    this.get_treatment_details();
    this.get_all_payment_methods();

  },
  methods: {
    uppercaseFirst,
    add_item_row() {


      this.treatment_detail.inventories.push({

        pivot: {
          inventory_id: '',
          treatment_id: '',
          units: ''
        }
      });
    },

    calculate_herb_price() {
      this.treatment_detail.incomes[0].amount = 0
      this.treatment_detail.incomes[0].original_amount = 0

      if (this.treatment_detail.inventories.length > 0) {

        for (let i = 0; i < this.treatment_detail.inventories.length; i++) {

          let result = this.all_inventories.find(item => item.id === this.treatment_detail.inventories[i].id)

          this.treatment_detail.incomes[0].original_amount += Number(result.unit_price) * this.treatment_detail.inventories[i].pivot.units * this.treatment_detail.quantity
          this.treatment_detail.incomes[0].amount += Number(result.unit_price * this.treatment_detail.inventories[i].pivot.units * (1 - this.treatment_detail.incomes[0].discount / 100) * this.treatment_detail.quantity)



        }

      }
    },

    remove_item_row(index) {
      this.treatment_detail.inventories.splice(index, 1);
    },

    update_herbs() {
      console.log(this.treatment_detail)
      this.treatment_detail.with_finance = this.with_finance;
      this.treatment_detail.with_date = this.with_date;



      updateHerbs(this.treatment_detail)
        .then((response) => {
          this.$notify({
            title: "Notification",
            message: response.message,
            type: "success",
          });
        })
        .catch((error) => {
          this.$notify.error({
            title: "Error",
            message: error.response.data.message,
          });
        });
    },

    get_treatment_details() {
      getSingleTreatment(this.id).then((response) => {
        this.treatment_detail = response;
        this.treatment_detail.incomes[0].amount = this.treatment_detail.incomes[0].amount / 100
        this.treatment_detail.incomes[0].original_amount = this.treatment_detail.incomes[0].original_amount / 100

        console.log(this.treatment_detail)
        this.get_all_herbs();
      });
    },

    get_all_herbs() {
      get_herbs().then((response) => {
        this.all_inventories = response;
      });
    },
    get_all_payment_methods() {
      getPaymentMethods().then((response) => {
        this.payment_methods = response
      })
    }
  },
};
</script>


<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2%;
}

.operation-buttons {
  display: grid;
  grid-template-columns: 1fr;
}
</style>