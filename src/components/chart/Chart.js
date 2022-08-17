import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar'



class Chart extends React.Component{

    render(){
       const dataPointValues = this.props.dataPoints.map((dataPoint) => dataPoint.value)
       const totalMax = Math.max(...dataPointValues)
       return (
           <div className='chart'>
               {this.props.dataPoints.map((dataPoint) => (
                   <ChartBar
                       key={dataPoint.label}
                       value={dataPoint.value}
                       label={dataPoint.label}
                       maxValue={totalMax}
                   />
               ))}
               
           </div>
       )
    }
}




// function Chart(props) {
//     const dataPointValues=props.dataPoints.map((dataPoint)=>dataPoint.value)
//     const totalMax = Math.max(...dataPointValues)
//     return(
//         <div className='chart'>
//         {props.dataPoints.map((dataPoint)=>(
//             <ChartBar 
//             key={dataPoint.label}
//             value={dataPoint.value}
//             label={dataPoint.label}
//             maxValue={totalMax}
//              />
//         ))}
//         </div>
//     )
// }

export default Chart;