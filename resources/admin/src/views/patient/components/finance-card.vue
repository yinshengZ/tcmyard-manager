<template>
    <div>
    
    <finances :patient_id="this.patient_id" :user_id = "this.user_id">
    </finances>
    
    </div>
</template>


<script>
import Finances from "@/views/finance/index.vue"

export default{

    components:{Finances},
    props:['patient_id','user_id'],
    data(){
        return{

        }
    },

    methods:{

    }
}

</script>