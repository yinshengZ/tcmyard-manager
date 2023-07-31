<template>
    <div>
    

        
        <div class="records">

            <div>
                <el-card shadow="hover">
                <div slot="header" class="clearfix card-header">
                    <span><h2>Highest Daily Income</h2></span>

                    
                </div>
                <div class="card-body">
                    <div class="date">
                        <h3>Date: {{ highest_daily.date }}</h3>
                    </div>

                    <div>
                        <span>
                            Income: £
                            <count-to :start-val=0 :end-val=Number(highest_daily.amount) :duration="2600"></count-to>
                        </span>
                       
                    </div>
                </div>

                <el-divider>

                </el-divider>
                <div>
                    <span>Transactions: {{highest_daily.transactions}}</span>
                </div>
            </el-card>
        </div>
            <div>
                <el-card shadow="hover">
                <div slot="header" class="clearfix">
                    <h2><span>Highest Weekly Income</span></h2>
                </div>

                <div class="card-body">
                    <div class="date">
                        
                        <h3>Year: {{ highest_weekly.year }} Week: {{ highest_weekly.week }}</h3>
                       

                    </div>

                    <div>
                        <span>
                            Income: £
                            <count-to :start-val=0 :end-val=Number(highest_weekly.amount) :duration="2600"></count-to>
                        </span>
                       
                    </div>
                </div>

                <el-divider>

                </el-divider>
                <div>
                    <span>Transactions: {{highest_weekly.transactions}}</span>
                </div>

            </el-card>
            </div>
            <div>
                <el-card shadow="hover">
                <div slot="header" class="clearfix">
                   <h2><span>Highest Monthly Income</span></h2> 
                </div>

                <div class="card-body">
                    <div class="date">
                        <h3>Date: {{ highest_monthly.year }}-{{  highest_monthly.month }}</h3>
                    </div>

                    <div>
                        <span>
                            Income: £
                            <count-to :start-val=0 :end-val=Number(highest_monthly.amount) :duration="2600"></count-to>
                        </span>
                       
                    </div>
                </div>

                <el-divider>

                </el-divider>
                <div>
                    <span>Transactions: {{highest_monthly.transactions}}</span>
                </div>

            </el-card>
            </div>
            <div>
                <el-card shadow="hover">
                <div slot="header" class="clearfix">
                    <h2><span>Highest Yearly Income</span></h2>
                </div>

                <div class="card-body">
                    <div class="date">
                        <h3>Date: {{ highest_yearly.year }}</h3>
                    </div>

                    <div>
                        <span>
                            Income: £
                            <count-to :start-val=0 :end-val=Number(highest_yearly.amount) :duration="2600"></count-to>
                        </span>
                       
                    </div>
                </div>

                <el-divider>

                </el-divider>
                <div>
                    <span>Transactions: {{highest_yearly.transactions}}</span>
                </div>
            </el-card>
            </div>
            
        </div>

        <div>
            <el-button @click="get_highest_spender">Click Me!</el-button>
        </div>
        
    </div>
</template>



<script>
import CountTo from "vue-count-to";
import { getHighestDailyIncome , getHighestWeeklyIncome ,getHighestMonthlyIncome, getHighestYearlyIncome
,getHighestSpender} from '@/api/finance';
export default{
    components:{
        CountTo,
    },
    data(){
        return{
            highest_daily:[],
            highest_monthly:[],
            highest_yearly:[],
            highest_weekly:[],
        }
    },

    mounted(){
        this.get_highest_daily_income()
        this.get_highest_monthly_income()
        this.get_highest_yearly_income()
        this.get_highest_weekly_income()
    },

    methods:{
        get_highest_daily_income(){
            getHighestDailyIncome().then((response)=>{
                this.highest_daily = response
            })
        },

        get_highest_weekly_income(){
            getHighestWeeklyIncome().then((response)=>{
                this.highest_weekly = response
            })
        },

        get_highest_monthly_income(){
            getHighestMonthlyIncome().then((response)=>{
                this.highest_monthly = response
            })
        },

        get_highest_yearly_income(){
            getHighestYearlyIncome().then((response)=>{
                this.highest_yearly = response
            })
        },

        get_highest_spender(){
            getHighestSpender().then((response)=>{
                console.log(response)
            })
        }
        
    }
}


</script>



<style scoped>
.records{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 10px;
}



.card-header{
    display: flex;
    justify-content: center;
}

.card-body{
    display:grid;
    grid-template-columns: 1fr;
    height:300px;
    border: solid 2px;
}







</style>