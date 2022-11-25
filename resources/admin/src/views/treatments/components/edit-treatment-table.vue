<template>
    <div>
        <el-card shadow="always">
        <!--<p>{{this.treatment_detail}}</p>-->
        <!-- <p v-for ="treatment in this.treatment_detail">
            {{treatment.inventory[0].name}}
            {{treatment.quantity}}
            {{treatment.units}}
        </p> -->

 <!--TODO:fix inventory not defined error-->
        <div v-if="this.treatment_detail[0].inventory[0].categories_id == 1">
            <p>herbs update</p>
            <p>{{this.inventory}}</p>
            <el-form :model="updated_treatment_detail" label-width="120px">
            <div v-for="treatment in this.treatment_detail">
                <el-form-item
            label="Name"
            >

            <el-select
            v-model="updated_treatment_detail">
                <el-option
                v-for="item in this.inventory"
                :key="item.id"
                :label="item.name + ' / stock: '+ item.stock"
                :value="item.id">

                </el-option>
        </el-select>


            </el-form-item>

            </div>
           
        </el-form>
      </div>
      <div v-else-if="this.treatment_detail[0].inventory[0].categories_id==2">
        <p>service update</p>
      </div>

      <div v-else-if="this.treatment_detail[0].inventory[0].categories_id==3">
        <p>retail update</p>
    
    
    </div>
        
        
    </el-card>
        
    </div>
</template>

<script>
    import {getSingleTreatment} from '@/api/treatment'
    import {get_herbs, get_services, get_retails, get_others} from '@/api/inventory'
    export default{
        props:['treatment_id'],

        data(){
            return{
                id: this.treatment_id,
                treatment_detail:[],
                updated_treatment_detail:[],
                inventory:[]

            }
        },

        created(){
            this.get_treatment_details()
          
        },
        methods:{
            get_treatment_details(){
                getSingleTreatment(this.id).then((response)=>{
                    this.treatment_detail = response                 
                    
                    this.get_categorized_inventories(this.treatment_detail[0].inventory[0].categories_id)
                   
                })

                
            },

            get_categorized_inventories(categories_id){
               if(categories_id ==1){
                this.get_all_herbs()
               }else if(categories_id==2){
                 this.get_all_services
               }else if(categories_id==3){
                this.get_all_retails
               }else if(categories_id==4){
                this.get_all_others
               }
            },

            get_all_herbs(){
                get_herbs().then((response)=>{
             
                    this.inventory = response
                   
                })

            },
            get_all_services(){
                get_services().then((response)=>{
                    this.inventory = response
                })
            },
            get_all_retails(){
                get_retails().then((response)=>{
                    this.inventory = response
                })
            },
            get_all_others(){
                get_others().then((response)=>{
                    this.inventory=response
                })
            }

        },
    }
</script>