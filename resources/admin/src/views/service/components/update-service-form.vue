<template>
    <div>
        
        <el-card>
            <el-form :model="service_details"
            label-position="left"
            label-width="120px">
                <el-form-item label="Title: ">
                    <el-input v-model="service_details.service_title"></el-input>
                </el-form-item>
               
                <el-form-item label="Unit Price">
                    <el-input-number v-model="service_details.unit_price"
                    :precision="2"
                    :step="0.1"
                    :max="99999999"
                    :min="0"></el-input-number>
                </el-form-item>
               

                <el-form-item label="Description">
                    <el-input
                    type="textarea"
                    v-model="service_details.description">
                    </el-input>
                </el-form-item>

            </el-form>

            <el-button type="primary"
            @click="update_service_details">
            Update
            </el-button>
        </el-card>
    </div>
</template>

<script>
import{updateService} from '@/api/service.js'
import {getSingleService} from '@/api/service.js'


export default {
    props:['service_id'],
    data(){
        return{
            service_details:{
                
            }
        }
    },

    created(){
        this.get_service_details()
    },

    methods:{
       get_service_details(){
           getSingleService(this.service_id).then((response)=>{
               this.service_details = response
           })
       },

        update_service_details(){
            updateService(this.service_details, this.service_id).then((response)=>{
                this.$notify({
                    title:'Notification',
                    type:'success',
                    message: response
                })
            })

            }
        }


    }


</script>