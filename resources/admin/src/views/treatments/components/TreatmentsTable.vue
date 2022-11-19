<template>
    <div>
       
    

        <el-table
        :data="treatments"
        border
        style="width:100%"
        fit>

        <el-table-column
        prop="id"
        label="ID"
        :min-width="30"
        align="center"
        fit>
        <template slot-scope="{row}">
           {{row[0].treatment_id}}
            
        </template>
        </el-table-column>

        <el-table-column
        prop="details"
        label="Details"
        align="center">
        <template slot-scope="{ row }">
            <!--<span>{{date_convert(row.treatment_created_at)}}</span>-->
<!--             <span>{{row[0].treatment_id}} : {{date_convert(row[0].treatment_created_at)}}</span>  
 -->            <span v-for="(detail, index) in row">
                {{detail.name}}{{"("+detail.units+")"}}{{", "}}
            </span> 
        </template>
        </el-table-column>

        <el-table-column
        prop="amount"
        label="Quantity"
        :min-width="25"
        align="center"
        >
        <template slot-scope="{row}">
            <div>
                <span>
                    {{row[0].quantity}}
                </span>
            </div>
        </template>
        <span></span>
        </el-table-column>



        <el-table-column
        prop="category"
        label="Category"
        align="center"
        :min-width="28">

        <template
        slot-scope="{row}">
                
             {{row[0].service_title}}
      
        </template>

        </el-table-column>

        <el-table-column
        prop="operations"
        label="Operations">
        <template
        slot-scope="{row}">
        <el-button
        type="primary" @click="edit_treatment(row[0].treatment_id)">Edit</el-button>
        <el-button
        type="danger">Delete</el-button>
            
        </template>
        </el-table-column>



        </el-table>

        
        <el-dialog
        
       :visible.sync="this.update_treatment_table_visible"
       :before-close="get_patient_treatments"
       >
       
        <edit-treatment-table :treatment_id= "this.treatment_id" :key="key"></edit-treatment-table>
        </el-dialog>

       
    </div>
</template>

<script>

import EditTreatmentTable from '@/views/treatments/components/edit-treatment-table.vue'

import { getPatientTreatments } from '@/api/treatment'


import dayjs from 'dayjs'

export default{
    props:['patient_id','user_id'],
    components:{EditTreatmentTable},
    data(){
        return{
            treatments:[],
            update_treatment_table_visible:false,
            treatment_id:0,
            key:0


        }
    },

    created(){
        this.get_patient_treatments();
    },

    methods:{
        get_patient_treatments(){
            getPatientTreatments(this.patient_id).then((response)=>{
               
                this.treatments = response;
            })

            this.update_treatment_table_visible = false;

            
        },

        edit_treatment(id){
            this.update_treatment_table_visible = true;
            this.treatment_id = id
            this.key +=1
           
        },

        date_convert(date){
            return dayjs(date).format('dddd, MMMM D, YYYY h:mm A')
        }
    }
}


</script>

<style scoped>

</style>