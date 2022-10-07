<template>
    <div>
        <el-form :model="income_type_details" label-width="180">
            <el-form-item label="Income Type">
                <el-input v-model="income_type_details.income_type"></el-input>
            </el-form-item>
        </el-form>
        <el-button
        type="primary"
        @click="update_income_type">
        Update
        </el-button>
    </div>
</template>

<script>
import {getSingleIncomeTypeDetails} from "@/api/finance"
import {updateIncomeTypeDetails} from "@/api/finance"
export default {
    props:['income_type_id'],
    data(){
        return{
            income_type_details:[]
        }
    },
    created(){
        this.get_income_type_detail()
    },

    mounted(){
       // this.get_income_type_detail()
    },

    methods:{
        get_income_type_detail(){
           getSingleIncomeTypeDetails(this.income_type_id).then((response)=>{
               this.income_type_details = response
           })
           
        },

        update_income_type(){
            updateIncomeTypeDetails(this.income_type_details, this.income_type_id).then((response)=>{
                console.log(response)
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>