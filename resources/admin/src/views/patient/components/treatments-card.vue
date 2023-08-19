<template>
    <div>
        <treatments :patient_id="patient_id" :user_id="user_id"></treatments>
    </div>
</template>

<script>
import Treatments from "@/views/treatments/index.vue"


export default {
    props: ['patient_id', 'user_id', 'user_name'],
    components: { Treatments },
    data() {
        return {

        }
    },


}
</script>

<style scoped></style>