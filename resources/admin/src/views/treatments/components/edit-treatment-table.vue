<template>
    <div>
        <p>update treatment table here(under construction)</p>
        
    </div>
</template>

<script>
//TODO: need to add index to this component so it reloads after each loading
    import {getSingleTreatment} from '@/api/treatment'
    export default{
        props:['treatment_id'],

        data(){
            return{
                id: this.treatment_id
            }
        },

        created(){
            this.get_treatment_details()
        },
        methods:{
            get_treatment_details(){
                getSingleTreatment(this.id).then((response)=>{
                    console.log(response)
                    
                })

                
            },

        },
    }
</script>