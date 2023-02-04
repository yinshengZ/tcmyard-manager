<template>
  <div class="upload_form">

    <el-form 
    >
      <el-form-item
        label="Description: "
        label-width="120px"        
      >
        <el-input
        type="textarea"
        class="description_box"
          v-model="description"
          size="medium"
          :rows="10"
          autosize          
          placeholder="description for this upload...."
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-upload
        class="uploader"
          drag
          ref="file_upload"
          action="api/file"
          :headers="{ 'XSRF-TOKEN': this.token, 'X-XSRF-TOKEN': this.token }"
          :auto-upload="false"
          :data="{
            patient_id: this.patient_id,
            user_id: this.user_id,
            description: description,
          }"
          multiple
          :file-list="fileList"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">
            Drop file here or <em>click to upload</em>
          </div>
        </el-upload>
      </el-form-item>     

      <el-form-item>
        <el-button type="primary" @click="upload">Upload</el-button>
      </el-form-item>
    </el-form>
  </div>
</template> 

<script>

import { getToken } from "@/utils/auth";
export default {
  props: ["patient_id", "user_id"],
  data() {
    return {
      file: [],
      fileList: [],
      token: "",
      description: "",
    };
  },

  created() {
    this.get_token();
  },

  methods: {
    upload() {
      this.$refs.file_upload.submit();
    },

    get_token() {
      
      this.token = getToken();
    },
  },
};
</script>

<style scoped>
.uploader{
    margin-left:20%;
}


.upload_form{
    width:50%;
    margin:auto;
}

</style>
