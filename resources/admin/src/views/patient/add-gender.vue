<template>
  <div>
    <el-form id="add_gender_form">
      <el-form-item>
        <el-input v-model="gender.gender" />
      </el-form-item>
      <el-row>
        <el-col :span="24">
          <el-button type="primary" style="width:100%" @click="add_gender">Add Gender</el-button>
        </el-col>
      </el-row>

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
