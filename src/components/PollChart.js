import React, { Component } from 'react';

import Chart from '../../lib/Chart.min';

class PollChart extends Component {
  componentDidMount() {
    const ctx = this.context;

    const myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
  }

  render() {
    return (
      <div className="chartContainer">
        <h3> What is your opinion of trump?</h3>
        <div className="pieChart">
          <canvas
            id="myChart"
            ref={c => (this.context = c.getContext('2d'))} //eslint-disable-line
          />
        </div>
        <div className="shareButtons">
          <button>Share on fb</button>
          <button>Share on twitter</button>
          <button>Share on google</button>
        </div>
      </div>
    );
  }
}

export default PollChart;
