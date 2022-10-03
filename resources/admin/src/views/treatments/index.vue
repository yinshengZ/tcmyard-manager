<template>
    <div class="app-container"> 
        <el-card class="box-card">
            <div class="button-group">
            <el-button-group>
                <el-button type="primary" icon="el-icon-plus" @click="load_add_herbs_form">Herbs</el-button> 
            <el-button type="success" icon="el-icon-plus" @click="load_add_services_form" >Services</el-button>
            <el-button type="info" icon="el-icon-plus">Retails</el-button>
            </el-button-group>
            
        </div>
        </el-card>

        <el-card>
            <treatments-table :patient_id="patient_id" :user_id="user_id" :key="key"></treatments-table>
        </el-card>
        
        <el-dialog
        title="Add Herbal Packages"
        :visible.sync="add_herbal_package_loaded"
        :before-close="get_all_patient_treatments">
                <add-herbs :patient_id="patient_id" :user_id="user_id" :key="key"></add-herbs>
        </el-dialog>
        
        <el-dialog
        title="Add Services"
        :visible.sync="add_service_loaded"
        :before-close="get_all_patient_treatments">
            <add-services :patient_id="patient_id" :user_id = "user_id" :key="key"></add-services>
        </el-dialog>
    
        
    </div>
</template>

<script>
import AddHerbs from "./components/add-herbs"
import AddServices from "./components/add-services.vue"
import TreatmentsTable from "./components/TreatmentsTable.vue"


export default {
    components:{AddHerbs, AddServices, TreatmentsTable},
    props:['patient_id','user_id'],    
    data(){
        return{
            add_herbal_package_loaded:false,
            add_service_loaded:false,
            key:0
            
        }
    },
    created(){
       this.test_props()
    },
    methods:{
        load_add_herbs_form(){
            this.add_herbal_package_loaded= true,
            this.key+=1
        },
        load_add_services_form(){
            this.add_service_loaded = true,
            this.key+=1
        },
        get_all_patient_treatments(){
            this.add_herbal_package_loaded = false
            this.add_service_loaded = false
        },
        test_props(){
            console.log(this.patient_id)
            console.log(this.user_id)
        }

     
    }
}
</script>

<style scoped>
.box-card{
    width:fit-content;
}
</style>