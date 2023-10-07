<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col :span="6" :xs="24">
        <patient-card :patient_id="patient_id"></patient-card>
      </el-col>

      <el-col :span="18" :xs="24">
        <el-card>
          <el-tabs v-model="activeTab" @tab-click="handleClick">
            <el-tab-pane lazy label="Records" name="records">
              <records-card :patient_id="patient_id" :user_id="user.id" :user_name="user.name" :key="key"></records-card>
            </el-tab-pane>

            <el-tab-pane lazy label="Treatments" name="treatments">
              <treatments-card :key="key" :patient_id="patient_id" :user_id="user.id"
                :user_name="user.name"></treatments-card>
            </el-tab-pane>

            <el-tab-pane lazy label="Finance" name="finance">
              <finance-card :key="key" :patient_id="patient_id" :user_id="user.id"></finance-card>
            </el-tab-pane>

            <el-tab-pane lazy label="Files" name="files">
              <files-card :key="key" :patient_id="patient_id" :user_id="user.id" :user_name="user.name"
                :token="user.token"></files-card>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script>

import { mapGetters } from "vuex";


import PatientCard from "./components/patient-card.vue";
import RecordsCard from "./components/records-card";
import TreatmentsCard from "./components/treatments-card";
import FinanceCard from "./components/finance-card";
import FilesCard from "./components/files-card.vue";

export default {
  components: {
    PatientCard,

    RecordsCard,
    TreatmentsCard,
    FinanceCard,
    FilesCard
  },
  data() {
    return {
      key: 0,
      patient_id: "",
      activeTab: "records",
      patient_details: [],


      user: {},
    };
  },

  computed: {
    ...mapGetters(["name", "introduction", "token", "avatar", "roles", "id"]),
  },
  created() {
    this.get_user();
    this.get_patient_id();

  },
  mounted() { },

  methods: {

    handleClick(tab, event) {
      this.key += 1
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

    get_patient_incomes() {
      this.key + 1
    },

    get_patient_id() {
      this.patient_id = this.$route.params.id;
    },


  },
};
</script>

<style scoped></style>


