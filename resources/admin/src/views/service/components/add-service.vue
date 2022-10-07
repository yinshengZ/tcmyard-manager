<template>
    <div>
        <el-card>
          <el-form :model="service_details" label-width="120px">
              <el-form-item label="Service Title">
                  <el-input v-model="service_details.service_title"></el-input>
              </el-form-item>
              <el-form-item label="Unit Price">
                  <el-input-number v-model="service_details.unit_price" :precision = "2" :step="0.1" :max="9999999" :min="0"></el-input-number>
              </el-form-item>

              <el-form-item label="Description">
                  <el-input
                  type="textarea"
                  v-model="service_details.description">

                  </el-input>
              </el-form-item>
          </el-form>
            <el-button
            type="primary"
            @click="add_service">
            Submit
            </el-button>
        </el-card>
        
    </div>
</template>

<script>
import {addService} from '@/api/service'
export default {
    data(){
        return{
            service_details:{
                
            },
            error_messages:{
                service_title:'',
                unit_price:''
            }
        }
    },

    methods:{
        add_service(){
            addService(this.service_details).then((response)=>{
               console.log("status code is: ")
                console.log(response)
                this.$notify({
                    title:'Notification',
                    type:'success',
                    message:response
                })
            }).catch((error)=>{
                console.warn(error.response)
                console.log(error.response.data.errors)
                
                this.error_messages.service_title=error.response.data.errors.service_title
                this.error_messages.unit_price=error.response.data.errors.unit_price             

                this.$notify({
                    title:'Notification',
                    type:'error',
                    dangerouslyUseHTMLString:true,
                    message: '<strong>'+error.response.data.errors.service_title+'</strong>'
                                ||'<strong>'+error.response.data.errors.unit_price+'</strong'
                })
                
            })
        }
    }

}
</script>

<style scoped>

</style>