<template>
    <div>
        <span>Display: </span>
        <el-button-group>
            <el-button mini type="primary" @click="number_of_patients(5)">5</el-button>
            <el-button mini type="primary" @click="number_of_patients(10)">10</el-button>
            <el-button mini type="primary" @click="number_of_patients(20)">20</el-button>
        </el-button-group>


        <el-table :data="patient_data" border stripe>
            <el-table-column label="Name" width="180px">
                <template slot-scope="{row}">
                    <div>
                        <span class="capitalize">{{ row.first_name }} </span>
                        <span class="capitalize">{{ row.last_name }}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="Gender" width="80px">
                <template slot-scope="{row}">
                    <div>
                        <span class="capitalize">{{ row.gender.gender }}</span>
                    </div>
                </template>
            </el-table-column>

            <el-table-column label="Phone" width="140px">
                <template slot-scope="{row}">
                    <div>
                        <span class="capitalize">{{ row.telephone }}</span>
                    </div>
                </template>
            </el-table-column>

            <el-table-column label="Date Joined" width="130px">
                <template slot-scope="{row}">
                    <div>
                        <span>{{ date_converter(row.date_joined) }}</span>
                    </div>
                </template>
            </el-table-column>

            <el-table-column label="">
                <template slot-scope="{row}">
                    <div>
                        <el-button-group>
                            <el-tooltip effect="dark" placement="top" content="Patient's Profile">
                                <el-button icon="el-icon-search" type="primary"
                                    @click="patient_details(row.id)"></el-button>
                            </el-tooltip>
                            <el-tooltip effect="dark" placement="top" content="Quick Update">
                                <el-button icon="el-icon-edit" type="success"
                                    @click="load_update_patient_form(row.id)"></el-button>
                            </el-tooltip>
                            <el-tooltip effect="dark" placement="top" content="Delete Patient">
                                <el-popconfirm confirmationButtonText="Yes" cancelButtonText="Cancel" icon="el-icon-info"
                                    iconColor="red" title="Are you sure to delete this patient?">
                                    <el-button slot="reference" icon="el-icon-delete" type="danger"
                                        @click="delete_patient(row.id)"></el-button>
                                </el-popconfirm>

                            </el-tooltip>
                        </el-button-group>





                    </div>
                </template>
            </el-table-column>

        </el-table>

        <el-dialog :visible.sync="update_patient_form_loaded" append-to-body>
            <update-patient :patient_id=patient_id></update-patient>
        </el-dialog>

    </div>
</template>


<script>
import { getNewestPatients, deletePatient } from '@/api/patient';
import { date_converter } from '@/utils/converters';
import UpdatePatient from '../update-patient.vue';

export default {
    components: {
        UpdatePatient
    },
    data() {
        return {

            patient_data: [],
            number: 5,
            update_patient_form_loaded: false,
            patient_id: 0,



        }
    },

    mounted() {
        this.get_newest_patients(this.number)
    },
    watch: {
        number(newNumber) {
            this.get_newest_patients(newNumber)
        }
    },


    methods: {
        number_of_patients(number) {
            this.number = number
        },
        get_newest_patients(number) {
            getNewestPatients(number).then((response) => {
                this.patient_data = response.data
            })
        },
        date_converter,
        patient_details(id) {

            this.$router.push({ path: '/patient/details/' + id })
        },
        load_update_patient_form(id) {
            this.patient_id = id
            this.update_patient_form_loaded = true

        },
        delete_patient(id) {
            deletePatient(id).then((response) => {
                console.log(response)
            })
        }
    }


}

</script>


<style scoped>
.capitalize {
    text-transform: capitalize;
}
</style>