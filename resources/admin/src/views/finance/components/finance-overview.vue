<template>
    <div>
        <el-row :gutter="40" class="panel-group">

            <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
            <div class="card-panel" @click="handleSetLineChartData('newVisitis')">
         <div class="card-panel-icon-wrapper icon-day">
          <svg-icon icon-class="gbp" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            Today:
          </div>
          <count-to :start-val="0" :end-val="day_income" :duration="2600" class="card-panel-num" />
        </div>
      </div>
    </el-col>

    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
            <div class="card-panel" @click="handleSetLineChartData('newVisitis')">
         <div class="card-panel-icon-wrapper icon-week">
          <svg-icon icon-class="gbp" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            Current Week:
          </div>
          <count-to :start-val="0" :end-val="week_income" :duration="2600" class="card-panel-num" />
        </div>
      </div>
    </el-col>

    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
            <div class="card-panel" @click="handleSetLineChartData('newVisitis')">
         <div class="card-panel-icon-wrapper icon-month">
          <svg-icon icon-class="gbp" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            Current Month:
          </div>
          <count-to :start-val="0" :end-val="month_income" :duration="2600" class="card-panel-num" />
        </div>
      </div>
    </el-col>


            <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
            <div class="card-panel" @click="handleSetLineChartData('newVisitis')">
         <div class="card-panel-icon-wrapper icon-annual">
          <svg-icon icon-class="gbp" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            Current Year:
          </div>
          <count-to :start-val="0" :end-val="year_income" :duration="2600" class="card-panel-num" />
        </div>
      </div>
    </el-col>

    


    


    
        
        
        
        </el-row>
        
    </div>
</template>



<script>

import CountTo from 'vue-count-to'

import { getCurrentYearIncomes, 
    getCurrentMonthIncomes,
    getCurrentWeekIncomes, 
    getCurrentDayIncomes 
} from '@/api/finance';

export default{
    components:{
        CountTo
    },
    data(){
        return{
            total_revenue:0,
            year_income:0,
            month_income:0,
            week_income:0,
            day_income:0,

        }


    },

    created(){
        this.current_year_incomes(),
        this.current_month_incomes(),
        this.current_week_incomes(),
        this.current_day_incomes()
    },

    methods:{
        current_year_incomes(){
            getCurrentYearIncomes().then((response)=>{
                this.year_income = response
            })
        },

        current_month_incomes(){
            getCurrentMonthIncomes().then((response)=>{
                this.month_income = response
            })
        },

        current_week_incomes(){
            getCurrentWeekIncomes().then((response)=>{
                this.week_income=response
            })
        },

        current_day_incomes(){
            getCurrentDayIncomes().then((response)=>{
                this.day_income = response
            })
        }
    }


}

</script>

<style lang="scss" scoped>
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
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);

    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .icon-people {
        background: #40c9c6;
      }

      .icon-annual{
        background:#40c9c6;
      }

      .icon-month{
        background:#36a3f7;
      }
      .icon-week{
        background:#f86306;
      }
      .icon-day{
        background:#34bfa3;
      }

      .icon-message {
        background: #36a3f7;
      }

      .icon-money {
        background: #f4516c;
      }

      .icon-shopping {
        background: #34bfa3
      }
    }

    .icon-people {
      color: #40c9c6;
    }

    .icon-annual{
        color:#40c9c6;
    }
    .icon-month{
        color: #36a3f7; 
    }
    .icon-week{
        color:#f86306;
    }

    .icon-day{
        color:#34bfa3;
    }

    .icon-message {
      color: #36a3f7;
    }

    .icon-money {
      color: #f4516c;
    }

   
    .icon-shopping {
      color: #34bfa3
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