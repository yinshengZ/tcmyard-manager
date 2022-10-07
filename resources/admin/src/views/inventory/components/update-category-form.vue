<template>
    <div>   

            <div class="update_category_form">                
                <el-form 
                ref="update_category_form" 
                :model="category_details"
                label-position="left" 
                label-width="120px">

                    <el-form-item label="ID">
                        <el-input :disabled="true" v-model="category_details.id">

                        </el-input>
                    </el-form-item>

                    <el-form-item label="Category">
                        <el-input v-model="category_details.categories">

                        </el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="update_category" style="float:left">
                            Submit
                        </el-button>
                    </el-form-item>

                </el-form>
            </div>          
        
    </div>
</template>

<script>
import {getSingle} from '@/api/category'
import {updateCategory} from '@/api/category'

export default {
    props:['category_id'],
    data(){
        return{
            category_details:{
                id:'',
                categories:''
            }
        }
    },
    mounted(){
        this.get_category_details();
    },

    methods:{
        get_category_details(){
            getSingle(this.category_id).then((response)=>{                
                this.category_details = response                
            })
        },
        update_category(){            
            updateCategory(this.category_details,this.category_id).then((response)=>{
                this.$notify({
                    title:'Notification',
                    message: response,
                    type:'success'
                })
            })
        }

    }
}
</script>