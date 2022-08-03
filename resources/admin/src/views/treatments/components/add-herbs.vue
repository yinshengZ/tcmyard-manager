<template>
  <div>
    <el-card>
      <el-button @click="add_row" type="info" icon="el-icon-plus">Ingredient</el-button>
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
          <el-form-item label="Discount">
              <el-input-number v-model="discount" :min="0" :max="100"></el-input-number>
          </el-form-item>
          <el-button type="primary" @click="add_herbal_packages">Submit</el-button>
        </div>
      </el-form>

      </div>
      
   
    </el-card>
  </div>
</template>

<script>
import { get_herbs } from "@/api/inventory";
import { addHerbalPackages } from "@/api/treatment"
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
      discount:"0"
    };
  },
  created() {
    this.get_all_herbs();
  },

  methods: {
    add_row() {
      this.herb_details.push({
        id: "",
        unit: "",
      });
    },
    add_herbal_packages() {
    
      this.treatment_details = {herb_details:this.herb_details, 
      quantity:this.quantity,       
      patient_id:this.patient_id, 
      user_id:this.user_id, 
      discount:this.discount}
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
      });
    },

  },
};
</script>


<style lang="scss" scoped>
.add_herbs_form{
    margin-top:10px;
    width:fit-content;
}
</style>