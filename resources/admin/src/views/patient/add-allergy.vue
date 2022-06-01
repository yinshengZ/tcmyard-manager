<template>
  <div>
    <el-form id="add_allergy_form">
      <el-form-item>
        <el-input v-model="allergy.allergy" />
      </el-form-item>
      <el-button
        type="primary"
        style="width: 100%"
        @click="add_allergies"
      >Add Allergy</el-button>
    </el-form>
  </div>
</template>

<script>

import { addAllergies } from '@/api/patient'
export default {
  name: 'AddAllergy',
  data() {
    return {
      allergy: {
        allergy: ''
      }

    }
  },
  methods: {
    add_allergies() {
      addAllergies(this.allergy).then((response) => {
        this.$message('Allergy added successfully')
      })
        .catch(function(error) {
          console.log(error)
        })
      document.getElementById('add_allergy_form').reset()
    }

  }
}
</script>
