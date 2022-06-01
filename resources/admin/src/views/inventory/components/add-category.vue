<template>
  <div>
       
      <div class="add_category_form">
        <el-form ref="add_category_form" :model="category_details" label-width="120px">
            <el-form-item label="Category">
                <el-input v-model="category_details.categories"></el-input>
                </el-form-item> 

                <el-form-item>
                    <el-button type="primary" @click="add_new_category">
                        Submit
                    </el-button>
                </el-form-item>
        </el-form>
      </div>
    
  </div>
</template>

<script>
import {add_category} from '@/api/category'
export default {
    data(){
        return{
            category_details:{
                categories:''
            }
        }
    },
    methods:{
        add_new_category(){
            this.data=this.category_details
            add_category(this.data).then((response)=>{
                this.$notify({
                  title:'Notification',
                  message: response,
                  type: 'success'
                })
            })
        }
    }    
}
</script>

<style scoped>

</style>