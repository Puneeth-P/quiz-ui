import React, { Component } from 'react';
import logo from './exp_logo.png';
import {Breadcrumb, BreadcrumbItem, Row, Panel} from 'react-bootstrap';
import './App.css';
import data from './Questions/6.json';


class Round6 extends Component {

  
    constructor(props){
        super(props);
        this.start10Pointer = this.start10Pointer.bind(this);
        this.start20Pointer = this.start20Pointer.bind(this);
        this.start40Pointer = this.start40Pointer.bind(this);
        this.getColor = this.getColor.bind(this);
        this.checkAns = this.checkAns.bind(this);
        this.get10QuesNo = this.get10QuesNo.bind(this);
        this.get20QuesNo = this.get20QuesNo.bind(this);
        this.get40QuesNo = this.get40QuesNo.bind(this);
        this.back = this.back.bind(this);
        this.resetToDefaults = this.resetToDefaults.bind(this);
       


      
       
        this.state = {
           showRules: true,
           question: "",
           chosenOption: "",
           buttonText: "Next Question",
          
           done10Pointers: [],
           done20Pointers: [],
           done40Pointers: [],
           min: 1,
           max: 19,
           error: "Oops!! Round 6 questions are exhausted!!",
           optionA: "",
           optionB: "",
           optionC: "",
           optionD: "",
           ans: "",
           option50: "",
           isCorrectAns: false,
           isWrongAns: false,
           selected: "",

           
        };
    }
   
    getColor(optionNum) {

        if((optionNum == this.state.selected && this.state.isCorrectAns) || (optionNum == this.state.ans && this.state.isWrongAns)) {
            return "green";
        }
        else if(optionNum == this.state.selected && this.state.isWrongAns) {
            return "orange";
        }
        else {
            return "#9E2A2B"
        }
    }


    back() {
        this.setState({showRules: true});
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

    resetToDefaults() {
        this.setState({isCorrectAns: false});
        this.setState({isWrongAns: false});
        this.setState({selected: ""});
    }

    start10Pointer(e) {
        this.resetToDefaults();
        this.setState({showRules: false});
        var questionNo = (this.get10QuesNo(this.state.min, this.state.max));

        if(questionNo == undefined) {
            this.setState({ question: this.state.error });
            return;
        }
        questionNo = questionNo.toString();
        console.log(questionNo);
        var questions = data["10"];
        var ques = questions[questionNo];
        console.log(ques);
        this.setState({question: ques["q"]})
        this.setState({optionA: ques["a"]})
        this.setState({optionB: ques["b"]})
        this.setState({optionC: ques["c"]})
        this.setState({optionD: ques["d"]})
        this.setState({ans: ques["s"]})
        
    }

    start20Pointer(e) {
        this.resetToDefaults();
        this.setState({showRules: false});
        var questionNo = (this.get20QuesNo(this.state.min, this.state.max));

        if(questionNo == undefined) {
            this.setState({ question: this.state.error });
            return;
        }
        questionNo = questionNo.toString();
        console.log(questionNo);
        var questions = data["20"];
        var ques = questions[questionNo];
        console.log(ques);
        this.setState({question: ques["q"]})
        this.setState({optionA: ques["a"]})
        this.setState({optionB: ques["b"]})
        this.setState({optionC: ques["c"]})
        this.setState({optionD: ques["d"]})
        this.setState({ans: ques["s"]})
    }

    start40Pointer(e) {
        this.resetToDefaults();
        this.setState({showRules: false});
        var questionNo = (this.get40QuesNo(this.state.min, this.state.max));

        if(questionNo == undefined) {
            this.setState({ question: this.state.error });
            return;
        }

        questionNo = questionNo.toString();
        console.log(questionNo);
        var questions = data["40"];
        var ques = questions[questionNo];
        console.log(ques);
        this.setState({question: ques["q"]})
        this.setState({optionA: ques["a"]})
        this.setState({optionB: ques["b"]})
        this.setState({optionC: ques["c"]})
        this.setState({optionD: ques["d"]})
        this.setState({ans: ques["s"]})
    }


    
    get10QuesNo(min, max) {
        var quesNo;
        if(this.state.done10Pointers.length == 0) {
            quesNo = this.getRandomInt(min,max);
            this.state.done10Pointers.push(quesNo);
            this.setState({done10Pointers: this.state.done10Pointers })
        }
        else {
                if(!(this.state.done10Pointers.length == (max - min + 1))) {
                    quesNo = this.getRandomInt(min,max);
                    while(this.state.done10Pointers.indexOf(quesNo) > -1) {
                        quesNo = this.getRandomInt(min,max);
                    }   
                    this.state.done10Pointers.push(quesNo);
                    this.setState({done10Pointers: this.state.done10Pointers })
                }
            }
        console.log(this.state.done10Pointers)
        return quesNo
    }

    get20QuesNo(min, max) {
        var quesNo;
        if(this.state.done20Pointers.length == 0) {
            quesNo = this.getRandomInt(min,max);
            this.state.done20Pointers.push(quesNo);
            this.setState({done20Pointers: this.state.done20Pointers })
        }
        else {
                if(!(this.state.done20Pointers.length == (max - min + 1))) {
                    quesNo = this.getRandomInt(min,max);
                    while(this.state.done20Pointers.indexOf(quesNo) > -1) {
                        quesNo = this.getRandomInt(min,max);
                    }   
                    this.state.done20Pointers.push(quesNo);
                    this.setState({done20Pointers: this.state.done20Pointers })
                }
            }
        console.log(this.state.done20Pointers)
        return quesNo
    }

    get40QuesNo(min, max) {
        var quesNo;
        if(this.state.done40Pointers.length == 0) {
            quesNo = this.getRandomInt(min,max);
            this.state.done40Pointers.push(quesNo);
            this.setState({done40Pointers: this.state.done40Pointers })
        }
        else {
                if(!(this.state.done40Pointers.length == (max - min + 1))) {
                    quesNo = this.getRandomInt(min,max);
                    while(this.state.done40Pointers.indexOf(quesNo) > -1) {
                        quesNo = this.getRandomInt(min,max);
                    }   
                    this.state.done40Pointers.push(quesNo);
                    this.setState({done40Pointers: this.state.done40Pointers })
                }
            }
        console.log(this.state.done40Pointers)
        return quesNo
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    render() {

        const buttonStyle = {color: "white"}
        const questionFontStyle = {fontSize: "2.5em"}
        const questionPanelStyle = {width: "80%", marginLeft : "10%"}
        const panelStyle = {marginTop: "10px"}
        const rowStyle = {marginTop: "10px"}
        const roundBtnStyle = {color: "white", outline: "0"}
        var content;
        
        if(this.state.showRules) {
             content = <div>

                 <Panel bsClass="panel" style={panelStyle}>
                                <Panel.Heading bsClass="panel-default panel-heading">
                                    <Panel.Title componentClass="h3">Round 6 : Rules and Scoring</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body bsClass="panel-body">
                                    <p>1) Choose the pointer of your interest</p>
                                    <p>2) 10 pointer: Right ans: 10 points, Wrong-ans: -5 points</p>
                                    <p>3) 20 pointer: Right ans: 20 points, Wrong-ans: -10 points</p>
                                    <p>4) 40 pointer: Right ans: 40 points, Wrong-ans: -20 points</p>
                                </Panel.Body>
                            </Panel>
                           
           
                            <Row style={rowStyle}>

            
<button className="btn btn-2 btn-2b" style={{color: "white", padding: "20px 50px"}} onClick={(e) => this.start10Pointer(e)}>10 pointer</button>
<button className="btn btn-2 btn-2b" style={{color: "white", padding: "20px 50px", }} onClick={(e) => this.start20Pointer(e)}>20 pointer</button>
<button className="btn btn-2 btn-2b" style={{color: "white", padding: "20px 50px", }} onClick={(e) => this.start40Pointer(e)}>40 pointer</button>

</Row>
           
           
         
           
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

<button className="btn btn-2 btn-2b" style={{width: "35%", color: "white", fontSize: "1.2em", textTransform: "none", backgroundColor: this.getColor("a")}} onClick={(e) => this.checkAns("a")}>{this.state.optionA}</button>
<button className="btn btn-2 btn-2b" style={{width: "35%", color: "white", fontSize: "1.2em", textTransform: "none", backgroundColor: this.getColor("b")}} onClick={(e) => this.checkAns("b")}>{this.state.optionB}</button>

</Row>

<Row style={rowStyle}>
<button className="btn btn-2 btn-2b" style={{width:"35%", color: "white", fontSize: "1.2em",  textTransform: "none", backgroundColor: this.getColor("c")}} onClick={(e) => this.checkAns("c")}>{this.state.optionC}</button>
<button className="btn btn-2 btn-2b" style={{width: "35%", color: "white", fontSize: "1.2em", textTransform: "none", backgroundColor: this.getColor("d")}} onClick={(e) => this.checkAns("d")}>{this.state.optionD}</button>


</Row>

<Row>
<button className="btn btn-2 btn-2i" style={roundBtnStyle} id="next-mcq" onClick={this.back}>Back</button>
</Row>
          </div>
        }
       

   
    return (
        <div className="wrapper">
            <div className="breadcrumb">
                <Breadcrumb>
                    <BreadcrumbItem href="/home">Home</BreadcrumbItem>
                    <BreadcrumbItem href="#" active>Round 6</BreadcrumbItem>
                </Breadcrumb>
            </div>
        {content}
       

        </div>
    );
  }
}

export default Round6;
