<template>
  <div>
    <el-form :model="income_details" label-width="120px">
      <el-form-item label="Product">
        <el-select
          v-model="income_details.inventory_id"
          placeholder="products...."
          @change="calculate_sum"
        >
          <el-option
            v-for="product in products"
            :key="product.id"
            :label="product.name + ' / ' + product.eng_name"
            :value="product.id"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="Quantity">
        <el-input-number
          :step="1"
          :min="1"
          v-model="income_details.quantity"
          @change="calculate_sum"
        >
        </el-input-number>
      </el-form-item>

      <el-form-item label="Discount">
        <el-input-number
          :step="1"
          :min="0"
          :max="100"
          v-model="income_details.discount"
          @change="calculate_sum"
        >
        </el-input-number>
      </el-form-item>

      <el-form-item label="Payment Method">
        <el-select v-model="income_details.income_type_id">
          <el-option
            v-for="income_type in income_types"
            :key="income_type.id"
            :label="income_type.income_type"
            :value="income_type.id"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="Description">
        <el-input
          type="textarea"
          autosize
          v-model="income_details.description"
        ></el-input>
      </el-form-item>

      <el-form-item label="Sum Total">
        <span>{{ "£ " + sum_total }}</span>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="add_retail_income">Submit</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getAllIncomeTypes } from "@/api/finance";
import { getProducts } from "@/api/inventory";
import { get_single } from "@/api/inventory";

import { mapGetters } from "vuex";

export default {
  data() {
    return {
      income_details: {},
      sum_total: "",
      income_types: [],
      products: [],
      unit_price:'',
      user:{},
    };
  },

    computed: {
    ...mapGetters(["name", "introduction", "token", "avatar", "roles", "id"]),
  },

  created() {
    this.get_income_types();
    this.get_all_retail();
    this.get_user();

  },
  methods: {
    get_income_types() {
      getAllIncomeTypes().then((response) => {
        this.income_types = response;
      });
    },

    get_user(){
       this.user = {
        name: this.name,
        introduction: this.introduction,
        token: this.token,
        avatar: this.avatar,
        roles: this.roles,
        id: this.id,
      }
    },



    get_all_retail(){
        getProducts().then((response)=>{
            this.products = response
        })
    },

    calculate_sum(){
        get_single(this.income_details.inventory_id).then((response)=>{
            this.unit_price = response.unit_price
            this.sum_total = this.unit_price *
          this.income_details.quantity *
          (1 - this.income_details.discount / 100);
        })
    },

    add_retail_income(){
        this.income_details.user_id = this.user.id
        this.income_details.amount = this.sum_total
    }
  },
};
</script>

<style lang="scss" scoped>
</style>