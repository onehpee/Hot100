import React, {Component} from 'react';
import '../App.css';

export default class Help extends Component {
  
  render() {
    return (
      <div className="App">
        <h1> Contact info:</h1>
        <table className="apps" align="center" cellpadding="5" border="5">
          <tr>
              <th>Name</th>
              <th>Contact</th>
          </tr>
          <tr>
              <td>Michael Kucharski</td>
              <td>michaelkucharski@discover.com</td>
          </tr>
          <tr>
              <td>Manan Amin</td>
              <td>mananamin@discover.com</td>
          </tr>
          <tr>
              <td>Dean LaBarbera</td>
              <td>deanlabarbera@discover.com</td>
          </tr>
          <tr>
              <td>Crystal Ritchey</td>
              <td>crystalritchey@discover.com</td>
          </tr>
          <tr>
              <td>Syed Rizvi</td>
              <td>syedrizvi@discover.com</td>
          </tr>
          <tr>
              <td>Adedayo Uwensuyi</td>
              <td>adedayouwensuyi@discover.com</td>
          </tr>
          <tr>
              <td>Destinee Clinkscales</td>
              <td>destineeclinkscales@discover.com</td>
          </tr>
        </table>
      </div>
      
    )
} }

