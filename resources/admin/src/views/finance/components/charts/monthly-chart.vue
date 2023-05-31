<template>
    <div>
        

        <div id="monthly-chart"></div>

        <div id="yearly-chart"></div>
        {{ data }}
    </div>
   
</template>


<script>

import echarts from 'echarts'


export default{
    props:['data'],
    data(){
        return{
            chart:null,
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
/*             backgroundColor:'#394056',
 */            xAxis:{
                data:['Jan','Feb','Mar','APR','May','June','July','Aug','Sep','Oct','Nov','Dec'],
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

            yAxis:{},
            series:[
                
                   
             
                

                {
                    name:'Months',
                    label:{
                       emphasis:{
                        show:true,
                        textStyle:{
                            fontSize:'30',
                            fontweight:'bold'
                        }
                       }
                    },

                    type:'bar',
                    //data:[20,20,30,40,50,60,70,80,90,100,110,120]
                    data:[{value:10,name:'January'},
                        {value:20,name:'Feburary'},
                    {value:30,name:'March'},
                {value:40,name:'April'},
            {value:50,name:'May'},
        {value:60,name:'June'},
    {value:70,name:'July'},
{value:80,name:'August'},
{value:90,name:'Sepetember'},
{value:100,name:'October'},
{value:110,name:'Novemeber'},
{value:120,name:'Decenmber'}]
                }
            ]
        })
    }
}
}




</script>

<style  scoped>
    #monthly-chart{
        border-style: solid;
        height:500px;
        width:100%;
    }
</style>