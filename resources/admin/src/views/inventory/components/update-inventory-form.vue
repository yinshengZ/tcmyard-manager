<template>
  <div>
    <el-form
      ref="update_inventory_form"
      :model="inventory_details"
      label-position="left"
      label-width="120px"
    >
      <el-form-item label="ID">
        <el-input :disabled="true" v-model="inventory_details.id"> </el-input>
      </el-form-item>

      <el-form-item label="Name">
        <el-input v-model="inventory_details.name"> </el-input>
      </el-form-item>

      <el-form-item label="English Name">
        <el-input v-model="inventory_details.eng_name"> </el-input>
      </el-form-item>

      <el-form-item label="Category">
          <el-select  v-model="inventory_details.categories_id" placeholder="select...">
              <el-option v-for="categories in categories_rtv"
              :key="categories.id"
              :label="categories.categories"
              :value="categories.id">

              </el-option>
          </el-select>
      </el-form-item>

      <el-form-item
      label="Unit Price">
    <el-input-number v-model="inventory_details.unit_price" :precison="2" :step="0.1" :max="999999"></el-input-number>
      </el-form-item>

      <el-form-item label="Stock">
        <el-input v-model="inventory_details.stock"> </el-input>
      </el-form-item>

      <el-form-item label="Description">
        <el-input v-model="inventory_details.description"> </el-input>
      </el-form-item>

      <el-form-item label="Expiry Date">
        <el-date-picker
                        v-model="updated_expiry_date"
                        type="date"
                         format="yyyy/MM/dd"
                         value-format="yyyy/MM/dd"
                        :placeholder="inventory_details.expiry_date"
                        >
        </el-date-picker>
      </el-form-item>

      <el-form-item>
          <el-button
          type="primary"
          @click="update_inventory_details">Update</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {get_single} from '@/api/inventory'
import {update_inventory} from '@/api/inventory'
import {getAll} from '@/api/category'
export default {
    props:['inventory_id'],
  data() {
    return {
      inventory_details: [],
      categories_rtv:'',
      updated_expiry_date:'',
      original_expiry_date:''
    };
  },

  mounted(){
      this.get_categories();
      this.get_inventory_details();
      
  },

  updated(){
    this.set_original_expiry_date();    
  },

  methods:{
    set_original_expiry_date(){ // keep the original record of expiry_date incase no new date is provided!
      this.original_expiry_date = this.inventory_details.expiry_date     
    },
      get_inventory_details(){
          get_single(this.inventory_id).then((response)=>{
              console.log(this.inventory_id)
              console.log(response)
              this.inventory_details = response
          })
      },
      update_inventory_details(){
        if(this.updated_expiry_date !=""){
          this.inventory_details.expiry_date = this.updated_expiry_date          
        }else{
          this.inventory_details.expiry_date = this.original_expiry_date          
        }// determine which date is going to be used!        
          update_inventory(this.inventory_details,this.inventory_id).then((response)=>{
              this.$notify({
                  title:'Notification',
                  message:response,
                  type:'success'
              })
          })
      },

      get_categories(){
          getAll().then((response)=>{
              this.categories_rtv=response
              console.log(this.categories_rtv)
          })          
      }
  }
}
</script>

<style scoped>
</style>