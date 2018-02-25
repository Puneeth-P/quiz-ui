import React, { Component } from 'react';
import {Breadcrumb, BreadcrumbItem, Row} from 'react-bootstrap';
import './App.css';


class Home extends Component {

    constructor(props){
        super(props);
        this.moveToRoundPage = this.moveToRoundPage.bind(this);
        this.state = {
           
        };
    }

    moveToRoundPage(e,roundNum) {
       e.preventDefault();
        window.location.href = "/home/round"+roundNum;
    }
  render() {
    

    return (
        <div className="wrapper">
            <div className="breadcrumb">
                <Breadcrumb>
                    <BreadcrumbItem active>Home</BreadcrumbItem>
                </Breadcrumb>
            </div>

            <Row>
            
            <button className="btn btn-2 btn-2b" id="round1" onClick={(e) => this.moveToRoundPage(e,1)}>Round 1</button>
            <button className="btn btn-2 btn-2b" id="round2" onClick={(e) => this.moveToRoundPage(e,2)}>Round 2</button>
           
          </Row>
           
            <Row>
            <button className="btn btn-2 btn-2b" id="round3" onClick={(e) => this.moveToRoundPage(e,3)}>Round 3</button>
            <button className="btn btn-2 btn-2b" id="round4" onClick={(e) => this.moveToRoundPage(e,4)}>Round 4</button>
           
       
            </Row>
            <Row>
          
            <button className="btn btn-2 btn-2b" id="round5" onClick={(e) => this.moveToRoundPage(e,5)}>Round 5</button>
            <button className="btn btn-2 btn-2b" id="round6" onClick={(e) => this.moveToRoundPage(e,6)}>Round 6</button>
          
            </Row>
           
           

 
  </div>
    );
  }
}

export default Home;
