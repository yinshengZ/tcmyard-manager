<template>
  <div class="app-container">
    <el-card class="box-card search-box" :span="12" :offset="6" shadow="always">
      <div slot="header" class="clearfix">
        <span>Search Patient:</span>
        <el-button
        style="float:right"
        type="primary"
        icon="el-icon-plus"
        @click="add_new_patient">
        New
        </el-button>
      </div>

      <!-- <el-row>
         <el-form :model="form_data" :rules="validation" :ref="form_data" class="search_patient_form" label-position="top">
           el
        </el-form>
       </el-row>
    -->

      <el-row>
        <el-col :span="20" :offset="2">
          <el-form
            :ref="form_data"
            :model="form_data"
            :inline="true"
            :rules="validation1"
            class="search_patient_form"
            label-position="top"
          >
            <el-row>
              <template v-if="form_data.option != 'date'">
                <el-form-item label="input" prop="input">
                  <el-input
                    v-model="form_data.input"
                    placeholder="search here..."
                  />
                </el-form-item>
              </template>

              <template v-else>
                <el-form-item label="input">
                  <el-date-picker
                    v-model="form_data.input"
                    type="date"
                    placeholder="Pick a date"
                    format="dd-MM-yyyy"
                    value-format="dd-MM-yyyy"
                  />
                </el-form-item>
              </template>

              <el-form-item label="Search By">
                <el-select v-model="form_data.option" placeholder="Search by.." @change="reset_input">
                  <el-option label="Name" value="name" />
                  <el-option label="Email" value="email" />
                  <el-option label="Gender" value="gender" />
                  <el-option label="Symptom" value="symptom" />
                  <el-option label="Allergy" value="allergy" />
                  <el-option label="Date" value="date" />
                </el-select>
              </el-form-item>
            </el-row>

            <el-row>
              <el-form-item>
                <el-col>
                  <el-button
                    type="primary"
                    @click="search_patient"
                  >Search</el-button>
                  <el-button type="info" @click="reset_form">Reset</el-button>
                </el-col>
              </el-form-item>
            </el-row>
          </el-form>
        </el-col>
      </el-row>
    </el-card>

    <el-row>
      <el-col :span="20" :offset="2">
        <div v-if="searched" class="patient_table">
          <patient-table :key="key" :form_data="form_data" />
        </div>
      </el-col>
    </el-row>

    <el-dialog
    title="Add New Patient:"
    :visible.sync="add_patient_form_visible"
    :before-close="handle_close">
    <add-patient-form
    :key="key"></add-patient-form>
    </el-dialog>
  </div>
</template>

<script>

import patientTable from './components/patient-table.vue'
import AddPatientForm from './add-patient'
export default {
  components: { patientTable, AddPatientForm },
  data() {
    return {
      form_data: {
        input: 'yinsheng',
        option: 'name'
      },
      add_patient_form_visible:false,
      key: 0,
      date: '',
      searched: false,

      validation: {
        input: [
          {
            required: true,
            message: 'The field can not be empty!',
            trigger: 'blur'
          },
          {
            min: 1,
            max: 255,
            message: 'At least 1 character is needed to search',
            trigger: 'blur'
          }
        ]
      }
    }
  },

  methods: {
    search_patient() {
      this.searched = true
      this.key += 1
    },
    add_new_patient(){
      this.add_patient_form_visible=true
      this.key+1
    },   

    reset_form() {
      alert('reset!')
    },

    reset_input() {
      this.form_data.input = ''
    }
  }
}
</script>

<style scoped>


.patient_table{
  padding-top:20px;
}


.search_patient_form {
  padding-top: 2%;
}

.search-box {
  width: 40%;
  margin-top: 3%;
  margin-left: 30%;
}

.title {
  font-size: 18px large;
}
</style>
