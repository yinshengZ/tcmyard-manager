<template>
    <div>
        <el-card class="card-outer">
            <div class="card">
                <div class="card-box">

                    <div class="card-icon" v-on:click="load_detailed_table">
                        <svg-icon icon-class="gender" class="card-panel-icon" />

                    </div>

                    <div class="card-content">
                        <div class="content-title">
                            <h4>Most Patients Are: </h4>
                            <span class="most-gender">{{ most_genders.gender }}</span>
                        </div>

                    </div>

                </div>
            </div>
        </el-card>

        <el-dialog :visible.sync="gender_dialog_loaded">
            <el-table :data="genders" border>
                <el-table-column prop="gender.gender" label="Gender">

                </el-table-column>

                <el-table-column prop="total" label="Patients">

                </el-table-column>
            </el-table>
        </el-dialog>

    </div>
</template>

<script>

import { getMostPatientsGender } from '@/api/patient'

export default {

    data() {
        return {
            most_genders: [],
            genders: [],
            gender_dialog_loaded: false
        }
    },
    mounted() {
        this.get_most_patients_gender()
    },
    methods: {
        get_most_patients_gender() {
            getMostPatientsGender().then((response) => {
                this.genders = response
                this.most_genders = response[0].gender
            })

        },
        load_detailed_table() {
            this.gender_dialog_loaded = true
        }
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
    width: 350px;
    /*     border-top: 3px solid hsl(0, 78%, 62%);
 */
    /*     background-color: var(--veryLightGray);
 */
    height: 100px;
    border-radius: 5px;
    display: grid;
    grid-template-columns: 0.5fr 1fr;
}

.card-box:hover {

    cursor: pointer;

    .card-icon {
        background-color: #7C81AD;
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

    color: #7C81AD;
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

.content-title .most-gender {
    text-transform: capitalize;
    font-weight: bold;
    color: #4a6e669a
}

.content-stat {
    text-align: center;
}

.count-text {
    font-size: 20px;
}
</style>
