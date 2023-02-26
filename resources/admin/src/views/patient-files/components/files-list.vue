<template>
  <div>
    <div v-if="file_info.length <= 0">
      <p>There are no uploaded files for this patient yet!</p>
    </div>

    <div v-else>

        <div v-for="file in file_info" :key="file.id">
         <el-card
         shadow="hover">
            <el-row>
            <p>Description: {{ file.description }}</p>
         </el-row>
         <el-divider></el-divider>
         <el-row
          >
            <div class="files-box">
         
            <div class="file-list">
              <ul>
                <li>
                  <span
                    >
                    <i class="el-icon-paperclip"></i
                  >
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
                @click="updatePatientFile(file.id)"></el-button>
                <el-button
                     class="delete-button"
                      type="danger"
                      icon="el-icon-delete"
                      circle
                      @click="deletePatientFile(file.id)"
                    ></el-button>
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

    </div>
  </div>
</template>

<script>
import { getPatientFiles, deletePatientFile, updatePatientFile } from "@/api/file";
import { date_converter } from "@/utils/converters";

export default {
  props: ["patient_id", "user_id", "user_name"],

  data() {
    return {
      file_info: [],
    };
  },
  mounted() {
    this.get_patient_files();
  },

  methods: {
    get_patient_files() {
      getPatientFiles(this.patient_id).then((response) => {
        this.file_info = response;
        console.log(response);
      });
    },
    date_converter,
    deletePatientFile,
    updatePatientFile,
  },
};
</script>

<style scoped>
.files-box{
    display:grid;
    grid-template-columns: 1fr 1fr;
    width:100%;
    height:60px;
    padding: 10px;
 /*    border:solid rgba(14, 14, 14, 0.3);
    border-radius: 3px; */
    
}
.operation-buttons{
    margin: auto auto;
}

.file-name:hover{
    text-decoration: underline;
}
.file-list > ul > li {
  list-style-type: none;
}





.file-list > ul > li > span > a :hover {
  text-decoration: underline;
}
</style>
