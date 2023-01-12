<template>
<div>
 <el-form
     v-model="treatment_details"
     label-width="120px">
    
     <el-form-item     
        label="Services:  "
     >

     <el-select
     v-model="treatment_details.id"
     placeholder="services...">

    <el-option
        v-for="service in services"
        :key="service.id"
        :label="service.name + ' ( £'+service.unit_price+')'"
        :value="service.id"
        >
    </el-option>

     </el-select>    
    </el-form-item>

    <el-form-item
    label="Units: ">
    <el-input-number
    v-model="treatment_details.unit"
    :min="1"
    :max="9999999"
    :step="1"
    placholder="units">

    </el-input-number>
    </el-form-item>

    <el-form-item
    label="Quantity">
    <el-input-number
    v-model="treatment_details.quantity"
    :min="1"
    :max="9999999"
    :step="1"
    placeholder="quantity"></el-input-number>
    </el-form-item>

    <el-form-item
    label="Discount(%): ">
    <el-input-number
    v-model="treatment_details.discount"
    :min="0"
    :max="100"
    :precision = "2"
    :step="1"
    placeholder="discount">

    </el-input-number>

    </el-form-item>

    <el-form-item>
        <el-button @click="add_service()">Submit</el-button>
    </el-form-item>

 </el-form>

        
    </div>
</template>

<script>
import {get_services} from '@/api/inventory'
import {addServices} from '@/api/treatment'

export default{
    props:['patient_id','user_id'],
    data(){
        return{
            treatment_details:{},            
            services:[],
            p_id:this.patient_id,
            u_id:this.user_id
          
           
            
        }
    },

    created(){
        this.get_service_details()
    },
    methods:{
        get_service_details(){
            get_services().then((response)=>{
                this.services = response
            })
        },
        add_service(){   
            this.treatment_details['patient_id']=this.p_id
            this.treatment_details['user_id']=this.u_id
            
           addServices(this.treatment_details).then((response)=>{
                this.$notify({
                    title:'Notification',
                    message:response.message,
                    type:'success'
                })
           }).catch(error=>{
            this.$notify.error({
                title:'Error',
                message:error.response.data.message,
            })
           })
            
        }
    }
}
</script>

<style scoped>

</style>