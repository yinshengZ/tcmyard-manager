<template>
    <div>
        <el-form>
            <el-form-item label="Disease Name:">
                <el-input v-model="disease.disease_name"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="success" @click="add_disease">Submit</el-button>
            </el-form-item>

        </el-form>
    </div>
</template>

<script>

import {addDisease} from "@/api/disease"

export default{
    data(){
        return{
            disease:{
                disease_name:''
            }
        }
    },

    methods:{
        add_disease(){
            addDisease(this.disease).then((response)=>{
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

<style scoped>

</style>