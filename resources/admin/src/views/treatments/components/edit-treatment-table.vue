<template>
    <div>
        <p>update treatment table here(under construction)</p>
        <p>{{treatment_id}}</p>
    </div>
</template>

<script>
    import {getSingleTreatment} from '@/api/treatment'
    export default{
        props:['treatment_id'],

        data(){
            return{
                treatment_id: treatment_id
            }
        },

        created(){
            this.get_treatment_details()
        },
        methods:{
            get_treatment_details(){
                getSingleTreatment(this.treatment_id).then((response)=>{
                    console.log(response)
                    
                })

                
            },

        },
    }
</script>