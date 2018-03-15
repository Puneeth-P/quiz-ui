import React, { Component } from 'react';
import {Breadcrumb, BreadcrumbItem, Panel} from 'react-bootstrap';
import './App.css';
import data from './Questions/1.json';


class Round1 extends Component {

    constructor(props){
        super(props);
        this.startRound1 = this.startRound1.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
        this.getQuesNo = this.getQuesNo.bind(this);
        this.state = {
           showRules: true,
           question: "",
           doneQuestionsList: [],
           min: 1,
           max: 20,
           error: "Oops!! Round 1 questions are exhausted!!"
           
        };
    }
   
   
    startRound1() {
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

        const buttonStyle = {color: "white"}
        const questionFontStyle = {fontSize: "2.5em"}
        const questionPanelStyle = {width: "80%", marginLeft : "10%"}
        var content;
        
        if(this.state.showRules) {
             content = <div>
                            <Panel bsClass="panel">
                                <Panel.Heading bsClass="panel-default panel-heading">
                                    <Panel.Title componentClass="h3">Round 1 : Rules and Scoring</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body bsClass="panel-body">
                                    <p>1) Simple questions, no options</p>
                                    <p>2) If one team doesn't know the answer/gives wrong answer, the question is passed to next team</p>
                                    <p>3) For each right answer, team gets <b>20 Points</b></p>
                                    <p>4) No negative for not answering/wrong answer</p>
                                    <p>5) For right answer of the passed question, team gets <b>10 Points</b></p>
                                </Panel.Body>
                            </Panel>
                            <button className="btn panel-button" id="startRound1" onClick={this.startRound1}>Start Round 1</button>
                        </div>
        }   
        else {
            content = <div>
                        <Panel bsClass="panel" style={questionPanelStyle}>
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
                    <BreadcrumbItem href="/round1" active>Round 1</BreadcrumbItem>
                </Breadcrumb>
            </div>
        {content}

        </div>
    );
  }
}



export default Round1;
