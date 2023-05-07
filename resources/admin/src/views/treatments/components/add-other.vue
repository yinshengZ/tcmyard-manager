<template>
    <div>
        <el-button style="width:100%; margin-bottom:3%;" @click="add_item_row" type="success" icon="el-icon-plus">Item</el-button>
        <div class="add-other-treatment-form" v-if="others_details.length >0">

            <el-form
        v-model="others_details"
        label-width="120px"
        label-position="left">
            <el-form-item
            v-for="(other, index) in others_details"
            :label="'Item '+(index+1)">

            <el-select
            v-model="other.id"
            filterable
            placeholder="others...">
           

            <el-option
            v-for="others_list in others_inventory"
            :key="others_list.id"
            :label="others_list.name + '/ stock( ' + others_list.stock+ ' )'"
            :value="others_list.id">
            </el-option>
        </el-select>

        <el-input-number
        v-model="other.units"
        :min="1"
        :max="9999999"
        :step="1"
        placeholder="units">

        </el-input-number>

        <el-button
        @click.prevent="remove_item_row(index)">Delete</el-button>

        </el-form-item>

        <el-form-item
        label="Extra Options">
            <el-checkbox v-model="with_finance">With Finance</el-checkbox>
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
            label="Price(£): ">
                <el-input-number
                v-model="final_price"
                :min="0"
                :max="999999999"
                :precision="2"
                :step="1"
                >

            </el-input-number>

            <el-button style="margin-left:3%" type="primary" @click="calculate_price">Calculate</el-button>

            </el-form-item>

            <el-form-item
            label="Original Price(£): ">
                {{ original_price }}
            </el-form-item>

            <el-form-item
            label="Payment Type: ">
                <el-select v-model="payment_type">
                    <el-option
                    v-for="payment_method in payment_methods"
                    :key="payment_method.id"
                    :label="uppercaseFirst(payment_method.payment_type)"
                    :value="payment_method.id">

                    </el-option>
                </el-select>
            </el-form-item>

            <el-form-item
            label="Description">
            
            <el-input type="textarea" v-model="description"></el-input>
            
            </el-form-item>
        </div>

        <div v-if="with_date">

            <el-form-item
            label="Date">
            <el-date-picker
            v-model="date"
            type="date"
            placeholder="pick a date..."
            :picker-options="date_picker_options"
            value-format="yyyy-MM-dd">

            </el-date-picker>
            </el-form-item>
          
        </div>
      

            <el-form-item>
                <el-button type="primary" @click="add_other()">Submit</el-button>
            </el-form-item>
        </el-form>
        </div>
        
    </div>
</template>


<script>
import {get_others} from '@/api/inventory'
import {addOther} from '@/api/treatment'
import { uppercaseFirst } from '@/filters'
import { getPaymentMethods } from '@/api/finance'

export default{
    props:['patient_id','user_id'],
    data(){
        return{
            date_picker_options:{
                disabledDate(time) {
                return time.getTime() > Date.now();
            }
            },
            others_inventory:[],
            others_details:[],
            discount:'',
            treatment_details:{},
            final_price:0,
            original_price:0,
            with_finance:false,
            with_date:false,
            date:'',
            payment_methods:[],
            payment_type:'',
            description:'',
            service_id:''

          

        }
    },
    created(){
        this.get_all_others_inventory()
        this.get_all_payment_methods()
    },

    methods:{
        uppercaseFirst,
        add_item_row(){
            this.others_details.push({
                id:"",
                units:"",
            })
        },

        remove_item_row(index){
            this.others_details.splice(index,1)
        },

        calculate_price(){
            this.final_price=0
            this.original_price=0
      

            

            if(this.others_details.length>0){
                let result 

                for(let i=0; i<this.others_details.length; i++){
                    result = this.others_inventory.find(item=>item.id === this.others_details[i].id)
                    this.original_price +=(Number(result.unit_price)*Number(this.others_details[i].units))
                    this.final_price += (Number(result.unit_price)*Number(this.others_details[i].units))*(1-this.discount/100)
                  
                }
                this.original_price = this.original_price.toFixed(2)
                this.final_price = this.final_price.toFixed(2)

                this.service_id = result.categories_id
               
            }
        },

        get_all_payment_methods(){
            getPaymentMethods().then((response)=>{
                this.payment_methods = response
            })
        },

        get_all_others_inventory(){
            get_others().then((response)=>{
                this.others_inventory = response
            })
        },

        add_other(){
            if(this.with_finance&&!this.with_date){
                this.treatment_details={
                    others_details:this.others_details,
                    patient_id:this.patient_id,
                    user_id:this.user_id,
                    discount:this.discount,
                    with_finance: this.with_finance,
                    with_date:this.with_date,
                    payment_type:this.payment_type,
                    original_price:this.original_price,
                    final_price:this.final_price,
                    description:this.description,
                    service_id:this.service_id                    
                }
            }else if(this.with_finance&&this.with_date){
                this.treatment_details={
                    others_details:this.others_details,
                    patient_id:this.patient_id,
                    user_id:this.user_id,
                    discount:this.discount,
                    with_finance: this.with_finance,
                    with_date:this.with_date,
                    payment_type:this.payment_type,
                    original_price:this.original_price,
                    final_price:this.final_price,
                    description:this.description,
                    service_id:this.service_id,
                    date:this.date,
                }
            }else{
                this.treatment_details={
                others_details:this.others_details,
                patient_id:this.patient_id,
                user_id:this.user_id,
                discount:this.discount,
                service_id:this.service_id
            }
            }

            
            addOther(this.treatment_details).then((response)=>{
                this.$notify({
                    title:"Notification",
                    message:response.message,
                    type:"success",
                })
            }).catch((error)=>{
                this.$notify.error({
                    title:"Error",
                    message:error.response.data.message,
                })
                
            })
           
        },
    }
}

</script>


<style scoped>


</style>