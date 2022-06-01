<template>
  <div class="app-container">
    <!-- <add-record-form
    :patient_id="patient_id"
    :user_id="user.id"
    :user_name="user.name"><add-record-form>/> -->

    <el-card style="width:50%">
      <el-table :data="records" fit highlight-current-row style="width: 100">
        <el-table-column label="ID" prop="id" sortable align="center">
          <template slot-scope="{ row }">
            <div>
              <span>{{ row.id }}</span>
            </div>
          </template>
        </el-table-column>

        <el-table-column label="Record Body">
          <template slot-scope="{ row }">
            <div v-html="row.record_body">              
            </div>
          </template>
        </el-table-column>

        <el-table-column label="Creation Time">
          <template slot-scope="{row}">
            <div>
              <p>{{ convert_time(row.created_at)}}</p> <p>{{convert_date(row.created_at)}}</p>
            </div>
          </template>
        </el-table-column>

        <el-table-column label="Operations">
          <el-button type="primary">Update</el-button>
          <el-button type="danger" @click ="delete_record(row.id)">Delete</el-button>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getAllRecords } from "@/api/record";
import {deleteRecord} from '@/api/record';

import AddRecordForm from "./components/add-record-form";

export default {
  components: { AddRecordForm },
  data() {
    return {
      user: {},
      patient_id: 1,
      records: {
        id: "",
        first_name: "",
        last_name: "",
      },
      count: "",
    };
  },

  computed: {
    ...mapGetters(["id", "name"]),
  },

  created() {
    this.get_user();
    this.get_records();
  },

  methods: {
    get_user() {
      this.user = {
        name: this.name,
        id: this.id,
      };
    },

    get_records() {
      getAllRecords().then((response) => {
        this.records = response;
        //this.count = Object.keys(this.records).length
      });
    },

    delete_record(id){
      if(confirm("Do you really want to delete this record?")){
        deleteRecord(id).then((response)=>{
          this.get_records()
          this.$notify({
            title:'Notification',
            type:'success',
            message:response
          })
        })
      }
    },

    convert_date(value) {
      var date = new Date(value).toLocaleDateString('en-gb')
      return date
    },

    convert_time(value){
      var time = new Date(value).toLocaleTimeString('en-gb')
      return time
    }

   
  },
};
</script>
