<template>
  <div class="app-container">
    <el-card class="box-card" shadow="hover">
      <el-form :model="patient_info" id="add_patient" ref="patient-info" label-width="140px" label-position="left">
        <el-row :gutter="20">
          <el-col :span="11">
            <el-form-item label="First Name" prop="first_name">
              <el-input v-model="patient_info.first_name" prefix-icon="el-icon-user-solid" />
            </el-form-item>
          </el-col>

          <el-col :span="11">
            <el-form-item label="Last Name" prop="last_name">
              <el-input v-model="patient_info.last_name" prefix-icon="el-icon-user-solid" />
            </el-form-item>
          </el-col>
        </el-row>





        <el-form-item label="Gender" prop="gender_id">

          <el-select v-model="patient_info.gender_id">
            <el-option v-for="genders in gender_rtv" :key="genders.id" :label="genders.gender" :value="genders.id" />
          </el-select>


          <el-tooltip content="Add New Genders" placement="top">
            <el-button class="add-button" @click="load_gender">
              <svg-icon icon-class="add"></svg-icon>
            </el-button>
          </el-tooltip>


        </el-form-item>

        <el-form-item label="Date of Birth" prop="date_of_birth">
          <el-date-picker v-model="patient_info.date_of_birth" type="date" format="yyyy/MM/dd"
            value-format="yyyy/MM/dd" />
        </el-form-item>

        <el-form-item label="Postcode" prop="postcode">
          <el-input v-model="patient_info.postcode" />
        </el-form-item>

        <el-form-item label="Telephone" prop="telephone">
          <el-input v-model="patient_info.telephone" />
        </el-form-item>

        <el-form-item label="Email" prop="email">
          <el-input v-model="patient_info.email" />
        </el-form-item>


        <el-form-item label="Marital Status" prop="marital_status_id">

          <el-select v-model="patient_info.marital_status_id">
            <el-option v-for="marital in marital_rtv" :key="marital.id" :label="marital.marital_status"
              :value="marital.id" />
          </el-select>


          <el-tooltip content="Add New Marital Status" placement="top">
            <el-button class="add-button" @click="load_marital">
              <svg-icon icon-class="add"></svg-icon>
            </el-button>
          </el-tooltip>

        </el-form-item>

        <el-form-item label="Occupation" prop="occupation">
          <el-input v-model="patient_info.occupation" />
        </el-form-item>

        <el-form-item label="HIV Postive" prop="hiv">
          <el-switch v-model="patient_info.hiv" />
        </el-form-item>

        <el-form-item label="Past History" prop="past_history">
          <el-input v-model="patient_info.past_history" type="textarea" :rows="3" />
        </el-form-item>

        <el-form-item label="Current Issue" prop="current_issue">
          <el-input v-model="patient_info.current_issue" type="textarea" :rows="3" />
        </el-form-item>



        <el-form-item label="Allergies" prop="allergies">

          <el-select v-model="patient_info.allergies" multiple filterable>
            <el-option v-for="allergy in allergies_rtv" :key="allergy.id" :label="allergy.allergies"
              :value="allergy.id" />
          </el-select>

          <el-tooltip content="Add New Allergies" placement="top">
            <el-button class="add-button" @click="load_allergy">
              <svg-icon icon-class="add"></svg-icon>
            </el-button>
          </el-tooltip>


        </el-form-item>


        <el-form-item label="Symptoms" prop="symptoms">

          <el-select v-model="patient_info.symptoms" multiple filterable>
            <el-option v-for="symptom in symptoms_rtv" :key="symptom.id" :label="symptom.symptom" :value="symptom.id" />
          </el-select>

          <el-tooltip content="Add New Symptoms" placement="top">
            <el-button class="add-button" @click="load_symptom">
              <svg-icon icon-class="add"></svg-icon>
            </el-button>
          </el-tooltip>

        </el-form-item>


        <el-form-item label="Medications" prop="current_medication">

          <el-select v-model="patient_info.current_medication" multiple filterable>
            <el-option v-for="medication in medications" :key="medication.id" :label="medication.medication"
              :value="medication.id">

            </el-option>
          </el-select>




          <el-tooltip content="Add New Medications" placement="top">
            <el-button class="add-button" @click="load_medication"><svg-icon icon-class="add"></svg-icon></el-button>

          </el-tooltip>



        </el-form-item>


        <el-form-item label="Diseases">

          <el-select multiple filterable v-model="patient_info.diseases" multiple filterable>
            <el-option v-for="disease in diseases" :key="disease.id" :label="disease.disease" :value="disease.id">

            </el-option>
          </el-select>

          <el-tooltip content="Add New Diseases" placement="top">
            <el-button class="add-button" @click="load_disease"><svg-icon icon-class="add"></svg-icon></el-button>
          </el-tooltip>


        </el-form-item>



        <el-row>
          <el-col>
            <el-form-item>
              <el-button type="primary" @click="add_patient(first_name)">Submit</el-button>
              <el-button @click="reset_form()"> Reset </el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <el-dialog title="Add New Allergy" :visible.sync="add_allergy_loaded" :before-close="get_allergies">
        <add-allergy :key="key" />
      </el-dialog>

      <el-dialog title="Add New Gender" :visible.sync="add_genders_loaded" :before-close="get_genders">
        <add-gender :key="key" />
      </el-dialog>

      <el-dialog title="Add New Marital Status" :visible.sync="add_marital_loaded" :before-close="get_maritals">
        <add-marital :key="key" />
      </el-dialog>

      <el-dialog title="Add New Symptoms" :visible.sync="add_symptom_loaded" :before-close="get_symptoms">
        <add-symptom :key="key" />
      </el-dialog>

      <el-dialog title="Add New Medications" :visible.sync="add_medications_loaded" :before-close="get_medications">

        <add-medication :key="key"></add-medication>

      </el-dialog>

      <el-dialog title="Add New Diseases" :visible.sync="add_diseases_loaded" :before-close="get_diseases">
        <add-diseases :key="key"></add-diseases>
      </el-dialog>

    </el-card>
  </div>
</template>

<script>
import { AddPatient } from "@/api/patient";
import { getGenders } from "@/api/patient";
import { getMarital } from "@/api/patient";
import { getAllergies } from "@/api/patient";
import { getSymptoms } from "@/api/patient";
import { getMedications } from "@/api/medication";
import { getDiseases } from "@/api/disease";

import AddGender from "./add-gender.vue";
import AddMarital from "./add-marital.vue";
import AddAllergy from "./add-allergy.vue";
import AddSymptom from "./add-symptom.vue";
import AddMedication from "@/views/medication/components/add-medication.vue"
import AddDiseases from "@/views/disease/components/add-disease.vue"

export default {
  components: {
    AddGender,
    AddMarital,
    AddAllergy,
    AddSymptom,
    AddMedication,
    AddDiseases
  },
  data() {
    return {
      patient_info: {
        first_name: "",
        last_name: "",
        gender_id: "",
        date_of_birth: "",
        postcode: "",
        telephone: "",
        email: "",
        marital_status_id: "",
        occupation: "",
        hiv: "false",
        past_history: "",
        current_issue: "",
        current_medication: [],
        allergies: [],
        symptoms: [],
        diseases: []
      },
      allergies: [],
      symptoms: [],
      medications: [],
      diseases: [],
      gender_rtv: null,
      marital_rtv: null,
      allergies_rtv: null,
      symptoms_rtv: null,
      add_allergy_loaded: false,
      add_genders_loaded: false,
      add_marital_loaded: false,
      add_symptom_loaded: false,
      add_medications_loaded: false,
      add_diseases_loaded: false,

      key: 0,
    };
  },
  created() {

    this.get_genders();
    this.get_maritals();
    this.get_allergies();
    this.get_symptoms();
    this.get_medications();
    this.get_diseases();
  },
  mounted() {

  },
  methods: {
    add_patient(data) {
      this.data = this.patient_info;
      AddPatient(this.data).then((response) => {
        console.log(response);
        this.$notify({
          title: 'Notification',
          type: 'success',
          message: response.data
        }).catch((error) => {
          this.$notify.error({
            title: 'Error',
            message: error.message
          })
        })
        this.$refs["patient-info"].resetFields();
      });
    },

    reset_form() {
      this.patient_info = {}
    },

    get_genders() {
      getGenders()
        .then((response) => {
          this.gender_rtv = response;
        })
        .catch((error) => {
          $this.message(error);
        });
      this.add_genders_loaded = false;
    },
    get_maritals() {
      getMarital().then((response) => {
        this.marital_rtv = response;
      });
      this.add_marital_loaded = false;
    },
    get_allergies() {
      getAllergies().then((response) => {
        this.allergies_rtv = response;
      });
      this.add_allergy_loaded = false;
    },
    get_symptoms() {
      getSymptoms().then((response) => {
        this.symptoms_rtv = response;
      });
      this.add_symptom_loaded = false;
    },
    get_medications() {
      getMedications().then((response) => {
        this.medications = response
      });
      this.add_medications_loaded = false;
    },

    get_diseases() {
      getDiseases().then((response) => {
        this.diseases = response
      });
      this.add_diseases_loaded = false;
    },
    load_gender: function () {
      this.add_genders_loaded = true
    },
    load_marital: function () {
      this.add_marital_loaded = true
    },
    load_allergy: function () {
      this.add_allergy_loaded = true
    },
    load_symptom: function () {
      this.add_symptom_loaded = true
    },
    load_medication: function () {
      this.add_medications_loaded = true;
      this.key++
    },
    load_disease: function () {
      this.add_diseases_loaded = true;
      this.key++
    }
  },
};
</script>

<style scoped>
.container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;
}

#add_patient {
  padding-top: 2%;
}

.add-button {
  margin-left: 1%;
}
</style>

