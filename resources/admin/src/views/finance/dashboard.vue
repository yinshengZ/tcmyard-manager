<template>
    <div>
        <div class="finance-panel">
            <finance-overview></finance-overview>
        </div>
        
        <monthly-chart :data = yearly_incomes ></monthly-chart>
        <finance-chart></finance-chart>
        <p>{{ yearly_incomes }}</p>
    </div>
</template>


<script>

import FinanceOverview from '@/views/finance/components/finance-overview.vue'
import MonthlyChart from './components/charts/monthly-chart.vue';
import FinanceChart from './components/charts/finance-chart.vue';

import { getWeeklyIncomes,getMonthlyIncomes, getYearlyIncomes } from '@/api/finance';


export default{

    components:{FinanceOverview,MonthlyChart, FinanceChart},

    data(){
        return{
            yearly_incomes:[],
        }
    },
    created(){
        this.get_yearly_incomes()
    },

    methods:{
     get_yearly_incomes(){
        getYearlyIncomes().then((response)=>{
            this.yearly_incomes = response
        })
     }
    },

}


</script>


<style scoped>
.finance-panel{
    margin:30px;
}

</style>