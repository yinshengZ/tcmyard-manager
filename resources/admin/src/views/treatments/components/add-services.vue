<template>
    <div>
        <!-- <el-card>
            <div class="add_service_form">
                <el-form v-model="service_details">
                    <el-form-item>
                        <el-select
                        v-model="service_details.id"
                        filterable
                        placeholder="select..."
                        >
                        <el-option
                        v-for="service in service_rtv"
                        :key="service.id"
                        >

                        </el-option>
                            
                        </el-select>
                    </el-form-item>
                </el-form>
            </div>
        </el-card> -->

        <p>Services form!</p>
    </div>
</template>

<script>
import {get_services} from '@/api/inventory'

export default{
    data(){
        return{
            service:[],
        }
    }
}
</script>

<style scoped>

</style>