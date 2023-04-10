import ReactApexChart from "react-apexcharts"
import { useState } from "react"
import colors from "react-apexcharts"
export const Asosiy_Chart = () => {
    const [state, setState] = useState(
        {
          
            series: [{
              name: "sales",
              data: [{
                x: '124',
                y: 750
              }, {
                x: '124',
                y: 430
              }, {
                x: '124',
                y: 750
              }, {
                x: '124',
                y: 150
              }, {
                x: '124',
                y: 200
              }, {
                x: '124',
                y: 300
              }, {
                x: '124',
                y: 400
              }, {
                x: '124',
                y: 500
              }]
            }],
            options: {
              chart: {
                type: 'bar',
                height: 380
              },
              xaxis: {
                type: 'category',
                
                group: {
                  style: {
                    fontSize: '10px'
                  },
                  groups: [
                    { title: '', cols: 4 },
                    { title: '', cols: 4 }
                  ]
                }
              },
              
            },
        } 
        
    )
    return(
        <div id="chart" style={{width: "99%"}}>
        <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />
      </div>      
    )
}