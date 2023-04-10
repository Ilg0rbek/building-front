import ReactApexChart from "react-apexcharts"
import { useState } from "react"

export const Charts_Thue = () => {
    const [state, setState] =  useState(
        {
          
            series: [60,  40],
            
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
                      fontSize: '14px',
                      color: "#AFAFAF",
                    },
                    total: {
                      show: true,
                      label: '24%',
                      fontSize: "36px",
                      formatter: function (w) {
                        // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                        return "Не успешных сделок"
                      },
                      
                    }
                  }
                }
              },
            //   "labels"
            colors: ["#62B995", "#ED6F41"]
            }
        }
    )
    return(
        <div id="chart">
        <ReactApexChart options={state.options} series={state.series} type="radialBar" height={350} />
      </div>
    )
}