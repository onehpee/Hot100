import React, { Component } from 'react'
import { Polar } from 'react-chartjs-2';

class polar extends Component {
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
                '#FF6384c0',
                '#4BC0C0c0',
                '#FFCE56c0',
                '#E7E9EDc0',
                '#36A2EBc0'
            ],
            borderColor:[
                '#FF6384',
                '#4BC0C0',
                '#FFCE56',
                '#E7E9ED',
                '#36A2EB',
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

export default polar;