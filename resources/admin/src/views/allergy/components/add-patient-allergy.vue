<template>
    <div>
        <el-form>
            <el-form-item label="Patient ID:">
                <el-input disabled v-model="id"></el-input>
            </el-form-item>
            <el-form-item label="Allergy">
                <el-select v-model="allergy">
                    <el-option v-for="allergy in all_allergies" :key="allergy.id" :label="allergy.allergies"
                        :value="allergy.id"></el-option>
                </el-select>

                <el-button @click="load_add_allergy_form"><svg-icon icon-class="add"></svg-icon></el-button>
            </el-form-item>

            <el-form-item>
                <el-button type="success" @click="add_patient_allergy">Submit</el-button>
            </el-form-item>
        </el-form>

        <el-dialog :visible.sync="add_allergy_form_loaded" :beforeClose="get_all_allergies" width="30%" append-to-body>
            <add-allergy></add-allergy>
        </el-dialog>
    </div>
</template>


<script>

import AddAllergy from '@/views/patient/add-allergy.vue';

import { getAllergies } from '@/api/allergy';

import { addPatientAllergy } from '@/api/patient';

export default {

    props: ['patient_id'],
    components: {
        AddAllergy,
    },

    data() {
        return {
            id: '',
            all_allergies: [],
            allergy: [],
            add_allergy_form_loaded: false,

        }
    },

    mounted() {
        this.id = this.patient_id
        this.get_all_allergies()

    },

    methods: {
        get_all_allergies() {
            getAllergies().then((response) => {
                this.all_allergies = response
                this.add_allergy_form_loaded = false
            })
        },

        load_add_allergy_form() {
            this.add_allergy_form_loaded = true
        },

        add_patient_allergy() {
            let patient_allergy = {
                patient_id: this.id,
                allergy_id: this.allergy
            }

            addPatientAllergy(patient_allergy).then((response) => {
                this.$notify({
                    title: 'Notification',
                    type: 'success',
                    message: response.data
                })
            })
        }
    }
}

</script>