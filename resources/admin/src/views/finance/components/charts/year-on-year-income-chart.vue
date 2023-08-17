<template>
  <div class="container">
    <div class="button-group">
      <el-button-group>
        <el-button @click="get_monthly_comparisons">Get Data</el-button>
        <el-button @click="get_yearly_comparisons">Get Yearly Data</el-button>
        <el-button @click="get_weekly_comparisons">Get Weekly Data</el-button>
        <el-button @click="get_all_time_percentages">All</el-button>
      
      </el-button-group>
    </div>

    <div class="chart-area">
      <el-card>          
            <div id="YOY-Barchart" class="YOY-Barchart"></div>
      </el-card>

        <el-card>
          <div id="YOY-PieChart" class="YOY-PieChart"></div> 
        </el-card>
     </div>

  </div>
</template>

<script>
import echarts from "echarts";

import {
  getMonthlyComparisonIncomes,
  getYearlyComparisonIncomes,
  getWeeklyComparisonIncomes,
  getYearDistributions,
  getWeekDistributions,
  getAllTimePercentages,
} from "@/api/finance.js";

export default {
  data(){
    return{
      pie_data:[]
    }
  },

  created() {
    this.get_monthly_comparisons();
  },

  

  methods: {
  
    
    get_weekly_comparisons() {
      getWeeklyComparisonIncomes().then((response) => {
        let final_data = {};
        let value = [];
        let date = [];

        for (let i = 0; i < response.length; i++) {
          value.push(response[i].amount);
          date.push(response[i].week);
        }

        final_data.value = value;
        final_data.date = date;

        this.initBarChart(
          final_data,
          "Weekly Incomes Comparisons (Current Year)", "weekly"
        );
      });
    },

    get_monthly_comparisons() {
      getMonthlyComparisonIncomes().then((response) => {
        let final_data = {};
        let value = [];
        let date = [];

        for (let i = 0; i < response.length; i++) {
          value.push(response[i].amount);
          date.push(response[i].year + "-" + response[i].month);
        }

        final_data.value = value;
        final_data.date = date;

        this.initBarChart(final_data, "Year over Year Monthly Comparison", "monthly");
      });
    },

    get_yearly_comparisons() {
      getYearlyComparisonIncomes().then((response) => {
        let final_data = {};
        let value = [];
        let date = [];

        for (let i = 0; i < response.length; i++) {
          value.push(response[i].amount);
          date.push(response[i].year);
        }

        final_data.value = value;
        final_data.date = date;

        this.initBarChart(final_data, "Yearly Incomes Comparison", "yearly");
      });
    },


    get_all_time_percentages() {
      getAllTimePercentages().then((response) => {
        let final_data = [];

        for (let i = 0; i<response.length; i++){
            let data ={};

            data.value = response[i].amount
            data.name = response[i].service['categories']

            final_data.push(data);
        }

        this.initPieChart(final_data, "Income Distributions of All Time")
      });
    },

    initPieChart(data,title){
        this.pie_chart = echarts.init(document.getElementById('YOY-PieChart'));
        this.pie_chart.clear();
       
        this.pie_chart.setOption({
            title:{
                text:title,
            },

            tooltip:{
                trigger:'item',
            },
            legend:{
                top:"5%",
                left:'center',
            },

            series:[
                {
                    name:"Total Income Distributions",
                    type:"pie",
                    radius:"50%",

                    data:data,
                }
            ]

        })
    },

    initBarChart(data, title, name) {

      this.chart = echarts.init(document.getElementById('YOY-Barchart'));
      this.chart.resize()

      this.chart.clear();

      this.chart.on('click', params=> {
        
        if(params.seriesName =='yearly'){ 
           getYearDistributions(params.name).then((response)=>{         
            this.pie_data = []
            for(let i= 0; i<response.length; i++){
              let data = {}
              let service = response[i].service
              data.value = response[i].amount
              data.name = service.categories

              this.pie_data.push(data)
            }          
           
          })
       
          this.initPieChart(this.pie_data, "Yearly Distributions")
        }else if(params.seriesName=='weekly'){
          getWeekDistributions(params.name).then((response)=>{
            console.log(response)
            this.pie_data=[]
            for(let i=0; i<response.lenghth; i++){
              let data = {}
              let service = response[i].service
              data.value = response[i].amount
              data.name = service.categories

              this.pie_data.push(data)
            }
          })
          console.log(this.pie_data)
          this.initPieChart(this.pie_data,"Weekly Distributions")
        } 

         
      });

      this.chart.setOption({
        title: {
          text: title,
        },

        xAxis: {
          name: "Date",
          data: data.date,
        },

        yAxis: {
          name: "Incomes(£)",
        },

        tooltip: {
          show: true,
          formatter: function(params){
            return params.seriesName+': ' + params.name
          }
        },

        series: [
          {
            name: name,
            label: {
              emphasis: {
                show: false,
              },
            },

            legend: {
              top: "5%",
              left: "center",
            },

            type: "bar",
            itemStyle: {
              color: "#374c80",
              borderType: "dashed",
              opacity: 0.8,
            },

            data: data.value,
          },
        ],
      });
    },




  },

  
};
</script>

<style scoped>
.button-group {
  display: flex;
  justify-content: center;
}
.chart-area {
  width: 100%;
  margin-top: 1%;
}
.chart-area{
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1em;
}

.YOY-Barchart {
 
  height: 500px;
  
}

.YOY-PieChart{

  height:500px;
}
</style>
