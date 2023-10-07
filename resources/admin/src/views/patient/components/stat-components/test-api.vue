<template>
    <div>
        <el-card>
            <p>Average Spending: </p>
            {{ average_spending }}
        </el-card>

    </div>
</template>


<script>
import { getPatientAverageSpending } from '@/api/patient';
export default {

    data() {
        return {
            average_spending: 0,
        }
    },

    mounted() {
        this.get_average_spendings()
    },

    methods: {
        get_average_spendings() {
            getPatientAverageSpending().then((response) => {
                this.average_spending = response
                console.log(this.average_spending)
            })
        }
    }

}

</script>


<style scoped></style>