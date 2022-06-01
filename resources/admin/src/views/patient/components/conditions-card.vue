<template>
  <div>
    <el-card>
      <div slot="header" class="clearfix">
        <span>Patient Conditions</span>
      </div>

      <div class="patient_conditions">
        <p>
          <span class="conditions_card_heading">Main Issue: </span
          ><span class="text-muted">{{
            patient_conditions.current_issue
          }}</span>
        </p>
        <p>
          <span class="conditions_card_heading">Current Medication: </span
          ><span class="text-muted">{{
            patient_conditions.current_medication
          }}</span>
        </p>
        <p>
          <span class="conditions_card_heading">Past History: </span
          ><span class="text-muted">{{ patient_conditions.past_history }}</span>
        </p>
        <p>
          <span class="conditions_card_heading">HIV Postive: </span
          ><span class="text-muted">{{ patient_conditions.hiv_status }}</span>
        </p>       
        <p>
          <span class="conditions_card_heading"> Allergies: </span>
          <el-tag
            v-for="allergy in patient_conditions.allergy"
            :key="allergy.id"
            type='success'
            effect="dark"
          >
            {{ allergy.allergies }}
          </el-tag>
        </p>

        <p>
          <span class="conditions_card_heading">Symptoms: </span>
          <el-tag
            v-for="symptom in patient_conditions.symptoms"
            :key="symptom.id"
            type='danger'
            effect="dark"
          >
            {{ symptom.symptom }}
          </el-tag>
        </p>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  props: ["patient_conditions"],
  filters: {
    capitalize: function (value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },

  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>

.el-tag+.el-tag{
    margin-left:10px;
}
</style>