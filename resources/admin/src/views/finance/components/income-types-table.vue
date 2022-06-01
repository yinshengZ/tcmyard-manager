<template>
    <div>
        <el-card>

        
        <el-table :data="income_types" style="width:100%">
            <el-table-column
            prop="id" label="ID" width="180">
            
            <template slot-scope="{row}">
                <span>{{row.id}}</span>                
            </template>
            </el-table-column>

            <el-table-column label="Income Type" width="180">
                <template slot-scope="{row}">
                    <span>{{row.income_type}}</span>
                    
                </template>
                
            </el-table-column>

            <el-table-column label="Created At" width="180">
                <template slot-scope="{row}">
                    <span>{{convert_date(row.created_at)}}</span>
                </template>
            </el-table-column>

            <el-table-column label="Operations" width="220">
                <template slot-scope="{row}">
                    <el-button type="primary" @click="show_update_form(row.id)">Update</el-button>
                    <el-button type="danger" @click="delete_income_type(row.id)">Delete</el-button>
                </template>

            </el-table-column>
        </el-table>

        <el-dialog
        title="Update Income Type: "
        :visible.sync="update_income_type_form_loaded"
        :before-close="get_all_income_types">
            <update-income-type-form
            :income_type_id = "income_type_id"
            :key = "key">

            </update-income-type-form>
        </el-dialog>

        </el-card>

        
    </div>
</template>

<script>
import {getAllIncomeTypes} from "@/api/finance"
import {deleteIncomeType} from "@/api/finance"
import UpdateIncomeTypeForm from "./update-income-type-form"


export default {
    components:{UpdateIncomeTypeForm},
    
    data(){
        return{
            income_types:[],
            income_type_id:'',
            update_income_type_form_loaded:false,
            key:0
        }
    },
    created(){
        this.get_all_income_types()
    },
    mounted(){
        
    },

    methods:{
        get_all_income_types(){
            getAllIncomeTypes().then((response)=>{
                this.income_types = response
                this.update_income_type_form_loaded = false
            })
        },

        show_update_form(id){
            this.income_type_id = id,
            this.key+=1,
            this.update_income_type_form_loaded = true
            
        },
        delete_income_type(id){
            if(confirm("Do you really want to delete this income type?")){
                deleteIncomeType(id).then((response)=>{
                    this.get_all_income_types()
                    this.$notify({
                        title:'Notification',
                        type:'success',
                        message:response
                    })
                })
            }
        },

        convert_date(date) {
      var date = new Date(date).toLocaleDateString("en-gb");
      return date;
    }
    }

}
</script>

<style scoped>

</style>