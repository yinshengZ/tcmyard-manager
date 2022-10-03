<template>
  <div class="patient-record">
    <el-row :span="24">
      <div class="new-record-button">
        <el-button
          type="primary"
          icon="el-icon-document-add"
          @click="load_add_record_form"
          >New</el-button
        >
        
      </div>
    </el-row>

    <el-row>
      <div v-for="record_detail in record_details" :key="record_detail.id">
        <div class="post">
          <div class="patient-block">
            <div class="user-block">
              <span>
                <span class="description"
                  >Last updated:
                  {{ convert_date(record_detail.updated_at) }}</span
                >
                <span class="username text-muted">
                  By: {{ record_detail.user.nickname }}
                </span>
              </span>
            </div>

            <span v-html="record_detail.record_body"> </span>

            <el-button type="warning" icon="el-icon-edit" circle @click="load_update_record_form(record_detail.id)"></el-button>
          

              <el-button type="danger" icon="el-icon-delete" circle @click="delete_record(record_detail.id)"></el-button>
            
            
          </div>
        </div>
      </div>
    </el-row>

    <el-dialog
      title="Add Record: "
      :visible.sync="add_record_form_loaded"
      :before-close="handleClose"
    >
      <add-record-form
        :patient_id="patient_id"
        :user_id="user_id"
        :user_name="user_name"
      ></add-record-form>
    </el-dialog>

    <el-dialog
    title="Update Record: "
    :visible.sync="update_record_form_loaded"
    :before-close="handleClose">
        <update-record-form
        :record_id="record_id"
        :user_id="user_id"
        :patient_id="patient_id"
        :key = "key"></update-record-form>
    </el-dialog>
  </div>
</template>

<script>
import { getPatientRecords } from "@/api/record";
import {deleteRecord} from '@/api/record';

import AddRecordForm from "@/views/records/components/add-record-form.vue";
import UpdateRecordForm from "@/views/records/components/update-record-form.vue"


export default {
  props: ["patient_id", "user_id", "user_name"],
  components: { AddRecordForm, UpdateRecordForm },
  data() {
    return {
      record_details: "",
      record_id:'',
      key:0,
      add_record_form_loaded: false,
      update_record_form_loaded:false
    };
  },

  created() {
    this.get_patient_records();
  },

  mounted() {

  },

  methods: {
    load_add_record_form() {
      this.add_record_form_loaded = true;
    },

    load_update_record_form(id){
        this.record_id = id
        this.key+=1
        this.update_record_form_loaded = true;
    },

    handleClose() {
       this.get_patient_records();
      this.add_record_form_loaded = false;
      this.update_record_form_loaded = false;

    },

    get_patient_records() {
      getPatientRecords(this.patient_id).then((response) => {
        this.record_details = response;
        this.user_info = response[0].user;
       
      });
    },

    delete_record(id){
      if(confirm("Do you really want to delete this record?")){
        deleteRecord(id).then((response)=>{
        this.get_patient_records()
        this.$notify({
          title:'Notification',
          type: 'success',
          message:response
        })
      })
      }
      
    },
    convert_date(value) {
      var date = new Date(value).toLocaleDateString("en-gb");
      return date;
    },
  },
};
</script>

<style lang="scss" scoped>
.new-record-button {
  margin:auto;
  margin-bottom:20px;
}
.patient-record {
  .patient-block {
    .username,
    .description {
      //display: block;
      //margin-left: 50px;
      padding: 2px 0;
    }

    .username {
      font-size: 12px;
      color: #000;
      margin-left: 10px;
    }

    :after {
      clear: both;
    }

    .img-circle {
      border-radius: 50%;
      width: 40px;
      height: 40px;
      float: left;
    }

    .record-buttons {
      float: right;
    }

    span {
      font-weight: 500;
      font-size: 12px;
    }
   
  }

  .post {
    font-size: 14px;
    border-bottom: 1px solid #d2d6de;
    margin-bottom: 15px;
    padding-bottom: 15px;
    color: #666;

    .image {
      width: 100%;
      height: 100%;
    }

    .user-images {
      padding-top: 20px;
    }
  }

  .list-inline {
    padding-left: 0;
    margin-left: -5px;
    list-style: none;

    li {
      display: inline-block;
      padding-right: 5px;
      padding-left: 5px;
      font-size: 13px;
    }

    .link-black {
      &:hover,
      &:focus {
        color: #999;
      }
    }
  }
}

.box-center {
  margin: 0 auto;
  display: table;
}

.text-muted {
  color: #777;
}
</style>