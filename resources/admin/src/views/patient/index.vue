<template>
  <div class="app-container">

    <!-- <el-row>
      <el-col :span="22" :offset="1">
        <panel-group />
      </el-col>
    </el-row> -->


    <div class="stat-group">
      <new-patients></new-patients>
      <patients-gender></patients-gender>
      <patients-locale></patients-locale>
    </div>




  </div>
</template>

<script>
import PanelGroup from './components/panel-group'
import NewPatients from './components/stat-components/new-patients.vue'
import patientsGender from './components/stat-components/patients-gender.vue';
import PatientsLocale from './components/stat-components/patients-locale.vue'
export default {
  components: {
    PanelGroup,
    NewPatients,
    patientsGender,
    PatientsLocale
  }
}
</script>

<style scoped>
.stat-group {
  display: flex;
  flex-direction: row;
  gap: 2%;
}
</style>