<template>
  <div>
    <el-form id="add_gender_form">
      <el-form-item>
        <el-row :gutter="20">
           <el-col :span="12">
            <el-input v-model="gender.gender" />
            </el-col>
            <el-col :span="6">
          <el-button type="primary" style="width:50%" @click="add_gender">Add Gender</el-button>
        </el-col>        
        </el-row>        
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
