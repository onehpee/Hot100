import React, {Component} from 'react';
import {HorizontalBar} from 'react-chartjs-2';
import '../App.css';

export default class Chart extends Component {
  
  render() {
    const data = {
      labels: ['Blinding Lights', 'Toosie Slide', 'Roses', 'death bed', 'Dance Monkey'],
      datasets: [
        {
          label: 'Top 5 songs on Spotify',
          backgroundColor: 'rgba(178, 5, 8, 0.5)',
          borderColor: 'rgb(0, 0, 0)',
          borderWidth: 2,
          hoverBackgroundColor: 'rgb(214, 95, 10)',
          hoverBorderColor: 'rgb(10, 214, 193)',
          data: [5585890, 5117365, 4443330, 3969465, 3584848]
        }
      ]
    };
    
    return (
      <div className="App">
        <h1> Chart</h1>
        <HorizontalBar data={data} />
      </div>
      
    )
} }
