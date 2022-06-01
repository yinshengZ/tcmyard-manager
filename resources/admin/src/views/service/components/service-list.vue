<template>
    <div>
        <el-card>
            <el-button
            icon="el-icon-plus"
            type="primary"
            @click="show_add_new_service_form">
            New
            </el-button>
             <el-table :data="service_list" style="width:100%">
            <el-table-column label="ID" width="60">
                <template slot-scope="{row}">
                    <span>{{row.id}}</span>                   
                </template>
            </el-table-column>

            <el-table-column label="Title">
                <template slot-scope="{row}">
                <span>{{row.service_title}}</span>                   
                    
                </template>
            </el-table-column>

            <el-table-column label="Unit Price">
                <template slot-scope="{row}">
                    <span>{{row.unit_price}}</span> 
                    
                </template>
            </el-table-column>

            <el-table-column label="Description">
                <template slot-scope="{row}">
                    <span>
                        {{row.description}}
                        </span>                   
                </template>
            </el-table-column>   

            <el-table-column label="Operations">
                <template slot-scope="{row}">
                    <el-button type="primary" @click="show_update_service_form(row.id)">
                        Update
                    </el-button>

                    <el-button type="danger" @click="delete_service(row.id)">
                        Delete
                    </el-button>
                    
                </template>
            </el-table-column>

            
        </el-table>
        </el-card>

        <el-dialog
        title="Update Service: "
        :visible.sync="update_form_visible"
        :before-close="get_services">
        
        <update-service-form
        :service_id="service_id"
        :key="key">

        </update-service-form>
        </el-dialog>

        <el-dialog
        title="Add New Service:"
        :visible.sync="add_new_service_form_visible"
        :before-close="get_services">
            <add-service-form
            :key="key"></add-service-form>
        </el-dialog>
       
    </div>
</template>

<script>
import {getAllServices} from '@/api/service.js'
import UpdateServiceForm from './update-service-form'
import AddServiceForm from './add-service'
export default {
    components:{UpdateServiceForm,AddServiceForm},
    data(){
        return{
            service_list:[],
            service_id:'',
            update_form_visible:false,
            add_new_service_form_visible:false,
            key:0
        }
    },
    created(){
        this.get_services();
    },

    methods:{
        get_services(){
            getAllServices().then((response)=>{
                this.service_list = response
            })
            this.service_id = ''
            this.update_form_visible = false
            this.add_new_service_form_visible=false
            
        },
        show_update_service_form(id){
            this.service_id= id            
            this.update_form_visible=true
            this.key+=1
        },
        show_add_new_service_form(){
            this.add_new_service_form_visible=true
            this.key+=1
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>