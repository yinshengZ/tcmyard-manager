<template>
  <div class="container">
    <div class="button-group">
      <el-button-group>
        <el-button @click="get_monthly_comparisons">Get Data</el-button>
        <el-button @click="get_yearly_comparisons">Get Yearly Data</el-button>
        <el-button @click="get_weekly_comparisons">Get Weekly Data</el-button>
        <el-button @click="get_all_time_percentages">All</el-button>
        <button class="pan-btn blue-btn" @click="get_monthly_comparisons">Hello</button>
      </el-button-group>
    </div>

    <div class="chart-area">
      <el-card>
        <div id="chart"></div>
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
  getAllTimePercentages,
} from "@/api/finance.js";

export default {
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
          date.push("week: " + response[i].week);
        }

        final_data.value = value;
        final_data.date = date;

        this.initBarChart(
          final_data,
          "Weekly Incomes Comparisons (Current Year)"
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

        this.initBarChart(final_data, "Year over Year Monthly Comparison");
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

        this.initBarChart(final_data, "Yearly Incomes Comparison");
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

    initBarChart(data, title) {
      this.chart = echarts.init(document.getElementById("chart"));

      this.chart.clear();

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
        },

        series: [
          {
            name: "Incomes",
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

    initPieChart(data,title){
        this.pie_chart = echarts.init(document.getElementById('chart'));
        this.pie_chart.clear();
        alert('clicked!')
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
  display: flex;
  justify-content: center;
}

#chart {
  height: 500px;
  width: 1000px;
}
</style>