<template>
  <div>
    <el-form id="add_symptom_form">
      <el-form-item>
        <el-input v-model="symptom.symptom" />
      </el-form-item>
      <el-button
        type="primary"
        style="width: 100%"
        @click="add_symptom"
      >Add Symptom</el-button>
    </el-form>
  </div>
</template>

<script>
import { addSymptoms } from '@/api/patient'
export default {
  name: 'AddSymptom',
  data() {
    return {
      symptom: {
        symptom: ''
      }
    }
  },
  methods: {
    add_symptom: function() {
      addSymptoms(this.symptom)
        .then((response) => {
          this.$message('Symptom added successfully')
        })
        .catch(function(error) {
          console.log(error)
        })

      document.getElementById('add_symptom_form').reset()
    }
  }
}
</script>
