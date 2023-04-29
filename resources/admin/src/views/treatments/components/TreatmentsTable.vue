<template>
  <div>
    <el-card shadow="hover">
      <div class="button-group">
        <el-button-group>
          <el-button
            type="success"
            icon="el-icon-plus"
            @click="load_add_herbs_form"
            >Herbs</el-button
          >
          <el-button
            type="primary"
            icon="el-icon-plus"
            @click="load_add_services_form"
            >Services</el-button
          >
          <el-button
            type="warning"
            icon="el-icon-plus"
            @click="load_add_retails_form"
            >Retails</el-button
          >
          <el-button
            type="info"
            icon="el-icon-plus"
            @click="load_add_others_form"
            >Others</el-button
          >
        </el-button-group>
      </div>
    </el-card>

    <el-card shadow="hover">
      <el-table :data="treatments" border style="width: 100%" fit>
        <el-table-column
          prop="id"
          label="ID"
          :min-width="30"
          align="center"
          fit
        >
          <template slot-scope="{ row }">
            {{ row[0].treatment_id }}
          </template>
        </el-table-column>

        <el-table-column prop="details" label="Details" align="center">
          <template slot-scope="{ row }">
            <span v-for="(detail, index) in row">
              {{ detail.name }}{{ "(" + detail.units + ")" }}{{ ", " }}
            </span>
          </template>
        </el-table-column>

        <el-table-column
          prop="amount"
          label="Quantity"
          :min-width="25"
          align="center"
        >
          <template slot-scope="{ row }">
            <div>
              <span>
                {{ row[0].quantity }}
              </span>
            </div>
          </template>
        </el-table-column>

        <el-table-column
          prop="category"
          label="Category"
          align="center"
          :min-width="28"
          
        >
          <template slot-scope="{ row }">

            <span class="capitalized_texts">{{ row[0].service_title }}</span>
          </template>
        </el-table-column>

        <el-table-column
        prop="date"
        label="Date"
        align="center"
        :min-width="30">

        <template slot-scope="{row}">
          <div>
            <span>
              {{ date_converter(row[0].treatment_created_at) }}
            </span>
          </div>
        </template>

        </el-table-column>


        <el-table-column prop="operations" label="Operations">
          <template slot-scope="{ row }">
            <el-button
              type="primary"
              @click="edit_treatment(row[0].treatment_id, row[0].categories_id)"
              >Edit
              </el-button>

            <el-popconfirm
            title="Are you sure to delete this treatment?"
            @onConfirm="delete_treatment(row[0].treatment_id)"
            @onCancel="get_patient_treatments()"
           >
              <el-button  slot="reference" type="danger" >Delete</el-button>
            </el-popconfirm>

          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <el-dialog
      title="Update Herbs"
      :visible.sync="update_herbs_table_visible"
      :before-close="get_patient_treatments"
    >
      <edit-herbs-table
        :treatment_id="this.treatment_id"
        :key="key"
        :patient_id = "this.patient_id"
        :user_id = "this.user_id"
        :treatment_category="this.treatment_category"
      ></edit-herbs-table>
    </el-dialog>

    <el-dialog
    title="Update Service"
      :visible.sync="update_service_table_visible"
      :before-close="get_patient_treatments"
    >
      <edit-service-table
      
        :treatment_id="this.treatment_id"
        :patient_id="this.patient_id"
        :user_id="this.user_id"
        :key="key"
      ></edit-service-table>
    </el-dialog>

    <el-dialog
      title="Update Retail"
      :visible.sync="update_retail_table_visible"
      :before-close="get_patient_treatments"
    >
      <edit-retail-table
        :treatment_id="this.treatment_id"
        :patient_id="this.patient_id"
        :user_id="this.user_id"
        :treatment_category = "this.treatment_category"
        :key="key"
        
      ></edit-retail-table>
    </el-dialog>

    <el-dialog
    title="Update Other"
      :visible.sync="update_other_table_visible"
      :before-close="get_patient_treatments"
    >
      <edit-other-table
        :treatment_id="this.treatment_id"
        :patient_id="this.patient_id"
        :user_id ="this.user_id"
        :treatment_category="this.treatment_category"
        :key="key"
      ></edit-other-table>
    </el-dialog>

    <el-dialog
      title="Add Herbs"
      :visible.sync="add_herbs_visible"
      :before-close="get_patient_treatments"
    >
      <add-herbs
        :patient_id="patient_id"
        :user_id="user_id"
        :key="key"
      ></add-herbs>
    </el-dialog>

    <el-dialog
      title="Add Services"
      :visible.sync="add_services_visible"
      :before-close="get_patient_treatments"
    >
      <add-services
        :patient_id="patient_id"
        :user_id="user_id"
        :key="key"
      ></add-services>
    </el-dialog>

    <el-dialog
      title="Add Retail"
      :visible.sync="add_retails_visible"
      :before-close="get_patient_treatments"
    >
      <add-retail :patient_id="patient_id" :user_id="user_id" :key="key">
      </add-retail>
    </el-dialog>

    <el-dialog
      title="Add Other"
      :visible.sync="add_others_visible"
      :before-close="get_patient_treatments"
    >
      <add-other
        :patient_id="patient_id"
        :user_id="user_id"
        :key="key"
      ></add-other>
    </el-dialog>
  </div>
</template>

<script>
import AddHerbs from "@/views/treatments/components/add-herbs.vue";
import AddServices from "@/views/treatments/components/add-services.vue";
import AddRetail from "@/views/treatments/components/add-retail.vue";
import AddOther from "@/views/treatments/components/add-other.vue";

import EditHerbsTable from "@/views/treatments/components/edit-herbs-table.vue";
import EditServiceTable from "@/views/treatments/components/edit-service-table.vue";
import EditRetailTable from "@/views/treatments/components/edit-retail-table.vue";
import EditOtherTable from "@/views/treatments/components/edit-other-table.vue";

import { getPatientTreatments, deleteTreatment } from "@/api/treatment";
import { date_converter } from "@/utils/converters";



export default {
  props: ["patient_id", "user_id"],
  components: {
    AddHerbs,
    AddServices,
    AddRetail,
    AddOther,
    EditHerbsTable,
    EditOtherTable,
    EditRetailTable,
    EditServiceTable,
  },
  data() {
    return {
      treatments: [],
      update_herbs_table_visible: false,
      update_service_table_visible: false,
      update_retail_table_visible: false,
      update_other_table_visible: false,

      add_herbs_visible: false,
      add_services_visible: false,
      add_retails_visible: false,
      add_others_visible: false,

      treatment_id: 0,
      treatment_category: 0,
      key: 0,
    };
  },

  created() {
    this.get_patient_treatments();
  },

  methods: {
    load_add_herbs_form() {
      (this.add_herbs_visible = true), (this.key += 1);
    },

    load_add_services_form() {
      (this.add_services_visible = true), (this.key += 1);
    },

    load_add_retails_form() {
      (this.add_retails_visible = true), (this.key += 1);
    },

    load_add_others_form() {
      (this.add_others_visible = true), this.key += 1;
    },

    get_patient_treatments() {
      getPatientTreatments(this.patient_id).then((response) => {
        this.treatments = response;
      });

      this.update_herbs_table_visible = false;
      this.update_service_table_visible = false;
      this.update_retail_table_visible = false;
      this.update_other_table_visible = false;

      this.add_herbs_visible = false;
      this.add_services_visible = false;
      this.add_retails_visible = false;
      this.add_others_visible = false;
    },

    edit_treatment(id, categories_id) {
      switch (categories_id) {
        case 1:
          this.update_herbs_table_visible = true;
          this.key += 1;

          break;

        case 2:
          this.update_service_table_visible = true;
          this.key += 1;
          break;

        case 3:
          this.update_retail_table_visible = true;
          this.key += 1;

          break;

        case 4:
          this.update_other_table_visible = true;
          this.key += 1;
      }

      this.treatment_id = id;
      this.treatment_category = categories_id;
    },

    delete_treatment(treatment_id){
        deleteTreatment(treatment_id).then((response)=>{
            this.$notify({
              title:'Notification',
              message:response.message,
              type:'success'
            })
            this.get_patient_treatments()
        }).catch(error=>{
          this.$notify.error({
            title:'Error',
            message:error.response.data.message,
          })
        })

       
    },

    date_converter,


  },
};
</script>

<style scoped>
.button-group {
  width: fit-content;
  margin: auto auto;
}

.capitalized_texts{
  text-transform:capitalize ;
}
</style>
