<template>
    <div class="container">
       <div>
        <el-button-group>
            <el-button @click="get_monthly_comparisons">Get Data</el-button>
            <el-button @click="get_yearly_comparisons">Get Yearly Data</el-button>
            <el-button @click = "get_weekly_comparisons">Get Weekly Data</el-button>
        </el-button-group>

        </div>

        <div id="bar-chart"></div>
        
    
        
       
 

       

    </div>
</template>



<script>
import echarts from "echarts"

import {getMonthlyComparisonIncomes, getYearlyComparisonIncomes, getWeeklyComparisonIncomes} from "@/api/finance.js"


export default{
  


    created(){
        this.get_monthly_comparisons()
    },

    methods:{

        get_weekly_comparisons(){
            getWeeklyComparisonIncomes().then((response)=>{
                let final_data={}
                let value=[]
                let date=[]

                for (let i = 0; i<response.length; i++){
                    value.push(response[i].amount)
                    date.push('week: '+response[i].week)
                }

                final_data.value = value;
                final_data.date = date;

                this.initBarChart(final_data, 'Weekly Incomes Comparisons (Current Year)')
            })
        },




        get_monthly_comparisons(){
            getMonthlyComparisonIncomes().then((response)=>{
                let final_data={}
                let value=[]
                let date=[]

                for (let i = 0; i<response.length; i++){
                    value.push(response[i].amount)
                    date.push(response[i].year+'-'+response[i].month)
                }

                final_data.value = value;
                final_data.date = date;

                this.initBarChart(final_data, 'Year over Year Monthly Comparison')

            })
        },

        get_yearly_comparisons(){
            getYearlyComparisonIncomes().then((response)=>{
                let final_data={}
                let value=[]
                let date=[]

                for (let i = 0; i<response.length; i++){
                    value.push(response[i].amount)
                    date.push(response[i].year)
                }

                final_data.value = value;
                final_data.date = date;

                this.initBarChart(final_data, 'Yearly Incomes Comparison')
            })
        },


        initBarChart(data, title){
            this.chart = echarts.init(document.getElementById("bar-chart"))

            this.chart.clear();

            this.chart.setOption({
                title:{
                    text:title
                },

                xAxis:{
                    name:'Date',
                    data: data.date,
                },

                yAxis:{
                    name:"Incomes(£)",
                },

                tooltip:{
                    show:true,
                },

                series:[
                    {
                        name:"Incomes",
                        label:{
                            emphasis:{
                                show:false,
                            }
                        },

                        legend:{
                            top:'5%',
                            left:'center',

                        },

                        type:"bar",
                        itemStyle:{
                            color:"#374c80",
                            borderType:'dashed',
                            opacity:0.8,
                        },

                        data:data.value,
                    }
                ]
            })
        }

        
    }

}


</script>



<style scoped>



    #bar-chart{
        width:1000px;
        height:500px;
       
    }
</style>