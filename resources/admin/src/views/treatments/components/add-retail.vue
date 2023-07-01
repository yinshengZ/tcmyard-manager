<template>
    <div>
        <div class="add-item-button">
            <el-button class="button" style="width:100%; padding:10px;" @click="add_item_row" type="success" icon="el-icon-plus">Item</el-button>

        </div>

<div v-if="retail_details.length">
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
        :label="retail_list.name + ' / stock( '+retail_list.stock+' )'+ ' / price(£ '+retail_list.unit_price+' )'"
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
        label="Extra Options">
            <el-checkbox v-model="with_finance">With Income</el-checkbox>
            <el-checkbox v-model="with_date">With Date</el-checkbox>
        </el-form-item>



    <div v-if="with_finance">       

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

    <el-form-item
    label="Price (£): ">
    <el-input-number
    v-model="final_amount">

    </el-input-number>
    <el-button style="margin-left:10px" @click="calculate_price" type="primary">Calculate</el-button>
    </el-form-item>
    <el-form-item
    label="Normal Price(£):"
    label-width="120px"
    v-model="original_amount">
    <span>{{ original_amount }}</span>
    </el-form-item>


    <el-form-item
    label="Payment Type">
        <el-select
        v-model="payment_type">
            <el-option
            v-for="payment_method in payment_methods"
            :key="payment_method.id"
            :label="uppercaseFirst(payment_method.payment_type)"
            :value="payment_method.id">

            </el-option>
        </el-select>
    </el-form-item>

    <el-form-item
        label="Description"
        >
        <el-input
        v-model="description"
        type="textarea"
        :rows="2"></el-input>
    </el-form-item>
   

    </div>

    <div v-if="with_date">
        <el-form-item
        label="Date">

        <el-date-picker
        v-model="date"
        type="date"
        placeholder="pick a date..."
        :picker-options="date_picker_options">

        </el-date-picker>

        </el-form-item>

    </div>
    

    <el-form-item>
        <el-button type="primary" @click="add_retail()">Submit</el-button>
    </el-form-item>

</el-form>
</div>        

    </div>
</template>


<script>

import {get_retails} from '@/api/inventory'
import {addRetail} from '@/api/treatment'
import { getPaymentMethods } from '@/api/finance'
import { uppercaseFirst } from '@/filters'

export default{
    props:['patient_id','user_id'],
    data(){
        return{
            date_picker_options:{
                disabledDate(time) {
                return time.getTime() > Date.now();
            }
            },
            all_retails:[],
            treatment_details:{},
            retail_details:[],
            description:'',
            with_finance:false,  
            with_date:false,         
            discount:'',
            final_amount:0,
            original_amount:0,
            payment_methods:[],
            payment_type:'',
            service_id:'',
            date:'',
        }
    },

    created(){
        this.get_all_retails()
        this.get_all_payment_methods()
    },

    methods:{
        uppercaseFirst,
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
        get_all_payment_methods(){
            getPaymentMethods().then((response)=>{
                this.payment_methods = response
            })
        },
        calculate_price(){
           
            this.final_amount = 0
            this.original_amount = 0
            let result 

            if(this.retail_details.length>0){
                
                for(let i =0; i<this.retail_details.length; i++){
                   result = this.all_retails.find(item=>item.id ===this.retail_details[i].id)
                    
                    this.original_amount +=(Number(result.unit_price)
                                    *Number(this.retail_details[i].units))


                    this.final_amount +=(Number(result.unit_price)
                                    *Number(this.retail_details[i].units)) * (1-this.discount/100)
                } 
                

                this.original_amount = Number(this.original_amount).toFixed(2)
                this.final_amount = Number(this.final_amount).toFixed(2)    
                this.service_id = result.categories_id
            }
        },
        add_retail(){

            if(this.with_finance&&!this.with_date){
                this.treatment_details={
                    payment_type:this.payment_type,
                    original_price:this.original_amount,
                    final_price:this.final_amount,
                    description:this.description,
                    discount:this.discount,
                    retail_details:this.retail_details,
                    patient_id : this.patient_id,
                    user_id : this.user_id,
                    with_finance:this.with_finance,
                    service_id: this.service_id

                }
            }else if(this.with_finance&&this.with_date){
                this.treatment_details={
                    payment_type:this.payment_type,
                    original_price:this.original_amount,
                    final_price:this.final_amount,
                    description:this.description,
                    discount:this.discount,
                    retail_details:this.retail_details,
                    patient_id : this.patient_id,
                    user_id : this.user_id,
                    with_finance:this.with_finance,
                    with_date:this.with_date,
                    service_id: this.service_id,
                    date:this.date,

                }
            }          
            else{
                this.treatment_details={
                retail_details:this.retail_details,
                
                patient_id : this.patient_id,
                user_id : this.user_id,                         
            }
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
.add-item-button{
    width:100%;
    margin:auto auto;
    margin-bottom: 10px;
}



</style>