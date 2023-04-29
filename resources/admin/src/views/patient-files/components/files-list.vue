<template>
  <div>
    <div v-if="file_info.length <= 0">
      <p>There are no uploaded files for this patient yet!</p>
    </div>

    <div v-else>
      <div v-for="file in file_info" :key="file.id">
        <el-card shadow="hover">
          <el-row>
            <p>Description: {{ file.description }}</p>
          </el-row>
          <el-divider></el-divider>
          <el-row>
            <div class="files-box">
              <div class="file-list">
                <ul>
                  <li>
                    <span>
                      <i class="el-icon-paperclip"></i>
                      <el-link
                        type="primary"
                        v-bind:href="file.url"
                        target="_blank"
                        >{{ file.file_name }}</el-link
                      >
                    </span>
                  </li>
                </ul>
              </div>

              <div class="operation-buttons">
                <el-button
                  class="update-button"
                  type="warning"
                  icon="el-icon-edit"
                  circle
                  @click="load_update_patient_file_form(file.id)"
                >
                </el-button>

                <el-popconfirm
                  confirm-button-text="OK"
                  cancel-button-text="Cancel"
                  icon="el-icon-info"
                  icon-color="red"
                  title="Are you sure to delete this file?"
                  @onConfirm="delete_patient_file(file.id)"
                  @onCancel="get_patient_files()"
                >
                  <el-button
                    slot="reference"
                    class="delete-button"
                    type="danger"
                    icon="el-icon-delete"
                    circle
                  ></el-button>
                </el-popconfirm>
              </div>
            </div>
          </el-row>

          <el-divider
            >Uploaded At: {{ date_converter(file.created_at) }} by
            {{ file.uploaded_by }}</el-divider
          >
        </el-card>
        <el-divider></el-divider>
      </div>

      <el-dialog
        :visible.sync="file_update_form_loaded"
        :before-close="get_patient_files"
      >
      <div class="update-file-form">
        <update-file :file_id="this.file_id" :key="this.key"> </update-file>

      </div>
      </el-dialog>
    </div>
    <!-- end of v-else -->
  </div>
</template>

<script>
import {
  getPatientFiles,
  deletePatientFile,
  updatePatientFile,
} from "@/api/file";
import { date_converter } from "@/utils/converters";

import UpdateFile from "@/views/patient-files/components/update-file.vue";

export default {
  props: ["patient_id", "user_id", "user_name"],
  components: {
    UpdateFile,
  },

  data() {
    return {
      file_info: [],
      file_update_form_loaded: false,
      file_id: "",
      key: "",
    };
  },
  mounted() {
    this.get_patient_files();
  },

  methods: {
    get_patient_files() {
      getPatientFiles(this.patient_id).then((response) => {
        this.file_info = response;
        this.file_update_form_loaded=false;
      });
    },

    delete_patient_file(id) {
      deletePatientFile(id)
        .then((response) => {
          this.$notify({
            title: "Notification",
            type: "success",
            message: response.message,
          });
          this.get_patient_files();
        })
        .catch((error) => {
          this.$notify.error({
            title: "Error",
            message: error.response.data.message,
          });
        });
    },

    load_update_patient_file_form(id) {
      
      this.file_update_form_loaded = !this.file_update_form_loaded
      this.key += 1;
      this.file_id = id;
    },

    date_converter,


  },
};
</script>

<style scoped>
.files-box {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 60px;
  padding: 10px;
}
.operation-buttons {
  margin: auto auto;
}
.update-file-form{
  width:75%;
  margin:auto auto;
}

.file-name:hover {
  text-decoration: underline;
}
.file-list > ul > li {
  list-style-type: none;
}

.file-list > ul > li > span > a :hover {
  text-decoration: underline;
}
</style>
