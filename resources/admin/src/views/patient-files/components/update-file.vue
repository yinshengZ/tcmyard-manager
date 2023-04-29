<template>
    <div>
      
        <el-form>
        
            <el-form-item
            label="Description">
                <el-input
                v-model="file_info.description"></el-input>
            </el-form-item>

            <el-form-item
            label="File Name">
                <el-input
                 :disabled="true"
                 v-model="file_info.original_name"></el-input>
            </el-form-item>

            <el-button
            type="success"
            @click="update_patient_file(file_info.id)">Update</el-button>
                
            
        </el-form>
    </div>

</template>


<script>

import {getPatientFile, updateFile} from "@/api/file"

export default{

    props:['file_id'],

    data(){
        return{
            file_info:[],
            updated_info:{
                description:'',
                id:''
            }

        }
    },
    created(){
        this.get_file_info()
    },
 
    methods:{
        get_file_info(){
           
            getPatientFile(this.file_id).then((response)=>{

               this.file_info = response[0]
            })
        },

        update_patient_file(id){
         this.updated_info.id = id,
         this.updated_info.description = this.file_info.description

    
         updateFile(this.updated_info).then((response)=>{
            this.$notify({
                title:"Notification",
                type:"success",
                message: response.message,
            }).catch((error)=>{
                this.$notify.error({
                    title:"Error",
                    message:error.response.data.message,
                })
            })
           
         })
            
          
        }
    }
}

</script>

<style scoped>

</style>