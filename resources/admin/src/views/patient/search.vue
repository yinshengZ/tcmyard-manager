<template>
  <div class="app-container">
    <el-card shadow="hover">
      <el-form label-position="top">
        <div class="search-box">

          <div class="search-field">
            <el-form-item label="Search: ">
              <template v-if="form_data.option != 'date'">
                <div>
                  <el-input v-model="form_data.input" placeholder="search here..." />

                </div>
              </template>

              <template v-else>

                <el-date-picker v-model="form_data.input" type="date" placeholder="Pick a date" format="dd-MM-yyyy"
                  value-format="dd-MM-yyyy" />


              </template>


            </el-form-item>
          </div>
          <div class="search-options">
            <el-form-item label="By">
              <el-select v-model="form_data.option" placeholder="Search by.." @change="reset_input">
                <el-option label="Name" value="name" />
                <el-option label="Email" value="email" />
                <el-option label="Gender" value="gender" />
                <el-option label="Symptom" value="symptom" />
                <el-option label="Allergy" value="allergy" />
                <el-option label="Date" value="date" />
              </el-select>
            </el-form-item>
          </div>



          <div class="search-buttons">
            <el-form-item label="">
              <el-tooltip effect="dark" content="Search Patient" placement="top">
                <el-button class="search-button" type="primary" icon="el-icon-search" @click="search_patient"></el-button>
              </el-tooltip>

              <el-tooltip effect="dark" content="Reset" placement="top">
                <el-button class="search-button" type="default" icon="el-icon-refresh" @click="reset_input"></el-button>

              </el-tooltip>
              <el-tooltip effect="dark" content="Add Patient" placement="top">
                <el-button class="search-button" type="success" icon="el-icon-plus" @click="add_new_patient"></el-button>
              </el-tooltip>
            </el-form-item>
          </div>
        </div>
      </el-form>
    </el-card>


    <!--    <el-card class="box-card " :span="12" :offset="6" shadow="always">
      <div slot="header" class="clearfix">
        <span>Search Patient:</span>

      </div>


      <el-row>
        <el-col :span="20" :offset="2">
          <el-form :ref="form_data" :model="form_data" :inline="true" :rules="validation" class="search_patient_form"
            label-position="top">
            <el-row>
              <template v-if="form_data.option != 'date'">
                <el-form-item label="input" prop="input">
                  <el-input v-model="form_data.input" placeholder="search here..." />
                </el-form-item>
              </template>

              <template v-else>
                <el-form-item label="input">
                  <el-date-picker v-model="form_data.input" type="date" placeholder="Pick a date" format="dd-MM-yyyy"
                    value-format="dd-MM-yyyy" />
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
                  <el-button type="primary" @click="search_patient">Search</el-button>
                  <el-button type="info" @click="reset_input">Reset</el-button>
                  <el-button type="primary" icon="el-icon-plus" @click="add_new_patient">
                    New
                  </el-button>
                </el-col>
              </el-form-item>
            </el-row>
          </el-form>
        </el-col>
      </el-row>
    </el-card> -->

    <div class="search-result">
      <div v-if="searched" class="patient_table">
        <patient-table :key="key" :form_data="form_data" />
      </div>
    </div>


    <el-dialog title="Add New Patient:" :visible.sync="add_patient_form_visible">
      <add-patient-form :key="key"></add-patient-form>
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
      add_patient_form_visible: false,
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
      if (this.form_data.input !== "") {
        this.searched = true
        this.key += 1
      } else {
        this.$message({
          showClose: true,
          type: 'error',
          message: 'The search field can not be empty!'
        })
      }

    },
    add_new_patient() {
      this.add_patient_form_visible = true
      this.key + 1
    },



    reset_input() {
      this.form_data.input = ''
    }
  }
}
</script>

<style scoped>
.patient_table {
  padding-top: 20px;
}


.search_patient_form {
  padding-top: 2%;
}

.search-box {
  display: flex;
  gap: 10px;
  height: 100px;
  flex-direction: row;
  overflow: hidden;


}

.search-field {

  width: 35%;

}

.search-options {
  width: 20%;



}

.search-buttons {
  width: 20%;
}

.search-button {
  transform: translateY(3.3em);
}

.title {
  font-size: 18px large;
}
</style>
