<template>
  <div class="app-container">

    <!-- <el-row>
      <el-col :span="22" :offset="1">
        <panel-group />
      </el-col>
    </el-row> -->


    <div class="stat-group">

      <div class="stat-card">
        <new-patients></new-patients>
      </div>
      <div class="stat-card">
        <patients-gender></patients-gender>
      </div>
      <div class="stat-card">
        <patients-locale></patients-locale>
      </div>
      <div class="stat-card">
        <average-spending></average-spending>
      </div>

    </div>

    <div class="chart-area">
      <el-tabs type="card">
        <el-tab-pane label="Patients">
          <div id="new-patients-line-chart">
            <new-patients-line-chart></new-patients-line-chart>
          </div>
        </el-tab-pane>

        <el-tab-pane label="Genders">
          <p>hello chart 2</p>
        </el-tab-pane>
      </el-tabs>

    </div>



  </div>
</template>

<script>
import NewPatients from './components/stat-components/new-patients.vue'
import patientsGender from './components/stat-components/patients-gender.vue';
import PatientsLocale from './components/stat-components/patients-locale.vue'
import TestApi from './components/stat-components/test-api.vue';
import AverageSpending from './components/stat-components/average-spending.vue'
import NewPatientsTable from './components/data-tables/new-patients.vue'
import NewPatientsLineChart from './components/charts/new-patients-line-chart.vue'
export default {
  components: {

    NewPatients,
    patientsGender,
    PatientsLocale,
    AverageSpending,
    NewPatientsTable,
    TestApi,
    NewPatientsLineChart

  },

  data() {
    return {

    }
  },

  methods: {

  }
}
</script>

<style scoped>
.stat-group {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 2%;
  row-gap: 4%;
}

.chart-area {
  margin-top: 2%;
}

@media only screen and (max-width:900px) {
  .stat-group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2%;
  }

  .data-tables {
    margin-top: 3%;
    display: grid;
    grid-template-columns: 1fr;
  }

  #new-patients-line-chart {
    width: 400px;
    height: 400px;
  }
}
</style>