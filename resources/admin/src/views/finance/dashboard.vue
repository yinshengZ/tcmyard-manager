<template>
    <div>
        <finance-overview></finance-overview>

        <monthly-chart></monthly-chart>
    </div>
</template>


<script>

import FinanceOverview from '@/views/finance/components/finance-overview.vue'
import MonthlyChart from './components/charts/monthly-chart.vue';


export default{

    components:{FinanceOverview,MonthlyChart},

}


</script>


<style scoped></style>