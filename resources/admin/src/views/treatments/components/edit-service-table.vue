<template>
    <div>
   

      <el-form
      v-model="treatment_detail"
      label-width="120px"
      lable-position="top">
      <div v-for="(service, index ) in treatment_detail" :key="service.inventory.id">
        <el-form-item
        label="Service Name: "
        >
        
        <el-select
        v-model="service.inventory.id">
        <el-option
        v-for ="service in all_services"
        :key="service.id"
        :label="service.name"
        :value="service.id">

        </el-option>
        
        </el-select>

        <el-input-number
        v-model="service.quantity"
        :min="1"
        :max="99999"
        :step="1">
        </el-input-number>  
        
        </el-form-item>

        <el-form-item
        label="Discount">
        <el-input-number
        v-model="service.discount"
        :min="0"
        :max="100"
        :precision="2"
        :step="1">

        </el-input-number>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="update_service_treatment()">Submit</el-button>
        </el-form-item>
      </div>
       
      </el-form>
    </div>
</template>

<script>

import {get_services} from "@/api/inventory";
import { getSingleTreatment, update_service } from "@/api/treatment";
export default{
    props:['treatment_id','patient_id','user_id'],

    data(){
        return{
            treatment_detail:{},
            all_services:[],
            units:'',
            discount:'',
            updated_service_details:{

            },

        }
    },
    created(){
        this.get_treatment_details(),
        this.get_all_services()
    },

    methods:{
        get_treatment_details(){
            
            getSingleTreatment(this.treatment_id).then((response)=>{
                console.log(response)
                this.treatment_detail = response
            })
        },

        get_all_services(){
            get_services().then((response)=>{                
                this.all_services = response
            })
        },

        update_service_treatment(){
            this.updated_service_details={
                patient_id: this.patient_id,
                user_id : this.user_id,
                discount:this.treatment_detail[0].discount,
                quantity:this.treatment_detail[0].quantity,
                treatment_id:this.treatment_id,   
                inventory_id:this.treatment_detail[0].inventory.id, 
                category_id:this.treatment_detail[0].categories_id               

            }
            update_service(this.updated_service_details).then((response)=>{
                this.$notify({
                    title:'Notification',
                    message:response.message,
                    type:'success'
                })
            }).catch(error=>{
                this.$notify.error({
                    title:'Error',
                    message:error.resoponse.data.message
                })
                    
            })
        }
    }
}


</script>

<style scoped>
</style>