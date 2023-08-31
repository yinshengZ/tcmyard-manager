<template>
    <div>
        <el-table :data="incomes" style="width:100%" height="600">

            <el-table-column type="expand">
                <template slot-scope="income">
                    <p>Description: {{ income.row.description }}</p>
                </template>
            </el-table-column>

            <el-table-column label="Final Amount (£)">
                <template slot-scope="income">
                    <div>
                        <span>£ {{ income.row.amount / 100 }}</span>
                    </div>
                </template>

            </el-table-column>


            <el-table-column label="Original Amount (£)">
                <template slot-scope="income">
                    <div>
                        <span>£ {{ income.row.original_amount / 100 }}</span>
                    </div>
                </template>

            </el-table-column>

            <el-table-column label="Discount (%)">
                <template slot-scope="income">
                    <div>
                        <span>{{ income.row.discount }} %</span>
                    </div>
                </template>
            </el-table-column>

            <el-table-column label="Payment Type">
                <template slot-scope="income">
                    <div>
                        <span class="capitalize">{{ income.row.payment_method.payment_type }}</span>
                    </div>
                </template>

            </el-table-column>

            <el-table-column label="Treatment ID" prop="treatment_id">

            </el-table-column>


            <!--               
         I have no idea why the categories is undefined while 
         the full object do show the value inside
    -->

            <el-table-column label="Treatment Type">
                <template slot-scope="income">
                    <div>
                        <span class="capitalize">{{ income.row.service.categories }}</span>
                    </div>
                </template>
            </el-table-column>



            <el-table-column label="Date">
                <template slot-scope="income">
                    <div>
                        {{ date_converter(income.row.created_at) }}
                    </div>
                </template>
            </el-table-column>




        </el-table>

    </div>
</template>

<script>

import { getPatientIncome } from "@/api/finance"
import { date_converter } from "@/utils/converters"
import { uppercaseFirst } from "@/filters"

export default {
    props: ['patient_id', 'user_id'],
    data() {
        return {
            incomes: [],

        }
    },
    created() {
        this.get_patient_incomes()
    },

    methods: {

        get_patient_incomes() {
            getPatientIncome(this.patient_id).then((response) => {
                this.incomes = response
                console.log(this.incomes)
            })
        },
        date_converter,
        uppercaseFirst,

    }
}

</script>

<style scoped>
.capitalize {
    text-transform: capitalize;
}
</style>