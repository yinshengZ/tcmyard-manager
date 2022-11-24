<template>
    <div>
        <el-card shadow="always">
        <!--<p>{{this.treatment_detail}}</p>-->
        <p v-for ="treatment in this.treatment_detail">
            {{treatment.inventory[0].name}}
            {{treatment.quantity}}
            {{treatment.units}}
        </p>

        <!--TODO: finish up update treatment form-->
        <el-form :model="updated_treatment_detail" label-width="120px">
            <el-form-item
            label="Item">


            </el-form-item>
        </el-form>

        </el-card>
        
    </div>
</template>

<script>
    import {getSingleTreatment} from '@/api/treatment'
    export default{
        props:['treatment_id'],

        data(){
            return{
                id: this.treatment_id,
                treatment_detail:[],
                updated_treatment_detail:[],

            }
        },

        created(){
            this.get_treatment_details()
        },
        methods:{
            get_treatment_details(){
                getSingleTreatment(this.id).then((response)=>{
                    this.treatment_detail = response 
                    console.log('---------start-----')
                    console.log(this.treatment_detail)
                    console.log('---------end------')                   
                })

                
            },

        },
    }
</script>