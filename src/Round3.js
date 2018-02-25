import React, { Component } from 'react';
import logo from './exp_logo.png';
import {Breadcrumb, BreadcrumbItem, Row, Panel} from 'react-bootstrap';
import './App.css';
import data from './Questions/3.json';
import logo1 from "./Questions/3/1.png";
import logo2 from "./Questions/3/2.png";
import logo3 from "./Questions/3/3.png";
import logo4 from "./Questions/3/4.png";
import logo5 from "./Questions/3/5.png";
import logo6 from "./Questions/3/6.png";
import logo7 from "./Questions/3/7.png";
import logo8 from "./Questions/3/8.png";
import logo9 from "./Questions/3/9.png";
import logo10 from "./Questions/3/10.png";
import logo11 from "./Questions/3/11.png";
import logo12 from "./Questions/3/12.png";
import logo13 from "./Questions/3/13.png";
import logo14 from "./Questions/3/14.png";



class Round3 extends Component {

    constructor(props){
        super(props);
        this.startRound3 = this.startRound3.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
        this.getQuesNo = this.getQuesNo.bind(this);
        this.state = {
           showRules: true,
           question: "",
           doneQuestionsList: [],
           min: 1,
           max: 14,
           error: "Oops!! Round 3 images are exhausted!!",
           logo: ""
           
        };
    }
   
   
    startRound3() {
        this.setState({showRules: false});
        var questionNo = this.getQuesNo(this.state.min, this.state.max)
        console.log(questionNo);
        
        this.setState({logo: questionNo})
        this.setState({question: data[questionNo.toString()]})
    }

    nextQuestion() {
        var questionNo = this.getQuesNo(this.state.min, this.state.max);
        
        if(questionNo != undefined) {
            this.setState({logo: questionNo})
            questionNo = questionNo.toString();
            this.setState({question: data[questionNo]});
        }
        else {
            this.setState({ question: this.state.error });
    }
    console.log(questionNo)
}
    
    getQuesNo(min, max) {
        var quesNo;
        if(this.state.doneQuestionsList.length == 0) {
            quesNo = this.getRandomInt(min,max);
            this.state.doneQuestionsList.push(quesNo);
            this.setState({doneQuestionsList: this.state.doneQuestionsList })
        }
        else {
                if(!(this.state.doneQuestionsList.length == (max - min + 1))) {
                    quesNo = this.getRandomInt(min,max);
                    while(this.state.doneQuestionsList.indexOf(quesNo) > -1) {
                        quesNo = this.getRandomInt(min,max);
                    }   
                    this.state.doneQuestionsList.push(quesNo);
                    this.setState({doneQuestionsList: this.state.doneQuestionsList })
                }
            }
        console.log(this.state.doneQuestionsList)
        return quesNo
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    render() {

        const buttonStyle = {color: "white"}
        const questionFontStyle = {fontSize: "2.5em"}
        const questionPanelStyle = {width: "80%", marginLeft : "10%", marginTop: "10px"}
        const imageStyle = {height: "350px", width: "350px"}
        var content;
        const arr = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14]
       
        
        if(this.state.showRules) {
             content = <div>
                            <Panel bsClass="panel">
                                <Panel.Heading bsClass="panel-default panel-heading">
                                    <Panel.Title componentClass="h3">Round 3: Picture Quiz: Rules and Scoring</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body bsClass="panel-body">
                                    <p>1) An image will be displayed, based on that questions will be asked</p>
                                    <p>2) No passing of questions to the next team</p>
                                    <p>3) For each right answer, team gets <b>20 Points</b></p>
                                    <p>3) Wrong answer: <b>-10 Points</b> </p>
                                    <p>6) If the main-team gets the help from bench-team, team gets <b>Half of the above points</b></p>
                                </Panel.Body>
                            </Panel>
                            <button className="btn panel-button" id="startRound1" onClick={this.startRound3}>Start Round 3</button>
                        </div>
        }   
        else {
            content = <div>
                        <Panel bsClass="panel" style={questionPanelStyle}>
                        <Panel.Body bsClass="panel-body">
                        <img src={arr[(this.state.logo)-1]} style={imageStyle}/>   
                            </Panel.Body>
                            <Panel.Body bsClass="panel-body" style={questionFontStyle}>
                                <p>{this.state.question}</p>
                            </Panel.Body>
                        </Panel>
                        <button className="btn panel-button" id="startRound1" onClick={this.nextQuestion} style={buttonStyle}>Next Question</button>
                      </div>
        }
       

   
    return (
        <div className="wrapper">
            <div className="breadcrumb">
                <Breadcrumb>
                    <BreadcrumbItem href="/home">Home</BreadcrumbItem>
                    <BreadcrumbItem href="/round3" active>Round 3</BreadcrumbItem>
                </Breadcrumb>
            </div>
        {content}

        </div>
    );
  }
}

export default Round3;
