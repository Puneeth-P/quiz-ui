import React, { Component } from 'react';
import logo from './exp_logo.png';
import {Breadcrumb, BreadcrumbItem, Row, Panel} from 'react-bootstrap';
import './App.css';
import data from './Questions/2.json';


class Round2 extends Component {

    constructor(props){
        super(props);
        this.startRound2 = this.startRound2.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
        this.getQuesNo = this.getQuesNo.bind(this);
        this.checkAns = this.checkAns.bind(this);
        this.resetToDefaults = this.resetToDefaults.bind(this);
        this.eliminateOptions = this.eliminateOptions.bind(this);
        this.display = this.display.bind(this);
        this.state = {
           showRules: true,
           question: "",
           doneQuestionsList: [],
           min: 1,
           max: 12,
           error: "Oops!! Round 2 questions are exhausted!!",
           optionA: "",
           optionB: "",
           optionC: "",
           optionD: "",
           ans: "",
           option50: "",
           isCorrectAns: false,
           isWrongAns: false,
           selected: "",
            lifeLineSelected: false
           
        };
    }

    resetToDefaults() {
        this.setState({isCorrectAns: false});
        this.setState({isWrongAns: false});
        this.setState({selected: ""});
    }
   
   
    startRound2() {
        this.setState({showRules: false});
        var questionNo = (this.getQuesNo(this.state.min, this.state.max)).toString();
        console.log(questionNo);
        var ques = data[questionNo];
        console.log(ques);
        this.setState({question: ques["q"]})
        this.setState({optionA: ques["a"]})
        this.setState({optionB: ques["b"]})
        this.setState({optionC: ques["c"]})
        this.setState({optionD: ques["d"]})
        this.setState({ans: ques["s"]})
        this.setState({option50: ques["50-50"]})
    }

    nextQuestion() {
        var questionNo = this.getQuesNo(this.state.min, this.state.max);
        if(questionNo != undefined) {
            questionNo = questionNo.toString();
            console.log(questionNo);
            var ques = data[questionNo];
            console.log(ques);
            this.setState({question: ques["q"]})
            this.setState({optionA: ques["a"]})
            this.setState({optionB: ques["b"]})
            this.setState({optionC: ques["c"]})
            this.setState({optionD: ques["d"]})
            this.setState({ans: ques["s"]})
            this.setState({option50: ques["50-50"]})
        }
        else {
            this.setState({ question: this.state.error });
    }
    console.log(questionNo)
}
    
    getQuesNo(min, max) {
        this.resetToDefaults();
        this.setState({lifeLineSelected: false});
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

    checkAns(optionChosed) {
        this.resetToDefaults();
        console.log(optionChosed);
        this.setState({selected: optionChosed})
        if(optionChosed == this.state.ans) {
            this.setState({isCorrectAns: true})
        }
        else {
            this.setState({isWrongAns: true})
        }
    }
    getColor(optionNum) {

        if((optionNum == this.state.selected && this.state.isCorrectAns) || (optionNum == this.state.ans && this.state.isWrongAns)) {
            return "green";
        }
        else if(optionNum == this.state.selected && this.state.isWrongAns) {
            return "red";
        }
        else {
            return "#9E2A2B"
        }
    }

    eliminateOptions() {
        this.setState({lifeLineSelected: true});
    }

    display(optionNum) {

        if(!this.state.lifeLineSelected) {
            return "inline-block"
        }
        else {
            if((optionNum == this.state.ans) || (optionNum == this.state.option50)) {
                return "inline-block"
            }
            else {
                return "none"
            }
        }
}

    

    
  
    render() {

        const buttonStyle = {color: "white"}
        const questionFontStyle = {fontSize: "2.5em"}
        const questionPanelStyle = {width: "80%", marginLeft : "10%"}
        const rowStyle= {marginTop: "1em"} 
        const roundBtnStyle = {color: "white", outline: "0"}
        var content;
        
        if(this.state.showRules) {
             content = <div>
                            <Panel bsClass="panel">
                                <Panel.Heading bsClass="panel-default panel-heading">
                                    <Panel.Title componentClass="h3">Round 2 : Rules and Scoring</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body bsClass="panel-body">
                                    <p>1) Each question will have 4 options, 1 will be correct</p>
                                    <p>2) For each right answer, team gets <b>20 Points</b></p>
                                    <p>3) Wrong answer : <b>-5 Points</b> </p>
                                    <p>4) There is a 50-50 option, where 2 incorrect options will be eliminated</p>
                                    <p>5) Giving correct answer using 50-50 fetches <b>10 Points</b></p>
                                    <p>6) Giving wrong answer using 50-50, the team loses <b>-10 Points</b></p>
                                    <p>7) If the main-team gets the help from bench-team, team gets <b>Half of the above points</b></p>
                                </Panel.Body>
                            </Panel>
                            <button className="btn panel-button" id="startRound1" onClick={this.startRound2}>Start Round 2</button>
                        </div>
        }   
        else {
            content = <div>
                        <Panel bsClass="panel" style={questionPanelStyle}>
                            <Panel.Body bsClass="panel-body" style={questionFontStyle}>
                                <p>{this.state.question}</p>
                            </Panel.Body>
                        </Panel>
                        <Row style={rowStyle}>
            
            <button className="btn btn-2 btn-2b" style={{width: "35%", color: "white", backgroundColor: this.getColor("a"), display: this.display("a")}} onClick={(e) => this.checkAns("a")}>{this.state.optionA}</button>
            <button className="btn btn-2 btn-2b" style={{width: "35%", color: "white", backgroundColor: this.getColor("b"), display: this.display("b")}} onClick={(e) => this.checkAns("b")}>{this.state.optionB}</button>
           
          </Row>
           
            <Row style={rowStyle}>
            <button className="btn btn-2 btn-2b" style={{width:"35%", color: "white", backgroundColor: this.getColor("c"),  display: this.display("c")}} onClick={(e) => this.checkAns("c")}>{this.state.optionC}</button>
            <button className="btn btn-2 btn-2b" style={{width: "35%", color: "white", backgroundColor: this.getColor("d"),  display: this.display("d")}} onClick={(e) => this.checkAns("d")}>{this.state.optionD}</button>
           
       
            </Row>

 <Row>
            <button className="btn btn-2 btn-2i" style={roundBtnStyle} id="50-50" onClick={this.eliminateOptions}>50-50</button>
			<button className="btn btn-2 btn-2i" style={roundBtnStyle} id="next-mcq" onClick={this.nextQuestion}>Next</button>
            </Row>
                      </div>
        }
       

   
    return (
        <div className="wrapper">
            <div className="breadcrumb">
                <Breadcrumb>
                    <BreadcrumbItem href="/home">Home</BreadcrumbItem>
                    <BreadcrumbItem href="/round2" active>Round 2</BreadcrumbItem>
                </Breadcrumb>
            </div>
            {content}

        </div>
    );
  }
  
   
}

export default Round2;
