import React from 'react';
import './feestructure.css'
import { Container,Row,Col } from 'reactstrap';

const Feestructure = () => {
    return <>
    <hr/>
    <h1 className='section mx-5 px-5 my-3 text-center '> Fees Structure</h1>
    <div className='d-flex justify-content-around mx-5 px-5 py-3  section'>
  
    
    <div className="contai">
  <table>
    <thead>
      <tr>
        <th>Classes</th>
        <th>Total Fees</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>12</td>
        <td>45000</td>
        
      </tr>
      
      <tr>
        <td>11</td>
        <td>42000</td>
      </tr>
      <tr>
        <td>10</td>
        <td>38000</td>
        
      </tr>
      <tr>
        <td>9</td>
        <td>37000</td>
        
      </tr>
      <tr>
        <td>8</td>
        <td>32000</td>
        
      </tr>
    
     
    </tbody>
  </table>
</div>
    
    <div className="contai">
  <table>
    <thead>
      <tr>
        <th>Classes</th>
        <th>Total Fees</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>7</td>
        <td>30000</td>
        
      </tr>
      
      <tr>
        <td>6</td>
        <td>28000</td>
      </tr>
      <tr>
        <td>5</td>
        <td>25000</td>
        
      </tr>
      <tr>
        <td>4</td>
        <td>21000</td>
        
      </tr>
      <tr>
        <td>3</td>
        <td>19000</td>
        
      </tr>
    
     
    </tbody>
  </table>
</div>
 


    </div>;
    </>
}



export default Feestructure;