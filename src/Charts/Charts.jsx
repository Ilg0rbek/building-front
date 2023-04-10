import React from "react"
import { useState } from "react"
import ReactApexChart from "react-apexcharts"

export const ApexChart = () => {
    const [state, setState] = useState(
        {
          
            series: [44, 55, 67, 83],
            options: {
              chart: {
                height: 350,
                type: 'radialBar',
              },
              plotOptions: {
                radialBar: {
                  dataLabels: {
                    name: {
                      fontSize: '22px',
                    },
                    value: {
                      fontSize: '16px',
                    },
                   total:{
                    label: "Statistika",
                    show: true,
                    
                   }
                  }
                }
              },
              labels: ['Olmalar', 'Apelsinlar', 'Bananlar', 'Uzumlar'],
            },
        }
    )
    return(
        <div id="chart">
             <ReactApexChart options={state.options} series={state.series} type="radialBar" height={350} />
        </div>
    
    )
}
