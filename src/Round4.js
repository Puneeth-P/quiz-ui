import React, { Component } from 'react';
import logo from './exp_logo.png';
import {Breadcrumb, BreadcrumbItem, Row, Panel} from 'react-bootstrap';
import './App.css';
import data from './Questions/4.json';


class Round4 extends Component {

  
    constructor(props){
        super(props);
        this.startRound4 = this.startRound4.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
        this.getQuesNo = this.getQuesNo.bind(this);
        this.state = {
           showRules: true,
           question: "",
           doneQuestionsList: [],
           min: 1,
           max: 10,
           error: "Oops!! Round 4 questions are exhausted!!"
           
        };
    }
   
   
    startRound4() {
        this.setState({showRules: false});
        var questionNo = (this.getQuesNo(this.state.min, this.state.max)).toString();
        console.log(questionNo);
        this.setState({question: data[questionNo]})
    }

    nextQuestion() {
        var questionNo = this.getQuesNo(this.state.min, this.state.max);
        if(questionNo != undefined) {
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

        const buttonStyle = {color: "white",  outline:0}
        const questionFontStyle = {fontSize: "2.5em"}
        const questionPanelStyle = {width: "80%", marginLeft : "10%"}
        var content;
        
        if(this.state.showRules) {
             content = <div>
                            <Panel bsClass="panel">
                                <Panel.Heading bsClass="panel-default panel-heading">
                                    <Panel.Title componentClass="h3">Round 4 : Rules and Scoring</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body bsClass="panel-body">
                                    <p>1) Brain Teasers, no options</p>
                                    <p>2) For each right answer, team gets <b>20 Points</b></p>
                                    <p>3) No negative for not answering/wrong answer and no passing of question to next round</p>
                                </Panel.Body>
                            </Panel>
                            <button className="btn panel-button" id="startRound1" onClick={this.startRound4}>Start Round 4</button>
                        </div>
        }   
        else {
            content = <div>
                        <Panel bsClass="panel" style={questionPanelStyle}>
                            <Panel.Body bsClass="panel-body" style={questionFontStyle}>
                                <p>{this.state.question}</p>
                            </Panel.Body>
                        </Panel>
                        <button className="btn panel-button" id="startRound4" onClick={this.nextQuestion} style={buttonStyle}>Next Question</button>
                      </div>
        }
       

   
    return (
        <div className="wrapper">
            <div className="breadcrumb">
                <Breadcrumb>
                    <BreadcrumbItem href="/home">Home</BreadcrumbItem>
                    <BreadcrumbItem href="/round4" active>Round 4</BreadcrumbItem>
                </Breadcrumb>
            </div>
        {content}

        </div>
    );
  }
}

export default Round4;
