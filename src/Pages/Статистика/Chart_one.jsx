import ReactApexChart from "react-apexcharts"
import { useState } from "react"

export const Chart_one = () => {
    const [state, setState] = useState(
        {
          
            series: [60,  50],
            
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
                      label: '76%',
                      fontSize: "36px",
                      formatter: function (w) {
                        // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                        return "Успешных сделок"
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