<template>
    <div>
       
    

        <el-table
        :data="treatments"
        border
        style="width:100%">

        <el-table-column
        prop="id"
        label="ID">
        <template slot-scope="{row}">
           {{row[0].treatment_id}}
            
        </template>
        </el-table-column>

        <el-table-column
        prop="date"
        label="Date">
        <template slot-scope="{ row }">
            <!--<span>{{date_convert(row.treatment_created_at)}}</span>-->
            <span>{{row[0].treatment_id}} : {{date_convert(row[0].treatment_created_at)}}</span>  
            <div v-for="(detail, index) in row">
                {{detail.name}}
            </div> 
        </template>
        </el-table-column>



        <el-table-column
        prop="details"
        label="Treatment Details">

        <template
        slot-scope="{row}">
                
              {{row.treatment_id}}

      
        </template>

        </el-table-column>

        </el-table>
    </div>
</template>

<script>

import { getPatientTreatments } from '@/api/treatment'
import dayjs from 'dayjs'

export default{
    props:['patient_id','user_id'],
    data(){
        return{
            treatments:[]

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
        },

        date_convert(date){
            return dayjs(date).format('dddd, MMMM D, YYYY h:mm A')
        }
    }
}


</script>

<style scoped>

</style>