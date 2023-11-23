<template>
    <div>
        <el-card class="card-outer">
            <div class="card">
                <div class="card-box">

                    <div class="card-icon">
                        <svg-icon icon-class="gbp" class="card-panel-icon" />

                    </div>

                    <div class="card-content">
                        <div class="content-title">
                            <h4>Average Spending: </h4>
                            <span class="count-stat">£ {{ average_spending }}</span>
                        </div>

                    </div>

                </div>
            </div>
        </el-card>

        <el-dialog :visible.sync="patient_spendings_dialog_loaded">
            <el-table :data="spendings">
                <el-table-column label="Patient Name">
                    <template slot-scope="{row}">
                        <div>
                            <!-- TODO: Add top spending, least spending and such-->
                        </div>
                    </template>
                </el-table-column>
            </el-table>

        </el-dialog>
    </div>
</template>

<script>
import { getPatientAverageSpending } from '@/api/patient';
export default {

    data() {
        return {
            average_spending: 0,
            spendings: [],
            patient_spendings_dialog_loaded: false,
        }
    },

    mounted() {
        this.get_average_spendings()
    },

    methods: {
        get_average_spendings() {
            getPatientAverageSpending().then((response) => {
                this.average_spending = (response / 100).toFixed(2)
            })
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
        background-color: #618264;
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

    color: #618264;
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
    color: #19739ddc;
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
