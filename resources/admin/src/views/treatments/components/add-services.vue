<template>
    <div>
        <el-form v-model="treatment_details" label-width="120px">

            <el-form-item label="Services:  ">

                <el-select v-model="treatment_details.id" placeholder="services...">

                    <el-option v-for="service in services" :key="service.id"
                        :label="service.name + ' ( £' + service.unit_price + ')'" :value="service.id">
                    </el-option>

                </el-select>
            </el-form-item>

            <el-form-item label="Units: ">
                <el-input-number v-model="treatment_details.unit" :min="1" :max="9999999" :step="1" placholder="units">

                </el-input-number>
            </el-form-item>

            <el-form-item label="Quantity">
                <el-input-number v-model="treatment_details.quantity" :min="1" :max="9999999" :step="1"
                    placeholder="quantity"></el-input-number>
            </el-form-item>

            <el-form-item label="Extra Options">
                <el-checkbox v-model="with_finance">With Finance</el-checkbox>
                <el-checkbox v-model="with_date">With Date</el-checkbox>
            </el-form-item>



            <div class="with-finance" v-if="with_finance">
                <el-form-item label="Discount(%): ">
                    <el-input-number v-model="treatment_details.discount" :min="0" :max="100" :precision="2" :step="1"
                        placeholder="discount">

                    </el-input-number>



                </el-form-item>

                <el-form-item label="Price (£)">
                    <el-input-number v-model="final_price" :min="0" :precision="2" :step="1">
                    </el-input-number>

                    <el-button type="primary" @click="calculate_price()">Calculate</el-button>
                </el-form-item>

                <el-form-item label="Payment Type">
                    <el-select v-model="treatment_details.payment_type_id">
                        <el-option v-for="payment_type in payment_types" :key="payment_type.id"
                            :label="uppercaseFirst(payment_type.payment_type)" :value="payment_type.id">

                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="Description">
                    <el-input v-model="treatment_details.description">

                    </el-input>
                </el-form-item>
            </div>

            <div class="with-date" v-if="with_date">
                <el-form-item label="Date">
                    <el-date-picker v-model="date" type="date" placeholder="pick a date..."
                        :picker-options="date_picker_options" value-format="yyyy-MM-dd">

                    </el-date-picker>
                </el-form-item>

            </div>


            <el-form-item>
                <el-button @click="add_service()">Submit</el-button>
            </el-form-item>

        </el-form>


    </div>
</template>

<script>
import { get_services } from '@/api/inventory'
import { addServices } from '@/api/treatment'
import { getPaymentMethods } from '@/api/finance'
import { uppercaseFirst } from '@/filters'

export default {
    props: ['patient_id', 'user_id'],
    data() {
        return {
            date_picker_options: {
                disabledDate(time) {
                    return time.getTime() > Date.now();
                }
            },
            treatment_details: {
                id: '',
                unit: 0,
                quantity: 0,
                discount: 0,
                final_price: 0,
                payment_type_id: '',
                patient_id: '',
                user_id: '',
                original_price: '',
                description: "",
            },
            services: [],
            payment_types: [],
            p_id: this.patient_id,
            u_id: this.user_id,
            final_price: 0,
            original_price: 0,
            service_id: 0,
            with_date: false,
            with_finance: false,
            date: ''


        }
    },

    created() {
        this.get_service_details()
        this.get_all_payment_methods()

    },
    methods: {
        uppercaseFirst,
        calculate_price() {

            if (this.treatment_details.id > 0) {
                let service_id = this.treatment_details.id
                let service = this.services.find(x => x.id === service_id)

                this.original_price = service.unit_price * this.treatment_details.unit * this.treatment_details.quantity

                this.final_price = service.unit_price * this.treatment_details.unit * this.treatment_details.quantity * (1 - this.treatment_details.discount / 100)
                this.service_id = service.categories_id


            } else {
                this.$message({
                    message: 'Please Select A Service First!',
                    type: 'error'
                })
            }



        },

        get_all_payment_methods() {
            getPaymentMethods().then((response) => {
                this.payment_types = response
            })
        },

        get_service_details() {
            get_services().then((response) => {
                this.services = response
            })
        },
        add_service() {
            this.treatment_details['patient_id'] = this.p_id
            this.treatment_details['user_id'] = this.u_id
            this.treatment_details['final_price'] = this.final_price
            this.treatment_details['original_price'] = this.original_price
            this.treatment_details['service_id'] = this.service_id
            this.treatment_details['with_finance'] = this.with_finance
            this.treatment_details['with_date'] = this.with_date
            this.treatment_details['date'] = this.date

            addServices(this.treatment_details).then((response) => {
                this.$notify({
                    title: 'Notification',
                    message: response.message,
                    type: 'success'
                })
            }).catch(error => {
                this.$notify.error({
                    title: 'Error',
                    message: error.response.data.message,
                })
            })

        }
    }
}
</script>

<style scoped></style>