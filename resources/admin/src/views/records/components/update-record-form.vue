<template>
    <div class="app-container">
        <tinymce v-model="record_details.record_body" :height="300"></tinymce>

        <el-button type="primary" @click="update_record">
            Update
        </el-button>
    </div>
</template>

<script>
import {getSingleRecord} from "@/api/record.js"
import {updateRecord} from "@/api/record.js"
import Tinymce from "@/components/Tinymce"
export default {
props:['record_id','patient_id','user_id'],
components:{Tinymce},
data(){
    return{
        record_details:{
          
        },
        
    }
},
created(){
    this.get_record_details();
},

methods:{
    get_record_details(){
        getSingleRecord(this.record_id).then((response)=>{
            this.record_details = response
         
    })
    },

    update_record(){
        updateRecord(this.record_details,this.record_id).then((response)=>{
            this.$notify({
                title:'Notification',
                message:response,
                type:'success'
            })
        })
    }
}


}
</script>


<style lang="scss" scoped>
    
</style>