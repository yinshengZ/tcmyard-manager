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







  </div>
</template>

<script>
import PanelGroup from './components/panel-group'
import NewPatients from './components/stat-components/new-patients.vue'
import patientsGender from './components/stat-components/patients-gender.vue';
import PatientsLocale from './components/stat-components/patients-locale.vue'
import TestApi from './components/stat-components/test-api.vue';
import AverageSpending from './components/stat-components/average-spending.vue'
export default {
  components: {
    PanelGroup,
    NewPatients,
    patientsGender,
    PatientsLocale,
    AverageSpending,
    TestApi
  },

  data() {
    return {

    }
  },

  methods: {
    click_me() {
      alert('oh my, you clicked me!')
    }
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

@media only screen and (max-width:1200px) {
  .stat-group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2%;
  }
}
</style>