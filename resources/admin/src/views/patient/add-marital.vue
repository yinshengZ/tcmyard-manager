<template>
  <div>
    <el-form id="add_marital_form">
      <el-form-item>
        <el-input v-model="marital_status.marital_status" />
      </el-form-item>

      <el-row>
        <el-col :span="24">
          <el-button type="primary" style="width:100%" @click="add_marital">Add Marital Status</el-button>
        </el-col>
      </el-row>

    </el-form>
  </div>
</template>

<script>
import { addMarital } from '@/api/patient'
export default {
  name: 'AddMarital',
  data() {
    return {
      marital_status: {
        marital_status: ''
      }
    }
  },
  methods: {
    add_marital: function() {
      addMarital(this.marital_status).then((response) => {
        this.$message('Marital status added successfully')
      })
        .catch(function(error) {
          console.log(error)
        })
      document.getElementById('add_marital_form').reset()
    }
  }
}
</script>
