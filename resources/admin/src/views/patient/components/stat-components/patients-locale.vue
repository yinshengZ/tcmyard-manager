<template>
    <div>
        <el-card class="card-outer">
            <div class="card">
                <div class="card-box">

                    <div class="card-icon" v-on:click="load_detailed_table">
                        <svg-icon icon-class="locale" class="card-panel-icon" />

                    </div>

                    <div class="card-content">
                        <div class="content-title">
                            <h4>Most Patients From: </h4>
                            <span class="most-locale">{{ most_locale }}: {{ most_locale_total }}
                                Patients</span>
                        </div>

                    </div>

                </div>
            </div>
        </el-card>
        <el-dialog :visible.sync="locale_dialog_loaded">
            <el-table :data="patients_locale" border>
                <el-table-column prop="locale" label="Locale" width="400"></el-table-column>
                <el-table-column prop="total" label="Patients" width="400"></el-table-column>
            </el-table>
        </el-dialog>
    </div>
</template>

<script>
import { getMostPatientsLocale } from "@/api/patient"

export default {
    data() {
        return {
            patients_locale: '',
            locale_dialog_loaded: false,
            most_locale: '',
            most_locale_total: '',
        }
    },
    mounted() {
        this.get_most_patients_locale()
    },
    methods: {
        get_most_patients_locale() {
            getMostPatientsLocale().then((response) => {
                this.patients_locale = response
                this.most_locale = response[0].locale
                this.most_locale_total = response[0].total
            })
        },

        load_detailed_table() {
            this.locale_dialog_loaded = true
        }


    }
}

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

    height: 100px;
    border-radius: 5px;
    display: grid;
    grid-template-columns: 0.5fr 1fr;
}

.card-box:hover {

    cursor: pointer;

    .card-icon {
        background-color: #C63D2F;
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

    color: #C63D2F;
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

.content-title .most-locale {
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
