<template>
    <div>
        <el-card>   
            <el-form :model="income_type_details" label-width="120px">
                <el-form-item label="Income Type">
                    <el-input v-model="income_type_details.income_type"></el-input>
                </el-form-item>
        </el-form>

        <el-button
        type="primary"
        @click="add_income_type">Submit</el-button>

        </el-card>
        
    </div>
</template>


<script>
import {addIncomeType} from '@/api/finance'
export default {
    data(){
        return{
            income_type_details:{

            }
        }
    },

    methods:{
        add_income_type(){
            addIncomeType(this.income_type_details).then((response)=>{
               this.$notify({
                   title:'Notification',
                   type:'success',
                   message:response.message
               })
            }).catch((error)=>{
          
                this.$notify({
                    title:"Error",
                    type:'error',
                    message: error.response.data.errors
                })
            })
        }
    }
}
</script>