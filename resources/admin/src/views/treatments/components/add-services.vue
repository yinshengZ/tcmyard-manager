<template>
<div>
 <el-form
     v-model="treatment_details"
     label-width="120px">
    
     <el-form-item     
        label="Services:  "
     >

     <el-select
     v-model="service_details.id"
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
    v-model="service_details.unit"
    :min="1"
    :max="9999999"
    :step="1"
    placholder="units">

    </el-input-number>
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
            treatment_details:[],
            service_details:[],
            services:[],
            data:[]
           
            
        }
    },

    created(){
        this.get_service_details()
    },
    methods:{
        get_service_details(){
            get_services().then((response)=>{
                this.services = response
                console.log(this.services)
            })
        },
        add_service(){   
            console.log('service detail: '+this.service_details)         
            this.data = {
                service_detail: this.service_details,
                id:this.treatment_details.id,
                discount:this.treatment_details.discount,
                patient_id: this.$props.patient_id,
                user_id: this.$props.user_id

            }
            console.log('data:'+this.data)
            addServices(this.data).then((response)=>{
                console.log(response)
            })
        }
    }
}
</script>

<style scoped>

</style>