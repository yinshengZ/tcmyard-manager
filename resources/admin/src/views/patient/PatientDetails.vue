<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col :span="6" :xs="24">
        <patient-card
          :personal_info="personal_info"
          :contact_info="contact_info"
          :patient_conditions="patient_conditions"
          :patient_id="patient_id"
        ></patient-card>
      </el-col>

      <el-col :span="18" :xs="24">
        <el-card>
          <el-tabs v-model="activeTab"  @tab-click="handleClick">
            <el-tab-pane lazy label="Records" name="records">
              <records-card
                :patient_id="patient_id"
                :user_id="user.id"
                :user_name="user.name"
                :key = "key"
              ></records-card>
            </el-tab-pane>

            <el-tab-pane lazy label="Timeline" name="timelines">
              <p>hello timeline</p>
            </el-tab-pane>

            <el-tab-pane lazy label="Treatments" name="treatments">
              <treatments-card  :key="key" :patient_id="patient_id" :user_id="user.id" :user_name="user.name"></treatments-card>
            </el-tab-pane>

            <el-tab-pane lazy label="Finance" name="finance">
              <finance-card :key="key" :patient_id="patient_id" :user_id="user.id"></finance-card>
            </el-tab-pane>

            <el-tab-pane lazy label="Files" name="files">
              <files-card :key="key" :patient_id ="patient_id" :user_id = "user.id" :user_name="user.name" :token="user.token"></files-card>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
import moment from "moment";

import { mapGetters } from "vuex";

import { getSingle } from "@/api/patient";

import { getPatientIncome } from "@/api/finance";

import ConditionsCard from "./components/conditions-card.vue";
import PatientCard from "./components/patient-card.vue";
import ContactInfo from "./components/contact-info-card";
import RecordsCard from "./components/records-card";
import TreatmentsCard from "./components/treatments-card";
import FinanceCard from "./components/finance-card";
import FilesCard from "./components/files-card.vue";

export default {
  components: {
    PatientCard,
    ConditionsCard,
    ContactInfo,
    RecordsCard,
    TreatmentsCard,
    FinanceCard,
    FilesCard
  },
  data() {
    return {
      key:0,
      patient_id: "",
      activeTab: "records",
      patient_details: [],
      personal_info: {
        first_name: "",
        last_name: "",
        gender: "",
        date_of_birth: "",
        age: "",
        marital_status: "",
        occupation: "",
      
      },

      patient_conditions: {
        allergy: [],
        hiv_status: "",
        symptoms: [],
        current_medication: "",
        current_issue: "",
        past_history: "",
      },

      contact_info: {
        email: "",
        postcode: "",
        telephone: "",
      },

      user: {},
    };
  },

  computed: {
    ...mapGetters(["name", "introduction", "token", "avatar", "roles", "id"]),
  },
  created() {
    this.get_user();
    this.get_patient_id();
    this.get_patient_details();
  },
  mounted() {},

  methods: {

    handleClick(tab, event){
      this.key+=1
    },

    get_user() {
      this.user = {
        name: this.name,
        introduction: this.introduction,
        token: this.token,
        avatar: this.avatar,
        roles: this.roles,
        id: this.id,
      };

      console.log(this.user);
    },

    get_patient_incomes(){
      this.key+1
    },

    get_patient_id() {
      this.patient_id = this.$route.params.id;
    },

    get_patient_details() {
      getSingle(this.patient_id).then((response) => {
        this.patient_details = response;

        this.personal_info.age = moment().diff(response.date_of_birth, "years");
        this.personal_info.first_name = response.first_name;
        this.personal_info.last_name = response.last_name;
        this.personal_info.gender = response.gender.gender;
        this.personal_info.date_of_birth = response.date_of_birth;
        this.personal_info.marital_status =
          response.marital_status.marital_status;
        this.personal_info.occupation = response.occupation;
        console.log(this.personal_info);

        this.patient_conditions.allergy = response.allergy;
        this.patient_conditions.hiv_status = response.hiv_status;
        this.patient_conditions.symptoms = response.symptoms;
        this.patient_conditions.current_medication =
          response.current_medication;
        this.patient_conditions.current_issue = response.current_issue;
        this.patient_conditions.past_history = response.past_history;
        console.log(this.patient_conditions);

        this.contact_info.email = response.email;
        this.contact_info.postcode = response.postcode;
        this.contact_info.telephone = response.telephone;
        console.log(this.contact_info);
      });
    },
  },
};
</script>

<style scoped>
.patient-bio {
  margin-left: 15px;
  margin-top: 10px;
}
</style>


