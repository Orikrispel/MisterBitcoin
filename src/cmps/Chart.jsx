import React, { Component } from 'react'
import { Line } from "react-chartjs-2"

export class Chart extends Component {

  render() {
    const { chartData } = this.props
    const dateLabels = [];
    for (let i = chartData.values.length; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const label = `${day}/${month}`;
      dateLabels.push(label);
    }
    const data = {
      labels: dateLabels,
      datasets: [
        {
          label: chartData.name,
          backgroundColor: "rgb(255, 35, 122)",
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 1,
          data: chartData.values.map(value => value.y),
        },
      ],
    };
    return (
      <div>
        <Line data={data} />
      </div>
    )
  }
}
