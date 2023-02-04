<template>
    <div>

        <files
        :token = this.token
        :patient_id = this.patient_id
        :user_id = this.user_id>
            
        </files>

    </div>
</template>




<script>

import Files from "@/views/patient-files/index.vue"

export default{
    props:['patient_id','user_id','user_name','token'],

    components:{
        Files,
    },
    

    data(){
        return{

        }
    }
}

</script>