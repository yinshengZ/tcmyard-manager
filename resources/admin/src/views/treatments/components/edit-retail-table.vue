<template>
  <div>

    <div>
      <el-button @click="add_item_row" class="add-retail-button" type="success" icon="el-icon-plus">Retail</el-button>
    </div>

    <el-form v-model="retail_detail" label-width="120px">
      <div v-for="(inventory, index) in retail_detail.inventories" :key="index">
        <el-form-item :label="'Item' + (index + 1)">
          <div class="grid-container">
            <div class="retail-select">
              <el-select v-model="retail_detail.inventories[index].id">
                <el-option v-for="item in all_inventories" :key="item.id + Math.random()"
                  :label="item.name + ' / stock:' + item.stock" :value="item.id"></el-option>
              </el-select>
            </div>

            <div class="retail-units">
              <el-input-number size="mini" v-model="retail_detail.inventories[index].pivot.units" :min="1"
                :step="1"></el-input-number>
            </div>



            <div class="retail-buttons">
              <el-button @click="remove_item_row(index)"><svg-icon icon-class="delete"></svg-icon></el-button>

            </div>
          </div>
        </el-form-item>

      </div>
      <el-form-item label="Quantity">
        <el-input-number v-model="retail_detail.quantity" :min="1" :step="1"></el-input-number>
      </el-form-item>

      <el-form-item label="Extra Options">
        <el-checkbox v-model="with_finance">
          With Income</el-checkbox>

        <el-checkbox v-model="with_date">
          With Date</el-checkbox>
      </el-form-item>

      <div class="income_fields" v-if="with_finance">
        <el-form-item label="Discount">
          <el-input-number v-model="retail_detail.incomes[0].discount" :min="0" :max="100"></el-input-number>
        </el-form-item>

        <el-form-item label="Price">
          <el-input-number v-model="retail_detail.incomes[0].amount" :min="0" :max="99999999"
            :precision="2"></el-input-number>
          <el-button type="primary" @click="calculate_retail_price">Calculate</el-button>

        </el-form-item>

        <el-form-item label="Original Price(£)">
          <span>{{ retail_detail.incomes[0].original_amount }}</span>
        </el-form-item>

        <el-form-item label="Payment Type">
          <el-select v-model="retail_detail.incomes[0].payment_type_id">
            <el-option v-for="payment_method in payment_methods" :key="payment_method.id"
              :label="uppercaseFirst(payment_method.payment_type)" :value="payment_method.id"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="Description">
          <el-input v-model="retail_detail.incomes[0].description"></el-input>

        </el-form-item>
      </div>


      <div class="date" v-if="with_date">
        <el-form-item label="Date">
          <el-date-picker v-model="retail_detail.date"></el-date-picker>
        </el-form-item>
      </div>


      <el-form-item>
        <el-button type="primary" @click="update_retails">Update</el-button>
      </el-form-item>


    </el-form>

  </div>
</template>

<script>
import { getSingleTreatment, updateRetails } from "@/api/treatment";
import { get_retails } from "@/api/inventory";
import { uppercaseFirst } from "@/filters";

import { getPaymentMethods } from "@/api/finance";

export default {
  props: ["treatment_id", "treatment_category", "patient_id", "user_id"],

  data() {
    return {
      id: this.treatment_id,
      all_inventories: [],
      retail_detail: [],
      discount: "",
      quantity: "",
      final_detail: [],
      payment_methods: [],
      with_finance: false,
      with_date: false,
    };
  },

  created() {
    this.get_treatment_details();
    this.get_all_retails();
    this.get_payment_methods();
  },

  methods: {
    uppercaseFirst,
    add_item_row() {
      this.retail_detail.inventories.push({
        pivot: {
          inventory_id: '',
          treatment_id: '',
          units: ''
        }
      })
    },

    remove_item_row(index) {
      this.retail_detail.inventories.splice(index, 1);
    },

    update_retails() {

      this.retail_detail.with_finance = this.with_finance
      this.retail_detail.with_date = this.with_date

      updateRetails(this.retail_detail)
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
        this.retail_detail = response;
        this.retail_detail.incomes[0].amount = this.retail_detail.incomes[0].amount / 100
        this.retail_detail.incomes[0].original_amount = this.retail_detail.incomes[0].original_amount / 100


      });
    },

    get_all_retails() {
      get_retails().then((response) => {
        this.all_inventories = response;
        console.log(this.all_inventories)
      });
    },

    get_payment_methods() {
      getPaymentMethods().then((response) => {
        this.payment_methods = response
      })
    },

    calculate_retail_price() {
      this.retail_detail.incomes[0].amount = 0
      this.retail_detail.incomes[0].original_amount = 0

      if (this.retail_detail.inventories.length > 0) {
        for (let i = 0; i < this.retail_detail.inventories.length; i++) {
          let result = this.all_inventories.find(item => item.id === this.retail_detail.inventories[i].id)

          this.retail_detail.incomes[0].original_amount += Number(result.unit_price) * this.retail_detail.inventories[i].pivot.units * this.retail_detail.quantity
          this.retail_detail.incomes[0].amount += Number(result.unit_price * this.retail_detail.inventories[i].pivot.units * (1 - this.retail_detail.incomes[0].discount / 100) * this.retail_detail.quantity)


        }
      }

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

.add-retail-button {
  width: 100%;
  margin-bottom: 2%;
}
</style>
