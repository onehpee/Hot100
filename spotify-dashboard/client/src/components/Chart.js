import React, { Component } from 'react'
import { Polar } from 'react-chartjs-2';

class Chart extends Component {
    state = {
        datasets: [{
            data: [
                11,
                16,
                7,
                3,
                14
            ],
            backgroundColor: [
                '#FF6384',
                '#4BC0C0',
                '#FFCE56',
                '#E7E9ED',
                '#36A2EB'
            ],
            label: 'My Dataset' // for legend
        }],
        labels: [
            'Red',
            'Green',
            'Yellow',
            'Grey',
            'Blue'
        ]
    };

    render() {
        return (
            <div className="chart">
                <Polar data={this.state} />
            </div>
        );
    }
}

export default Chart;