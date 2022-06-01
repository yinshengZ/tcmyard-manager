<template>
  <div class="app-container">
    <h2>Current Editing User: {{user_name}}</h2>
    <tinymce v-model="record_details.record_body" :height="300" />
    <el-button type="primary" @click="add_record">
      Submit
      </el-button>    
  </div>

</template>

<script>
import {addRecord} from '@/api/record'
import Tinymce from '@/components/Tinymce'
export default {
  props:['patient_id','user_id','user_name'],  
  components: { Tinymce },
  data() {
    return {     
      record_details:{
        record_body:'',
        patient_id:'',
        user_id:''
      }
    }
  },

  methods:{
    add_record(){
      this.record_details.patient_id=this.patient_id
      this.record_details.user_id = this.user_id      
      
      addRecord(this.record_details).then((response)=>{
        this.$notify({
          title:'Notification',
                    message:response,
                    type:'success',
                    

        })
      })      
    }
  }
}
</script>

<style scoped>

</style>
