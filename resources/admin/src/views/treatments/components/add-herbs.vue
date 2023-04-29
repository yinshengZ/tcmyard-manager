<template>
  <div>

      <el-button style="width:100%" @click="add_row" type="success" icon="el-icon-plus">Ingredient</el-button>
      <div class="add_herbs_form">
      <el-form v-model="herb_details" label-width="80px" label-position="left">
        <el-form-item
          v-for="(herb_detail, index) in herb_details"
          :label="'Herb ' + (index + 1)"
        >
          <!--<el-input v-model="herb_detail.name" placeholder="Name" size="medium"  style="width:300px "></el-input>-->
          <el-select
            v-model="herb_detail.id"
            filterable
            placeholder="select"
            style="width:200px"
           
          >
            <el-option
              v-for="herb in herb_rtv"
              :key="herb.id"
              :label="herb.name+' / stock: '+herb.stock"
              :value="herb.id"
            >
            </el-option>
          </el-select>


          <el-input-number
            v-model="herb_detail.unit"
            placeholder="Units"
            style="width: 130px; margin-left:10px"
            :min="1"            
          >
            
          </el-input-number>

          <el-button
            style="margin-left: 10px"
            @click.prevent="remove_herb_row(index)"
            >Delete</el-button
          >
        </el-form-item>

        <div v-if="herb_details.length">
          <el-form-item label="Quantity">
            <el-input-number v-model="quantity" :min="1"></el-input-number>
          </el-form-item>

<!--TODO: Add conditions for finance and date-->
          <el-form-item label="Discount">
              <el-input-number v-model="discount" :min="0" :max="100"></el-input-number>
          </el-form-item>          


          <el-form-item label="Price">
            
            <el-input-number v-model="final_price" :min="0" :max="999999999" :precision="2"></el-input-number>
            <el-button type="primary" @click="calculate_herb_price">Calculate</el-button>
          </el-form-item>

          <el-form-item label="Original Price: £" label-width="150px">
            <span>{{ original_price }}</span>
          </el-form-item>

          <el-form-item label="Payment Type">
            <el-select
            v-model="payment_type"
            >
              <el-option
              v-for="payment_method in payment_methods"
              :key="payment_method.id"
              :label="payment_method.payment_type"
              :value="payment_method.id"
              >

              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="Description">
            <el-input v-model="description"></el-input>
          </el-form-item>

         


          <el-button type="primary" @click="add_herbal_packages">Submit</el-button>
        </div>
      </el-form>

      

      </div>
      
   

  </div>
</template>

<script>
import { get_herbs } from "@/api/inventory";
import { addHerbalPackages } from "@/api/treatment"
import {getPaymentMethods} from "@/api/finance"
export default {
  props:['patient_id','user_id'],
  data() {
    return {
      herb_details: [],
      herb_rtv: [],
      quantity: "",    
      treatment_details:[], 
      stock: "0",
      search: "",
      herb: "",
      discount:"0",
      original_price:0,    
      final_price:0,
      description:'',
      payment_type:'',
      payment_methods:[],
      service_id:'',
      with_finance:false,
      with_date:false,
      

    };
  },
  created() {
    this.get_all_herbs();
    this.get_all_payment_methods();
  },


  methods: {
    calculate_herb_price(){
      this.final_price= 0
      this.original_price = 0
      if(this.herb_details.length>0){
      for(let i = 0; i<this.herb_details.length; i++){
        
          let result = this.herb_rtv.find(item=>item.id === this.herb_details[i].id)
          this.original_price +=(Number(result.unit_price) * Number(this.herb_details[i].unit))*this.quantity
          this.final_price += (Number(result.unit_price) * Number(this.herb_details[i].unit))*(1-this.discount/100)*this.quantity 
       }
       this.original_price = this.original_price.toFixed(2)
       this.final_price = this.final_price.toFixed(2)
    }
  

    },
    add_row() {
      this.herb_details.push({
        id: "",
        unit: "",
      });
    },
    add_herbal_packages() {
    
      this.treatment_details = {
      
      herb_details:this.herb_details, 
      quantity:this.quantity,       
      patient_id:this.patient_id, 
      user_id:this.user_id, 
      discount:this.discount,
      description:this.description,
      payment_type:this.payment_type,
      original_price:this.original_price,
      final_price:this.final_price,
      service_id:this.service_id
    }
      addHerbalPackages(this.treatment_details).then((response)=>{
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
       
    },

    remove_herb_row(index) {
      this.herb_details.splice(index, 1);
    },

    get_all_herbs() {
      get_herbs().then((response) => {
        this.herb_rtv = response;       
        this.service_id = response[0].categories_id
   
      });
    },

    get_all_payment_methods(){
      getPaymentMethods().then((response)=>{
        this.payment_methods = response
      })
    }
   

  },
};
</script>


<style lang="scss" scoped>
.add_herbs_form{
    margin-top:10px;
    width:fit-content;
}
</style>