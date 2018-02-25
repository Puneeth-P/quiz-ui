import React, { Component } from 'react';
import logo from './exp_logo.png';
import {Breadcrumb, BreadcrumbItem, Row} from 'react-bootstrap';
import './App.css';


class Round4 extends Component {

  
    
    render() {
   
    return (
        <div className="wrapper">
            <div className="breadcrumb">
                <Breadcrumb>
                    <BreadcrumbItem href="/home">Home</BreadcrumbItem>
                    <BreadcrumbItem href="/round4" active>Round 4</BreadcrumbItem>
                </Breadcrumb>
            </div>

            <Row>
            
            <button className="btn btn-2 btn-2b" id="round1" >Round 1</button>
            <button className="btn btn-2 btn-2b" id="round2">Round 2</button>
           
          </Row>
           
            <Row>
            <button className="btn btn-2 btn-2b" id="round3">Round 3</button>
            <button className="btn btn-2 btn-2b" id="round4">Round 4</button>
           
       
            </Row>
            <Row>
          
            <button className="btn btn-2 btn-2b" id="round5">Round 5</button>
            <button className="btn btn-2 btn-2b" id="round6">Round 6</button>
          
            </Row>
           
           

 
  </div>
    );
  }
}

export default Round4;
