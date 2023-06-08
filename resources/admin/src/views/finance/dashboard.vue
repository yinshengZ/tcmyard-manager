<template>
    <div>
        <div class="finance-panel">
            <finance-overview></finance-overview>
        </div>
        
        <div class="charts">
            <el-card>
            <monthly-chart :data = yearly_incomes></monthly-chart>
        </el-card>
        </div>
        
        
        <finance-chart></finance-chart>
     
    </div>
</template>


<script>

import FinanceOverview from '@/views/finance/components/finance-overview.vue'
import MonthlyChart from './components/charts/monthly-chart.vue';
import FinanceChart from './components/charts/finance-chart.vue';




export default{

    components:{FinanceOverview,MonthlyChart, FinanceChart},

    data(){
        return{
            yearly_incomes:[],
        }
    },
    created(){
       
    },

    methods:{
     
    },

}


</script>


<style scoped>
.finance-panel{
    margin:30px;
}

.charts{
    width:95%;
    margin:auto;
}

</style>