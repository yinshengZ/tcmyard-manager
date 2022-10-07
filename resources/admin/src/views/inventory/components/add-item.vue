<template>
    <div>
        <el-card>            
            <div class="add-item-form">
                <el-form ref="add-item-form" :model="inventory_details" label-width="120px">
                    <el-form-item label="Chinese Name">
                        <el-input v-model="inventory_details.name"></el-input>
                    </el-form-item>

                    <el-form-item label="English Name">
                        <el-input v-model="inventory_details.eng_name"></el-input>
                    </el-form-item>

                    <el-form-item
                    label="Unit Price">
                    <el-input-number v-model="inventory_details.unit_price" :precison="2" :step="0.1" :max="999999"></el-input-number>
                    </el-form-item>

                    <el-form-item label="Stock">
                        <el-input v-model="inventory_details.stock"></el-input>
                    </el-form-item>

                    <el-form-item label="Category">
                        <el-select v-model="inventory_details.categories_id" placeholder="select...">
                            <el-option v-for="categories in categories_rtv"
                            :key="categories.id"
                            :label="categories.categories"
                            :value="categories.id"></el-option>
                        </el-select>
                        <a class="inline-button">
                            <el-button 
                        type="primary"
                        icon="el-icon-circle-plus"
                        @click="add_new_category_form">
                        </el-button>
                        </a>
                        
                    </el-form-item>

                    <el-form-item label="Expiry Date">
                        <el-date-picker
                        v-model="inventory_details.expiry_date"
                        type="date"
                         format="yyyy/MM/dd"
                         value-format="yyyy/MM/dd"
                        placeholder="Pick a date">
                        </el-date-picker>
                    </el-form-item>

                    <el-form-item label="Description">
                        <el-input type="textarea" v-model="inventory_details.description"></el-input>
                    </el-form-item>
                    
                    <el-form-item>
                        <el-button type="primary" @click="add_new_item">
                            Create
                        </el-button>
                        <el-button type="info" @click="reset">
                            Reset
                        </el-button>
                    </el-form-item>

                </el-form>

                <el-dialog
                title="Add New Category:"
                :visible.sync="add_new_category_form_visible"
                :before-close="get_categories">
                <add-category></add-category>
                </el-dialog>
            </div>
        </el-card>
    </div>
</template>

<script>
import {add_item} from '@/api/inventory'
import {getAll} from '@/api/category'
import AddCategory from './add-category.vue'
export default {
    components:{AddCategory},
    data(){
        return{ 
                inventory_details:{
                name:'',
                eng_name:'',
                stock: 0,
                categories_id:'',
                description:''

            },
            categories_rtv:'',
            add_new_category_form_visible:false
        }
    },
    mounted(){
        this.get_categories();
    },
    methods:{
        add_new_item(){
            this.data = this.inventory_details
            add_item(this.data).then((response)=>{
                this.$notify({
                    title:'Notification',
                    message:response,
                    type:'success'
                })

            })

        },

        get_categories(){
            getAll().then((response)=>{
                this.categories_rtv = response
            })
            this.add_new_category_form_visible = false
        },

        add_new_category_form(){
            this.add_new_category_form_visible = true
        }
    }
    

}
</script>

<style scoped>

    .inline-button{
        padding-left: 10px;
    }


</style>