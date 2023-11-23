<template>
    <div>
        <el-card class="card-outer">
            <div class="card">
                <div class="card-box">

                    <div class="card-icon" v-on:click="load_new_patients_dialog">
                        <svg-icon icon-class="peoples" class="card-panel-icon" />

                    </div>

                    <div class="card-content">
                        <div class="content-title">
                            <h4>New Patients</h4>
                        </div>

                        <div class="content-stat">

                            <span>This Month: {{ new_patients_count }}</span>

                        </div>
                    </div>

                </div>
            </div>
        </el-card>

        <el-dialog :visible.sync="new_patients_dialog_loaded">
            <!-- <el-table :data="new_patients">
                <el-table-column prop="first_name" label="First Name"></el-table-column>

                <el-table-column prop="last_name" label="Last Name">

                </el-table-column>

                <el-table-column prop="gender.gender" label="Gender"></el-table-column>

                <el-table-column prop="email" label="Email">

                </el-table-column>

                <el-table-column prop="postcode" label="Postcode"></el-table-column>
                <el-table-column label="Date Joined">
                    <template slot-scope="{row}">
                        <div>
                            <span>{{ date_converter(row.created_at) }}</span>
                        </div>
                    </template>
                </el-table-column>
            </el-table> -->
            <div class="new-patients-table">
                <new-patients-table></new-patients-table>
            </div>

        </el-dialog>
    </div>
</template>

<script>

import NewPatientsTable from "@/views/patient/components/data-tables/new-patients.vue"

import { getCurrentMonthNewPatients } from '@/api/patient'

import { date_converter } from "@/utils/converters"


export default {

    components: {
        NewPatientsTable,
    },

    data() {
        return {
            new_patients_dialog_loaded: false,
            new_patients: [],
            new_patients_count: 0,
        }
    },
    mounted() {
        this.current_month_new_patients();
    },
    methods: {
        current_month_new_patients() {
            getCurrentMonthNewPatients().then((response) => {
                this.new_patients = response
                this.new_patients_count = response.length
            })
        },
        load_new_patients_dialog() {
            this.new_patients_dialog_loaded = true
        },
        date_converter,
    }
};
</script>

<style lang="scss" scoped>
.card-outer {
    height: 140px;
    border-radius: 5px;
}

.card {
    --red: hsl(0, 78%, 62%);
    --cyan: hsl(180, 62%, 55%);
    --orange: hsl(34, 97%, 64%);
    --blue: hsl(212, 86%, 64%);
    --varyDarkBlue: hsl(234, 12%, 34%);
    --grayishBlue: hsl(229, 6%, 66%);
    --veryLightGray: hsl(0, 0%, 98%);
    --weight1: 200;
    --weight2: 400;
    --weight3: 600;

}

.card-box {

    /*     border-top: 3px solid hsl(0, 78%, 62%);
 */
    /*     background-color: var(--veryLightGray);
 */
    width: 350px;

    height: 100px;
    border-radius: 5px;
    display: grid;
    grid-template-columns: 0.5fr 1fr;
}

.card-box:hover {

    cursor: pointer;

    .card-icon {
        background-color: var(--cyan);
        border-radius: 5px;

    }

    .card-panel-icon {
        color: var(--veryLightGray);

    }
}

.card-icon {
    cursor: pointer;
    margin: auto auto;
    width: 90%;


}

.card-panel-icon {
    height: 100px;
    width: 100px;

    color: var(--cyan);
    padding: 20px;
}



.card-content {

    display: grid;
    grid-template-columns: 1fr;
}

.content-title {
    text-align: center;
}

.content-title h4 {
    text-transform: uppercase;
    color: #9fbfa0cc;
}

.content-stat {
    text-align: center;
}

.count-text {
    font-size: 20px;
}

.new-patients-table {
    padding: 10px;
    height: 60vh;
    width: 100%;

    overflow: auto;
}
</style>
