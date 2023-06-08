<template>
    <div>
        <div class="button-group">
            <el-button-group>
            <el-button @click = "get_current_week_daily_incomes">Week</el-button>
            <el-button @click="get_monthly_incomes">Month</el-button>
            <el-button @click="get_yearly_incomes">Year</el-button>
            <el-button @click="get_current_year_income_distribution">Yearly Distribution</el-button>
            <el-button @click="get_current_week_income_distribution">Weekly Distribution</el-button>
        </el-button-group>

        </div>
        
      
        

        <div id="monthly-chart"></div>

        <div id="pie-chart"></div>

    </div>
   
</template>


<script>

import echarts from 'echarts'

import { getCurrentMonthDailyIncomes,
     getCurrentWeekDailyIncomes,
      getYearlyIncomes, 
      getCurrentYearIncomeDistribution,
      getCurrentWeekIncomeDistribution} from '@/api/finance'

export default{
    props:['data'],
    data(){
        return{
            chart_data:[],
        }
    },
    mounted(){
        //this.get_yearly_incomes()

        this.initPieChart()
        
        
    },

    
    methods:{
        get_yearly_incomes(){
        getYearlyIncomes().then((response)=>{
            this.chart_data = response[0]

            console.log(this.yearly_incomes)

            this.initChart(this.chart_data.date, this.chart_data.amount)
        })
     
    },

    get_monthly_incomes(){
        getCurrentMonthDailyIncomes().then((response)=>{
            this.chart_data = response[0]
            this.initChart(this.chart_data.date, this.chart_data.amount)
        })
    },

    get_current_week_daily_incomes(){
        getCurrentWeekDailyIncomes().then((response)=>{
            this.chart_data=response[0]
            this.initChart(this.chart_data.date, this.chart_data.amount)
        })
    },

    get_current_year_income_distribution(){
        getCurrentYearIncomeDistribution().then((response)=>{
            console.log(response)
        })
    },

    get_current_week_income_distribution(){
        getCurrentWeekIncomeDistribution().then((response)=>{
            console.log(response)
        })
    },

    initChart(date, amount){
        this.chart=echarts.init(document.getElementById('monthly-chart'))

        this.chart.setOption({
           
            title:{
                text:'Income Distributions'
            },
/*             backgroundColor:'#394056',
 */            xAxis:{
                name:'Date',
                data:date,
                
                /* axisLabel:{
                    formatter:function(d){
                        return d.label;
                    }
                } */
/* 
                series:[
                    {
                        name:'Month: ',
                        data:data,
                    }
                ] */
            },

            yAxis:{
                name:'Incomes(£)'
            },

            tooltip:{
                show:true
            },

            series:[
                
            {
                    name:'Months',
                    label:{
                       emphasis:{
                        show:false,
                        /* textStyle:{
                            color:'white',
                            fontSize:'30',
                            fontweight:'bold'
                        } */
                       }
                    },

                    type:'bar',
                    itemStyle:{
                    color:'#374c80',
                    borderType:'dashed',
                    opacity:0.8
                   /*  [
                    '#003f5c',
                    '#374c80',
                    '#7a5195',
                    '#bc5090',
                    '#ef5675',
                    '#ff764a',
                    '#ffa600'
                    ] */
                    },
                 
                    data:amount
                }


                



            ]
        })
    },

    initPieChart(){
        this.chart=echarts.init(document.getElementById('pie-chart'))

        this.chart.setOption({
            title:{
                text:'Pie Chart'
            },




            series:[
                {
                    type:'pie',
                    data:[
                        {
                            value:335,
                            name:'Herbs'
                        },
                        {
                            value:830,
                            name:'Service'
                        },
                        {
                            vlaue:115,
                            name:'Retail'
                        },
                        {
                            value:553,
                            name:'Other'
                        }
                    ]

                }
            ]
        })
    },
}
}





</script>

<style  scoped>
    #monthly-chart{
        
        height:500px;
        width:50%;
    }

    .button-group{
        width:50%;
        margin:auto;
    }
</style>