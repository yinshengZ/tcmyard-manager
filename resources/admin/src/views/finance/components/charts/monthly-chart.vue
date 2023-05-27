<template>
    <div id="monthly-chart">
        
    </div>
</template>


<script>

import * as echarts from 'echarts'


export default{
    data(){
        return{
            chart:null
        }
    },
    mounted(){
        this.initChart()
    },

    
    methods:{
    initChart(){
        this.chart=echarts.init(document.getElementById('monthly-chart'))

        this.chart.setOption({
            title:{
                text:'Echarts test!'
            },
            backgroundColor:'#394056',
            xAxis:{
                data:['Jan','Feb','Mar','APR','May','June','July','Aug','Sep','Oct','Nov','Dec']
            },

            yAxis:{},
            series:[
                {
                    type:'bar',
                    data:[10,20,30,40,50,60,70,80,90,100,110,120]
                }
            ]
        })
    }
}
}




</script>