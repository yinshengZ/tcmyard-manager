<template>
  <div class="app-container">
    
      <treatments-table
        :patient_id="patient_id"
        :user_id="user_id"
      ></treatments-table>
 
  </div>
</template>

<script>
import TreatmentsTable from "./components/TreatmentsTable.vue";

export default {
  components: { TreatmentsTable },
  props: ["patient_id", "user_id"],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped></style>
