<template>
    <div>
        <el-card shadow="always">
            <div slot="header">
                <span>Update Treatment</span>
            </div>

            <!--TODO: create update form here-->
              
            <el-form :model="updated_treatment_detail">
               
                
            </el-form>

        </el-card>
        
    </div>
</template>

<script>
//TODO: need to add index to this component so it reloads after each loading
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
                })

                
            },

        },
    }
</script>