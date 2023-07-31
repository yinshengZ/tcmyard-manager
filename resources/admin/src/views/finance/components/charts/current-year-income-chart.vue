<template>
  <div>

    <el-row :gutter="40" class="panel-group">
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel" @click="get_current_day_incomes">
          <div class="card-panel-icon-wrapper icon-day">
            <svg-icon icon-class="gbp" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">Today:</div>
            <count-to
              :start-val="0"
              :end-val="day_income"
              :duration="2600"
              class="card-panel-num"
            />
          </div>
        </div>
      </el-col>

      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel" @click="get_current_week_daily_incomes">
          <div class="card-panel-icon-wrapper icon-week">
            <svg-icon icon-class="gbp" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">Current Week:</div>
            <count-to
              :start-val="0"
              :end-val="week_income"
              :duration="2600"
              class="card-panel-num"
            />
          </div>
        </div>
      </el-col>

      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel" @click="get_current_month_daily_incomes">
          <div class="card-panel-icon-wrapper icon-month">
            <svg-icon icon-class="gbp" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">Current Month:</div>
            <count-to
              :start-val="0"
              :end-val="month_income"
              :duration="2600"
              class="card-panel-num"
            />
          </div>
        </div>
      </el-col>

      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel" @click="get_current_year_incomes">
          <div class="card-panel-icon-wrapper icon-annual">
            <svg-icon icon-class="gbp" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">Current Year:</div>
            <count-to
              :start-val="0"
              :end-val="year_income"
              :duration="2600"
              class="card-panel-num"
            />
          </div>
        </div>
      </el-col>
    </el-row>

    <div class="chart-area">
      <el-card> 
        <div slot="header" class="clearfix">
          <span>Incomes Chart</span>
        </div>       
        <div id="monthly-chart"></div>
        
      </el-card>

      <el-card>
        <div slot="header" class="clearfix">
          <span>Distributions Chart</span>
        </div>
        <div id="pie-chart"></div>
      </el-card>
    </div>
    

  </div>
</template>

<script>
import echarts from "echarts";
import CountTo from "vue-count-to";


import {
  getCurrentYearIncomes,
  getCurrentMonthIncomes,
  getCurrentWeekIncomes,
  getCurrentDayIncomes,
} from "@/api/finance";

import { uppercaseFirst } from "@/filters";

import {
  getCurrentDailyIncomes,
  getCurrentDayDailyIncomeDistribution,
  getCurrentYearMonthlyIncomes,
  getCurrentMonthDailyIncomes,
  getCurrentWeekDailyIncomes,  
  getCurrentYearIncomeDistribution,
  getCurrentWeekIncomeDistribution,
  getCurrentMonthIncomeDistribution,
} from "@/api/finance";

export default {
  props: ["data"],
  components: {
    CountTo,
  },
  data() {
    return {
      total_revenue: 0,
      year_income: 0,
      month_income: 0,
      week_income: 0,
      day_income: 0,
      no_data:true,
    };
  },
  mounted() {
    this.current_year_incomes(),
      this.current_month_incomes(),
      this.current_week_incomes(),
      this.current_day_incomes();

    this.get_current_day_incomes();
  },

  methods: {
    uppercaseFirst,

    //current day incomes
    get_current_day_incomes() {
      getCurrentDailyIncomes().then((response) => {
        let final_data = {};
        let value = [];
        let date = [];

        for (let i = 0; i < response.length; i++) {
          value.push(response[i].amount);
          date.push(i + 1);
        }

        final_data.value = value;
        final_data.date = date;

        if (response.length > 0) {
          this.no_data = false
          this.initBarChart(final_data, "Current Day Incomes");

          this.get_current_day_daily_income_distribution();
        }
      });
    },

    get_current_day_daily_income_distribution() {
      getCurrentDayDailyIncomeDistribution().then((response) => {

        let final_data = [];

        if(response.length>0){
          for (let i = 0; i < response.length; i++) {
          let data = {};
          data.value = response[i].amount;
          data.name = uppercaseFirst(response[i].service["categories"]);
          final_data.push(data);
          }
          this.initPieChart(final_data, "Current Day Income Distribution");

        }
        

      });
    },


    //current week incomes
    get_current_week_daily_incomes() {
      getCurrentWeekDailyIncomes().then((response) => {
        let title = "Current Week Daily Incomes";
        let final_data = {};
        let value = [];
        let date = [];

        for (let i = 0; i < response.length; i++) {
          value.push(response[i].amount);
          date.push(response[i].date);
        }

        final_data.value = value;
        final_data.date = date;

        this.initBarChart(final_data, title);
        this.get_current_week_income_distribution();
      });
    },

    get_current_week_income_distribution() {
      getCurrentWeekIncomeDistribution().then((response) => {
        let final_data = [];
        let title = "Current Week Incomes By Category";

        for (let i = 0; i < response.length; i++) {
          let data = {};
          data.value = response[i].amount;
          data.name = response[i].service["categories"];
          final_data.push(data);
        }

        this.initPieChart(final_data, title);
      });
    },



//current month incomes
    get_current_month_daily_incomes() {
      getCurrentMonthDailyIncomes().then((response) => {
        let title = "Current Month Daily Incomes";
        let final_data = {};
        let value = [];
        let date = [];

        for (let i = 0; i < response.length; i++) {
          value.push(response[i].amount);
          date.push(response[i].date);
        }

        final_data.value = value;
        final_data.date = date;
        this.initBarChart(final_data, title);

        this.get_current_month_income_distribution();
      });
    },

    get_current_month_income_distribution() {
      getCurrentMonthIncomeDistribution().then((response) => {
        let final_data = [];

        for (let i = 0; i < response.length; i++) {
          let data = {};
          data.value = response[i].amount;
          data.name = response[i].service["categories"];
          final_data.push(data);
        }
        this.initPieChart(final_data,'Current Month Income Distribution');
      });
    },








//current year incomes
    get_current_year_incomes() {
      getCurrentYearMonthlyIncomes().then((response) => {
        let final_data = {};
        let value = [];
        let date = [];

        for (let i = 0; i < response.length; i++) {
          value.push(response[i].amount);
          date.push(response[i].date);
        }

        final_data.value = value;
        final_data.date = date;

        if (response.length > 0) {
          this.initBarChart(final_data, "Current Year Monthly Incomes");
          this.get_current_year_income_distribution();
        }
      });
    },

    get_current_year_income_distribution() {
      getCurrentYearIncomeDistribution().then((response) => {
        let final_data = [];

        for (let i = 0; i < response.length; i++) {
          let data = {};

          data.value = response[i].amount;
          data.name = response[i].service["categories"];
          final_data.push(data);
        }
        console.log(final_data);
        this.initPieChart(final_data, "Current Year Income Distribution");
      });
    },




    
  


   

  
    initBarChart(data, title) {
      this.chart = echarts.init(document.getElementById("monthly-chart"));

      this.chart.clear();

      this.chart.setOption({
        title: {
          text: title,
        },
        /*             backgroundColor:'#394056',
         */ xAxis: {
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
                /* textStyle:{
                            color:'white',
                            fontSize:'30',
                            fontweight:'bold'
                        } */
              },
            },

            graphic:{
              type:'text',
              left:'center',
              top:'middle',
              style:{text:"No data!"}
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

    initPieChart(data, title) {
      this.pie_chart = echarts.init(document.getElementById("pie-chart"));

      this.pie_chart.clear();

      this.pie_chart.setOption({
        title: {
          text: title,
        },

        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
        },

        series: [
          {
            name: "Income Distributions",
            type: "pie",
            radius: "50%",

            data: data,
          },
        ],
      });
    },
    current_year_incomes() {
      getCurrentYearIncomes().then((response) => {
        this.year_income = response;
      });
    },

    current_month_incomes() {
      getCurrentMonthIncomes().then((response) => {
        this.month_income = response;
      });
    },

    current_week_incomes() {
      getCurrentWeekIncomes().then((response) => {
        this.week_income = response;
      });
    },

    current_day_incomes() {
      getCurrentDayIncomes().then((response) => {
        this.day_income = response;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.button-group {
  width: 50%;
  margin: auto;
}

.chart-area {
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 1em;
}

@media screen and (min-width: 900px) {
  .chart-area {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1em;
  }
}

#monthly-chart {
  height: 500px;
  width: 100%;
}

#pie-chart {
  height: 500px;
  width: 100%;
}

.panel-group {
  margin-top: 18px;

  .card-panel-col {
    margin-bottom: 32px;
  }

  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.05);

    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .icon-people {
        background: #40c9c6;
      }

      .icon-annual {
        background: #40c9c6;
      }

      .icon-month {
        background: #36a3f7;
      }
      .icon-week {
        background: #f86306;
      }
      .icon-day {
        background: #34bfa3;
      }

      .icon-message {
        background: #36a3f7;
      }

      .icon-money {
        background: #f4516c;
      }

      .icon-shopping {
        background: #34bfa3;
      }
    }

    .icon-people {
      color: #40c9c6;
    }

    .icon-annual {
      color: #40c9c6;
    }
    .icon-month {
      color: #36a3f7;
    }
    .icon-week {
      color: #f86306;
    }

    .icon-day {
      color: #34bfa3;
    }

    .icon-message {
      color: #36a3f7;
    }

    .icon-money {
      color: #f4516c;
    }

    .icon-shopping {
      color: #34bfa3;
    }

    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      float: left;
      font-size: 48px;
    }

    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;

      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }

      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}
</style>
