<template>
  <div>
    <el-card shadow="always">
      <p>{{ this.treatment_detail }}</p>
      <p v-for="treatment in treatment_detail">
        {{ treatment.inventory.name }}
        {{ treatment.quantity }}
        {{ treatment.units }}w
      </p>

      <!--TODO:fix inventory not defined error-->
      <div v-if="this.category_id == 1">
        <p>herbs update</p>

        <el-form :model="updated_treatment_detail" label-width="120px">
          <div
            v-for="(treatment, index) in treatment_detail"
            :key="treatment.id"
          >
            <el-form-item :label="'Item ' + (index + 1)">
              <!--TODO:Fix v-model issue-->
              <el-select
                v-model="updated_inventory_id[index]"                
              >
                <el-option
                  v-for="item in inventory"
                  :key="item.id"
                  :label="item.name + ' / stock: ' + item.stock"
                  :value="item.id"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Units">
              <el-input v-model="updated_inventory_units[index]"></el-input>
            </el-form-item>
            
          </div>
          <el-form-item>
                <el-button
                type="primary"
                 @click="submit_update()">Submit</el-button>
            </el-form-item>
        </el-form>
      </div>
      <div v-else-if="this.category_id == 2">
        <p>service update</p>
      </div>

      <div v-else-if="this.category_id == 3">
        <p>retail update</p>
      </div>

      

      <p>{{ updated_inventory_id }}</p>
      <p>{{updated_inventory_units}}</p>
    </el-card>
  </div>
</template>

<script>
import { getSingleTreatment } from "@/api/treatment";
import {
  get_herbs,
  get_services,
  get_retails,
  get_others,
} from "@/api/inventory";
export default {
  props: ["treatment_id", "treatment_category"],

  data() {
    return {
      id: this.treatment_id,
      category_id: this.treatment_category,
      treatment_detail: [],
      updated_treatment_detail: {
           
      },
      quantity:'',     
      updated_inventory_id:[],
      updated_inventory_units:[],     
      inventory: [],
      final_detail:{
        
      }
    };
  },

  created() {
    this.get_treatment_details();
  },
  methods: {
    submit_update(){
     

        for (let i =0; i<this.updated_inventory_id.length; i++){
            this.updated_treatment_detail[i]={'id':this.updated_inventory_id[i],'units':this.updated_inventory_units[i]}
        }
        this.final_detail['treatment_detail'] = this.updated_treatment_detail
        this.final_detail['quantity']= 3
        
        console.log(this.final_detail)
    },


    get_treatment_details() {
      getSingleTreatment(this.id).then((response) => {
        this.treatment_detail = response;

        this.get_categorized_inventories(this.category_id);
      });
    },

    get_categorized_inventories(categories_id) {
      if (categories_id == 1) {
        this.get_all_herbs();
      } else if (categories_id == 2) {
        this.get_all_services();
      } else if (categories_id == 3) {
        this.get_all_retails();
      } else if (categories_id == 4) {
        this.get_all_others();
      }
    },

    get_all_herbs() {
      get_herbs().then((response) => {
        this.inventory = response;
      });
    },
    get_all_services() {
      get_services().then((response) => {
        this.inventory = response;
      });
    },
    get_all_retails() {
      get_retails().then((response) => {
        this.inventory = response;
      });
    },
    get_all_others() {
      get_others().then((response) => {
        this.inventory = response;
      });
    },
  },
};
</script>