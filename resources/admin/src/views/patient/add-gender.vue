<template>
  <div>
    <el-form id="add_gender_form">
      <el-form-item>
        <el-input v-model="gender.gender" />
      </el-form-item>

      <el-form-item>
        <el-button class="add-button" type="primary" @click="add_gender">Add Gender</el-button>

      </el-form-item>

    </el-form>
  </div>
</template>

<script>
import { addGender } from '@/api/patient'
export default {
  name: 'AddGender',
  data() {
    return {
      gender: {
        gender: ''
      }
    }
  },
  methods: {
    add_gender() {
      addGender(this.gender).then((response) => {
        this.$message('gender added successfully')
      })

      document.getElementById('add_gender_form').reset()
    }

  }

}

</script>

<style scoped>
.add-button {
  width: 100%;
}
</style>