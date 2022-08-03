<template>
    <div>
        <p>{{this.treatments}}</p>
    </div>
</template>

<script>

import { getPatientTreatments } from '@/api/treatment'

export default{
    props:['patient_id','user_id'],
    data(){
        return{
            treatments:[]

        }
    },
    created(){
        this.get_patient_treatments();
    },

    methods:{
        get_patient_treatments(){
            getPatientTreatments(this.patient_id).then((response)=>{
               
                this.treatments = response;
            })
        }
    }
}


</script>

<style scoped>

</style>