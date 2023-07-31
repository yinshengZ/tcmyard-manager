<template>
  <div>
    <div class="container">
      <el-tabs type="border-card" >
        <el-tab-pane lazy label="Incomes">
          <div class="charts">
            <!-- <current-year-income-chart></current-year-income-chart> -->
            <income-charts></income-charts>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Expenses">
         
        </el-tab-pane>

        <el-tab-pane lazy label="Records">
          <income-records></income-records>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>

import FinanceOverview from "@/views/finance/components/finance-overview.vue";
import CurrentYearIncomeChart from "./components/charts/current-year-income-chart.vue";
import YearOnYearIncomeChart from "@/views/finance/components/charts/year-on-year-income-chart.vue"
import IncomeCharts from "@/views/finance/components/charts/index.vue"
import IncomeRecords from "@/views/finance/components/records/index.vue"

export default {
  components: {FinanceOverview, CurrentYearIncomeChart, YearOnYearIncomeChart, IncomeCharts, IncomeRecords },

  data() {
    return {
      
    };
  },
  created() {},

  methods: {},
};
</script>

<style scoped>


.container{
    width:100%;
    margin-top:15px;
}

.finance-panel {
  margin: 30px;
}

.charts {
  width: 95%;
  
}
</style>
