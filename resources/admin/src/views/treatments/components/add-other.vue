<template>
    <div>
        <el-button @click="add_item_row" type="info" icon="el-icon-plus">Item</el-button>
        <el-form
        v-model="others_details"
        label-width="120px"
        label-position="left">
            <el-form-item
            v-for="(other, index) in others_details"
            :label="'Item '+(index+1)">

            <el-select
            v-model="other.id"
            filterable
            placeholder="others...">
           

            <el-option
            v-for="others_list in others_inventory"
            :key="others_list.id"
            :label="others_list.name + '/ stock( ' + others_list.stock+ ' )'"
            :value="others_list.id">
            </el-option>
        </el-select>

        <el-input-number
        v-model="other.units"
        :min="1"
        :max="9999999"
        :step="1"
        placeholder="units">

        </el-input-number>

        <el-button
        @click.prevent="remove_item_row(index)">Delete</el-button>

            </el-form-item>

            <el-form-item
            label="Discount (%): ">
            <el-input-number
            v-model="discount"
            :min="0"
            :max="100"
            :precision="2"
            :step="1"
            placeholder="discount">
            </el-input-number>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="add_other()">Submit</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>


<script>
import {get_others} from '@/api/inventory'
import {addOther} from '@/api/treatment'
export default{
    props:['patient_id','user_id'],
    data(){
        return{
            others_inventory:[],
            others_details:[],
            discount:'',
            treatment_details:{},
          

        }
    },
    created(){
        this.get_all_others_inventory()
    },

    methods:{
        add_item_row(){
            this.others_details.push({
                id:"",
                units:"",
            })
        },

        remove_item_row(index){
            this.others_details.splice(index,1)
        },
        get_all_others_inventory(){
            get_others().then((response)=>{
                this.others_inventory = response
            })
        },

        add_other(){
            this.treatment_details={
                others_details:this.others_details,
                patient_id:this.patient_id,
                user_id:this.user_id,
                discount:this.discount
            }
            addOther(this.treatment_details).then((response)=>{
                console.log(response)
            })
           
        },
    }
}

</script>


<style scoped>


</style>