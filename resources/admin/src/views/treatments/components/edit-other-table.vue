<template>
  <div>
    <div>
      <el-button class="add-other-button" @click="add_item_row" type="success" icon="el-icon-plus">Other</el-button>
    </div>

    <el-form v-model="treatment_detail" label-width="125px">

      <div v-for="(inventory, index) in treatment_detail.inventories" :key="inventory.id">
        <el-form-item :label="'Item' + (index + 1)">
          <div class="grid-container">

            <div class="other-select">
              <el-select v-model="treatment_detail.inventories[index].pivot.inventory_id">
                <el-option v-for="item in all_others" :key="item.id" :label="item.name + ' / stock: ' + item.stock"
                  :value="item.id">

                </el-option>

              </el-select>

            </div>

            <div class="units">
              <el-input-number :min="1" :step="1" v-model="inventory.pivot.units"></el-input-number>
            </div>

            <div class="delete-item">
              <el-button @click="remove_item_row(index)"><svg-icon icon-class="delete"></svg-icon></el-button>

            </div>



          </div>

        </el-form-item>


      </div>
      <el-form-item label="Quantity">
        <el-input-number v-model="treatment_detail.quantity" :min="1" :step="1"></el-input-number>
      </el-form-item>

      <el-form-item label="Extra Options">
        <el-checkbox v-model="with_finance">
          With Income
        </el-checkbox>

        <el-checkbox v-model="with_date">
          With Date</el-checkbox>
      </el-form-item>


      <div v-if="with_finance">
        <el-form-item label="Discount">
          <el-input-number v-model="treatment_detail.incomes[0].discount" :min="0" :max="100" :step="1"></el-input-number>

        </el-form-item>

        <el-form-item label="Price">
          <el-input-number v-model="treatment_detail.incomes[0].amount" :min="0" :precision="2"></el-input-number>
          <el-button type="primary" @click="calculate_price">Calculate</el-button>
        </el-form-item>

        <el-form-item label="Original Price: £">
          <span>{{ treatment_detail.incomes[0].original_amount }}</span>
        </el-form-item>

        <el-form-item label="Payment Type">
          <el-select v-model="treatment_detail.incomes[0].payment_type_id">
            <el-option v-for="payment_method in payment_methods" :key="payment_method.id"
              :label="uppercaseFirst(payment_method.payment_type)" :value="payment_method.id"></el-option>
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

      <el-form-item>
        <el-button type="success" @click="update_others">Update</el-button>
      </el-form-item>

    </el-form>


  </div>
</template>

<script>
import { getSingleTreatment, updateOthers } from "@/api/treatment";
import { getPaymentMethods } from "@/api/finance"

import { get_others } from "@/api/inventory";
import { uppercaseFirst } from "@/filters";

export default {
  props: ["treatment_id", "treatment_category", "patient_id", "user_id"],

  data() {
    return {
      with_finance: false,
      with_date: false,
      id: this.treatment_id,
      category_id: this.treatment_category,

      all_others: [],
      treatment_detail: [],
      quantity: '',
      discount: '',
      final_detail: [],
      payment_methods: []
    };
  },

  created() {
    this.get_treatment_details();
    this.get_all_others();
    this.get_all_payment_methods();
  },

  methods: {
    uppercaseFirst,
    get_treatment_details() {
      getSingleTreatment(this.id).then((response) => {
        this.treatment_detail = response;

        this.treatment_detail.incomes[0].amount = this.treatment_detail.incomes[0].amount / 100
        this.treatment_detail.incomes[0].original_amount = this.treatment_detail.incomes[0].original_amount / 100


      });
    },

    get_all_others() {
      get_others().then((response) => {
        this.all_others = response;

      });
    },

    update_others() {
      this.treatment_detail.with_finance = this.with_finance
      this.treatment_detail.with_date = this.with_date

      updateOthers(this.treatment_detail).then((response) => {
        this.$notify({
          title: 'Notification',
          message: response.message,
          type: 'success'
        })
      }).catch(error => {
        this.$notify.error({
          title: 'Error',
          message: error.response.data
        })
      })
    },

    calculate_price() {
      this.treatment_detail.incomes[0].amount = 0
      this.treatment_detail.incomes[0].original_amount = 0

      if (this.treatment_detail.inventories.length > 0) {

        for (let i = 0; i < this.treatment_detail.inventories.length; i++) {
          let result = this.all_others.find(item => item.id === this.treatment_detail.inventories[i].pivot.inventory_id)

          this.treatment_detail.incomes[0].original_amount += Number(result.unit_price) * this.treatment_detail.inventories[i].pivot.units * this.treatment_detail.quantity
          this.treatment_detail.incomes[0].amount += Number(result.unit_price * this.treatment_detail.inventories[i].pivot.units * (1 - this.treatment_detail.incomes[0].discount / 100) * this.treatment_detail.quantity)

        }
      }
    },


    remove_item_row(index) {
      this.treatment_detail.inventories.splice(index, 1);
    },
    add_item_row() {
      this.treatment_detail.inventories.push({

        pivot: {
          inventory_id: '',
          treatment_id: '',
          units: ''
        }
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
  grid-column-gap: 10px;
}

.add-other-button {
  width: 100%;
  margin-bottom: 2%;
}
</style>
