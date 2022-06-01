<template>
  <div>
    <el-form :model="income_details" label-width="120px">
      <el-form-item label="Service">
        <el-select
          v-model="income_details.service_id"
          placeholder="services..."
          @change="calculate_sum"
        >
          <el-option
            v-for="service in services"
            :key="service.id"
            :label="
              service.service_title + '     (£ ' + service.unit_price + ')'
            "
            :value="service.id"
          >
            <span style="float: left">{{ service.service_title }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{
              "£" + service.unit_price
            }}</span>
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="Quantity">
        <el-input-number
          :step="1"
          :min="1"
          v-model="income_details.quantity"
          @change="calculate_sum"
        ></el-input-number>
      </el-form-item>

      <el-form-item label="Discount">
        <el-input-number
          :step="1"
          :min="0"
          :max="100"
          v-model="income_details.discount"
          @change="calculate_sum"
        ></el-input-number>
      </el-form-item>

      <el-form-item label="Payment Method">
        <el-select v-model="income_details.income_type_id">
          <el-option v-for="income_type in income_types"
          :key="income_type.id"
          :label="income_type.income_type"
          :value="income_type.id">
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

      <el-form-item label="Sum total">
        <span>{{ "£ " + sum_total }}</span>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="add_service_income">Submit</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getAllServices } from "@/api/service";
import { getSingleService } from "@/api/service";
import { addServiceIncome } from "@/api/finance";
import {getAllIncomeTypes} from "@/api/finance";

import { mapGetters } from "vuex";

export default {
  data() {
    return {
      services: [],
      income_details: {
        discount: 0,
        quantity: 1,
        description: "",
        service_id: "",
        user_id: '',
        amount:'',
        income_type_id:'',               
      },
      user:{},
      income_types:[],

      unit_price: 0,
      sum_total: 0,
    };
  },
  computed: {
    ...mapGetters(["name", "introduction", "token", "avatar", "roles", "id"]),
  },
  created() {
    this.get_all_services();
    this.get_income_types();
    this.get_user();
  },

  methods: {
    get_all_services() {
      getAllServices().then((response) => {
        this.services = response;
      });
    },
    get_income_types(){
      getAllIncomeTypes().then((response)=>{
        this.income_types = response
      })
    },
    get_user(){
       this.user = {
        name: this.name,
        introduction: this.introduction,
        token: this.token,
        avatar: this.avatar,
        roles: this.roles,
        id: this.id,
      };

    },

    calculate_sum() {
      getSingleService(this.income_details.service_id).then((response) => {
        this.unit_price = response.unit_price;
        this.sum_total =
          this.unit_price *
          this.income_details.quantity *
          (1 - this.income_details.discount / 100);
       
      });
    },
    add_service_income() {
        this.income_details.user_id = this.user.id
        this.income_details.amount = this.sum_total
      addServiceIncome(this.income_details).then((response) => {
        this.$notify({
          title:'Notification',
          type:'success',
          message:response
        })
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>