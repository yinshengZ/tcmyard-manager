<template>
    <div>
        <el-tabs tab-position="right">
            <el-tab-pane label="Current Year">
                <div class="income-charts">
                    <current-year-income-chart></current-year-income-chart>

                </div>
            </el-tab-pane>

            <el-tab-pane label="Comparisons">
                <year-on-year-income-chart></year-on-year-income-chart>
            </el-tab-pane>
        </el-tabs>
        
    </div>
</template>




<script>
import CurrentYearIncomeChart from './current-year-income-chart.vue';
import YearOnYearIncomeChart from './year-on-year-income-chart.vue'


export default{
    components:{CurrentYearIncomeChart,YearOnYearIncomeChart},

    data(){
        return{

        }
    }
}



</script>


<style scoped>
.income-charts{
    margin-right:2%;
}


</style>