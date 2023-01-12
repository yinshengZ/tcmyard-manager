<template>
    <div>
        <el-button @click="add_item_row" type="info" icon="el-icon-plus">Item</el-button>
<el-form
        v-model="retail_details"
        label-width="120px"
        label-position="left">
    <el-form-item
        v-for="(retail,index) in retail_details"
        :label="'Item '+(index+1) ">

        <el-select
        v-model="retail.id"
        filterable
        
        placeholder="retails...">
        <el-option
        v-for="retail_list in all_retails"
        :key="retail_list.id"
        :label="retail_list.name + ' / stock( '+retail_list.stock+' )'"
        :value="retail_list.id">
    
        </el-option>
        </el-select>

        <el-input-number
        v-model="retail.units"
        :min="1"
        :max="99999999"
        :step="1"
        placeholder="units"></el-input-number>

        <el-button
        style="padding:10px; margin-left:10px"
        @click.prevent="remove_item_row(index)">Delete</el-button>
    </el-form-item>


    <el-form-item
        label="Discount (%): ">
        <el-input-number
        v-model="discount"
        :min="0"
        :max="100"
        :precision="2"
        :step="1"
        placeholder="discount">
        </el-input-number>
    </el-form-item>

    <el-form-item>
        <el-button type="primary" @click="add_retail()">Submit</el-button>
    </el-form-item>

</el-form>
    </div>
</template>


<script>

import {get_retails} from '@/api/inventory'
import {addRetail} from '@/api/treatment'

export default{
    props:['patient_id','user_id'],
    data(){
        return{
            all_retails:[],
            treatment_details:{},
            retail_details:[],
            
            discount:'',
        }
    },

    created(){
        this.get_all_retails()
    },

    methods:{
        add_item_row(){
            this.retail_details.push({
                
                id:"",
                units:"",
            })
        },

        remove_item_row(index){
            this.retail_details.splice(index,1)
        },
        get_all_retails(){
            get_retails().then((response)=>{
                this.all_retails = response
            })
        },
        add_retail(){
            this.treatment_details={
                retail_details:this.retail_details,
                patient_id : this.patient_id,
                user_id : this.user_id,
                discount:this.discount
            }
            
            addRetail(this.treatment_details).then((response)=>{
                this.$notify({
                    title:'Notification',
                    message:response.message,
                    type:'success'
                })
            }).catch(error=>{
                this.$notify.error({
                    title:'Error',
                    message:error.response.data.message
                })
            })
        },

    }

}

</script>

<style scoped>



</style>