<template>
  <div>
    <!--
    <el-card style="margin-bottom:20px;">
        <div slot="header" class="clearfix">
            <span>Patient Info</span>
        </div>

        <div class="patient-profile">
            <div class="patient-bio-section">
                <div class="patient-bio-section-header">                    
                    <span></span>
                    </div>
                <div class="patient-bio-section-body">
                    <div class="text-muted">

                        <p><span class="personal_info_heading">Name: </span>{{personal_info.first_name | capitalize}} {{personal_info.last_name | capitalize}}</p>
                        <p><span class="personal_info_heading">Date of Birth: </span> {{personal_info.date_of_birth}}</p>
                        <p><span class="personal_info_heading">Age: </span>{{personal_info.age}}</p>
                        <p><span class="personal_info_heading">Gender: </span>{{personal_info.gender | capitalize}}</p>
                        <p><span class="personal_info_heading">Marital Status: </span>{{personal_info.marital_status | capitalize}}</p>
                        <p><span class="personal_info_heading">Occupation: </span>{{personal_info.occupation}}</p>
                    </div>
                </div>
            </div>
        </div>
    </el-card>
    -->
    <el-card>
      <div slot="header" class="clearfix">
        <span>About Patient</span>
      </div>
      <!--{{patient_details}}-->

      <div class="patient-profile">
        <div class="box-center">
          <div class="patient-name text-center">
            {{ personal_info.first_name | capitalize }}
            {{ personal_info.last_name | capitalize }}
          </div>
        </div>

        <div class="patient-bio">
          <div class="patient-info patient-bio-section">
            <div class="patient-bio-section-header">
              <svg-icon icon-class="profile"></svg-icon><span>Basic Info</span>
            </div>
            <div class="patient-bio-section-body">
              <div>
                <p>
                  Date of Birth:
                  <span class="text-muted">{{
                    personal_info.date_of_birth
                  }}</span>
                </p>
                <p>
                  Age: <span class="text-muted">{{ personal_info.age }}</span>
                </p>
                <p>
                  Gender:
                  <span class="text-muted">{{
                    personal_info.gender | capitalize
                  }}</span>
                </p>
                <p>
                  Marital Status:
                  <span class="text-muted">{{
                    personal_info.marital_status | capitalize
                  }}</span>
                </p>
                <p>
                  Occupation:
                  <span class="text-muted">{{
                    personal_info.occupation | capitalize
                  }}</span>
                </p>
              </div>
            </div>
          </div>

          <div class="contact-info patient-bio-section">
          <div class="patient-bio-section-header">
            <svg-icon icon-class="contact"></svg-icon>
            <span>Contact Info</span>
          </div>

          <div class="patient-bio-section-body">
            <div>
              <p>Email: 
                <span class="text-muted">
                  {{contact_info.email}}
                </span>
              </p>

              <p>Telephone: 
                <span class="text-muted">
                  {{contact_info.telephone}}
                </span>
              </p>

              <p>Postcode: 
                <span class="text-muted">
                  {{contact_info.postcode}}
                </span>
              </p>
            </div>         
          </div>
        </div>

        <div class="patient-conditions patient-bio-section">
           <div class="patient-bio-section-header">
            <svg-icon icon-class="patient_record"></svg-icon>
            <span>Patient Conditions</span>
          </div>

          <div class="patient-bio-section-body">
            <div>
              <p>Main Issue: <span class="text-mute">{{patient_conditions.current_issue}}</span></p>
              <p>Past History: <span class="text-mute">{{patient_conditions.past_history}}</span></p>
              <p>Current Medication: <span class="text-mute">{{patient_conditions.current_medication}}</span></p>
              <p>HIV Status: <span class="text-mute" v-if="patient_conditions.hiv_status">Postive</span><span v-else>Negative</span>
              </p>
              <p>Symptoms: 
                <el-tag v-for="symptom in patient_conditions.symptoms"
                :key = "symptom.id"
                type="danger"
                effect="dark">
                {{symptom.symptom}}
                </el-tag>
              </p>
              <p>Allergies: 
                <el-tag v-for="allergy in patient_conditions.allergy"
                :key = "allergy.id"
                type="success"
                effect="dark"
                >
                {{allergy.allergies}}
                </el-tag>
              </p>
            </div>
          </div>
        </div>


        </div>


        


      </div>
    </el-card>

  </div>
</template>

<script>
export default {
  filters: {
    capitalize: function (value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
  props: ["personal_info", "contact_info", "patient_conditions"],

  data() {
    return {};
  },
  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.el-tag+.el-tag{
  margin-left:10px;
}
.box-center {
  margin: 0 auto;
  display: table;
}

.text-muted {
  color: #777;
}

.patient-profile {
  .patient-name {
    font-weight: bold;
  }

  .box-center {
    padding-top: 10px;
  }

  .box-social {
    padding-top: 30px;

    .el-table {
      border-top: 1px solid #dfe6ec;
    }
  }

  .user-follow {
    padding-top: 20px;
  }
}

.patient-bio {
  margin-top: 20px;
  color: #606266;

  span {
    padding-left: 4px;
  }

  .patient-bio-section {
    font-size: 14px;
    padding: 15px 0;

    .patient-bio-section-header {
      border-bottom: 1px solid #dfe6ec;
      padding-bottom: 10px;
      margin-bottom: 10px;
      font-weight: bold;
    }
  }
}
</style>