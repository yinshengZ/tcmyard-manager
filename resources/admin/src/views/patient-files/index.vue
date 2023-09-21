<template>
  <div>
    <el-card>
      <el-button type="primary" icon="el-icon-folder-add" @click="load_upload_files_form">New</el-button>

      <el-divider><i class="el-icon-folder-opened"></i></el-divider>

      <file-list :patient_id="this.patient_id" :user_id="this.user_id" :user_name="this.user_name"
        :key="this.key"></file-list>


    </el-card>

    <el-dialog :visible.sync="upload_file_form_visible" :before-close="reload_files_list">
      <upload-file :patient_id="this.patient_id" :user_id="this.user_id" :key="this.key"></upload-file>
    </el-dialog>
  </div>
</template>

<script>
import UploadFile from "@/views/patient-files/components/upload-file.vue";
import FileList from "@/views/patient-files/components/files-list.vue";
import { getToken } from "@/utils/auth";
export default {
  props: ["patient_id", "user_id", "user_name"],
  components: {
    UploadFile,
    FileList,
  },
  data() {
    return {
      file: [],
      fileList: [],
      token: "",
      description: "",
      upload_file_form_visible: false,
      key: ""
    };
  },

  created() {
    this.get_token();
  },

  methods: {
    upload() {
      this.$refs.file_upload.submit();
    },
    load_upload_files_form() {
      this.upload_file_form_visible = !this.upload_file_form_visible;
      this.key += 1
    },
    reload_files_list() {
      this.key += 1;
      this.upload_file_form_visible = !this.upload_file_form_visible;

    },

    get_token() {
      this.token = getToken();
    },
  },
};
</script>

<style scoped></style>
