<template>
    <div>
   
      <income-table :patient_id="patient_id" :user_id="user_id"></income-table>
       
    </div>
</template>

<script>

import IncomeTable from "@/views/finance/components/IncomeTable.vue"
import {mapGetters} from "vuex";

export default {
    components:{IncomeTable},
    props:["patient_id","user_id"],
    data(){
        return{
           
        }
    },
     computed: {
    ...mapGetters(["id"]),
    },

    created(){

    },

    methods:{
        
    }

}
</script>

<style lang="scss" scoped>
    
</style>