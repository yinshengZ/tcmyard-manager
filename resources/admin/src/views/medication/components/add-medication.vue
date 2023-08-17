<template>
  <div>
    
      <el-form>
        <el-form-item label="Medication"> 
            <el-input v-model="medication.medication"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="success" @click="add_medication">Submit</el-button>
        </el-form-item>
      </el-form>
  
  </div>
</template>



<script>
import { addMedication } from '@/api/medication';

export default{
    data(){
        return{
            medication:{
                medication:'',
            }
        }
    },

    methods:{
        add_medication(){
            addMedication(this.medication).then((response)=>{
                this.$notify({
                    title:'Notification',
                    type:'success',
                    message:response.data
                })
            })
        },
    }
}


</script>

<style scoped></style>
