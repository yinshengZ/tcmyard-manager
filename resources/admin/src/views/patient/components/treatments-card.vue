<template>
    <div>
        <treatments  
        :patient_id="patient_id"
        :user_id="user_id"></treatments>
    </div>

</template>

<script>
import Treatments from "@/views/treatments/index.vue"

import { getPatientTreatments } from "@/api/treatment"
export default {
    props:['patient_id','user_id','user_name'],
    components:{Treatments},
    data(){
        return{

        }
    },
    mounted(){
       this.get_patient_treatments()
    },
    methods:{
      get_patient_treatments(){
          getPatientTreatments(this.patient_id).then((response)=>{
              console.log(response)
          })
      }
    }
}
</script>

<style scoped>

</style>