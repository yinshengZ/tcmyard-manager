<template>
    <div>
        <add-income-type-form>
        </add-income-type-form>

       <income-types-table></income-types-table>

       <add-income-form
       :user_id="user_id"></add-income-form>

       
    </div>
</template>

<script>
import AddIncomeTypeForm from './components/add-income-type-form'
import IncomeTypesTable from './components/income-types-table'
import AddIncomeForm from './components/add-income-form.vue'

import {mapGetters} from "vuex";

export default {
    components:{AddIncomeTypeForm, IncomeTypesTable,AddIncomeForm},
    data(){
        return{
            user_id:this.id
        }
    },
     computed: {
    ...mapGetters(["id"]),
    },

}
</script>

<style lang="scss" scoped>
    
</style>