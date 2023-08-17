<template>
    <div>
        <el-form>
            <el-form-item  label="Patient ID:">
                <el-input v-model="this.id" disabled></el-input>
            </el-form-item>

            <el-form-item label="Disease:">
                <el-select v-model="diseases" filterable>
                    <el-option 
                    v-for="disease in all_diseases"
                    :key="disease.id"
                    :label="disease.disease"
                    :value="disease.id"></el-option>
                </el-select>

                <el-button @click="load_add_disease_form"> <svg-icon icon-class="add"></svg-icon></el-button>
            </el-form-item>

            <el-form-item>
                <el-button type="success" @click="add_patient_disease">Submit</el-button>
            </el-form-item>

        </el-form>
        
        <el-dialog
        :visible.sync="add_disease_form_loaded"
        :beforeClose="get_all_diseases"
        width="30%"
        append-to-body>
            <add-disease></add-disease>

        </el-dialog>
    </div>
</template>



<script>
import { getDiseases } from '@/api/disease';
import {addPatientDisease} from '@/api/patient'

import AddDisease from './add-disease.vue';
export default{
    components:{
        AddDisease
    },
    props:['patient_id'],
    data(){
        return{
            id:'',
            diseases:[],
            all_diseases:'',
            add_disease_form_loaded:false,
        }
    },
    mounted(){
        this.id = this.patient_id;
        this.get_all_diseases()
    },

    methods:{
        get_all_diseases(){
            getDiseases().then((response)=>{
                this.all_diseases = response
                this.add_disease_form_loaded=false
            })
        },

        load_add_disease_form(){
            this.add_disease_form_loaded=true
        },

        add_patient_disease(){
            let patient_disease ={
                patient_id: this.id,
                disease_id: this.diseases
            }
            

            addPatientDisease(patient_disease).then((response)=>{
                this.$notify({
                    title:'Notification',
                    type:'success',
                    message:response.data
                })
            })
        }
    }
}

</script>


