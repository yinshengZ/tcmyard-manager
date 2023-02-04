<template>
    <div>

        <el-card>
            <el-button type="primary" icon="el-icon-folder-add" @click="load_upload_files_form">New</el-button>

            <el-divider></el-divider>


        <file-list></file-list>
    
        <el-dialog
        :visible.sync="upload_file_form_visible">
        <upload-file></upload-file>
        </el-dialog>
    </el-card>
       
        
    </div>
</template>



<script>
import UploadFile from "@/views/patient-files/components/upload-file.vue"
import FileList from "@/views/patient-files/components/files-list.vue"
import {getToken} from "@/utils/auth"
export default{
   props:['patient_id','user_id'],
   components:{
    UploadFile,
    FileList,
   },
    data(){
        return{
            file:[],
            fileList:[],
            token:'',
            description:'',
            upload_file_form_visible:false,
        }
    },

    created(){
        this.get_token()
    },

    methods:{
        upload(){
           this.$refs.file_upload.submit()
        },
        load_upload_files_form(){
            this.upload_file_form_visible = !this.upload_file_form_visible
        },

        get_token(){
            
            this.token = getToken()
            
        }

    }
}

</script>


<style scoped>

</style>