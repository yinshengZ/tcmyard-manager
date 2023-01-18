<template>
  <div>
    <el-card shadow="always">
      <el-button @click="add_item_row" type="info" icon="el-icon-plus"
        >Herb</el-button
      >
      <el-form v-model="treatment_detail" label-width="120px">
        <div v-for="(treatment, index) in treatment_detail" :key="treatment.id">
          <el-form-item :label="'Item ' + (index + 1)">
            <el-select
              v-model="treatment.inventory.id"
              filterable
              style="width: 200px"
            >
              <el-option
                v-for="item in inventory"
                :key="item.id"
                :label="item.name + ' / stock: ' + item.stock"
                :value="item.id"
              >
              </el-option>
            </el-select>

            <el-input-number
              v-model="treatment.units"
              style="width: 120px"
              :min="1"
              :max="9999999"
              :step="1"
            ></el-input-number>

            <el-button
              style="padding: 10px; margin-left: 10px"
              @click.prevent="remove_item_row(index)"
              >Delete</el-button
            >
          </el-form-item>
        </div>

        <el-form-item label="Quantity">
          <el-input-number
            v-model="quantity"
            :min="1"
            :max="9999999"
            :step="1"
          ></el-input-number>
        </el-form-item>

        <el-form-item label="Discount">
          <el-input-number
            v-model="discount"
            :min="0"
            :max="100"
            :precision="2"
            :step="1"
          >
          </el-input-number>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="update_herbs()">Submit</el-button>
        </el-form-item>
        <el-form-item> </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { getSingleTreatment, updateHerbs } from "@/api/treatment";
import { get_herbs } from "@/api/inventory";
export default {
  props: ["treatment_id", "treatment_category", "patient_id", "user_id"],

  data() {
    return {
      id: this.treatment_id,
      category_id: this.treatment_category,
      treatment_detail: [],
      updated_treatment_detail: {},
      quantity: "",
      discount: "",
      updated_inventory_id: [],
      updated_inventory_units: [],
      inventory: [],
      final_detail: {},
    };
  },

  created() {
    this.get_treatment_details();
  },
  methods: {
    add_item_row() {
    

      this.treatment_detail.push({
        categories_id: "",
        discount: "",
        inventory: {
          categories_id: "",
          created_at: "",
          deleted_at: null,
          description: "",
          eng_name: "",
          expiry_date: "",
          id: "",
          name: "",
          stock: "",
          unit_price: "",
          updated_at: "",
        },
        quantity: "",
        units: "",
      });
    },

    remove_item_row(index) {
      this.treatment_detail.splice(index, 1);
    },

    update_herbs() {
      for (let i = 0; i < this.treatment_detail.length; i++) {
        this.final_detail[i] = {
          patient_id: this.patient_id,
          user_id: this.user_id,
          service_id: this.treatment_category,
          treatment_id: this.treatment_id,
          quantity: this.quantity,
          discount: this.discount,

          treatment_detail: {
            id: this.treatment_detail[i].inventory.id,
            units: this.treatment_detail[i].units,
          },
        };
      }

      updateHerbs(this.final_detail)
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
        this.quantity = response[0].quantity;
        this.discount = response[0].discount;

        this.get_all_herbs();
        //this.get_categorized_inventories(this.category_id);
      });
    },

    get_all_herbs() {
      get_herbs().then((response) => {
        this.inventory = response;
      });
    },
  },
};
</script>
