import React, { Component } from 'react';
import logo from './exp_logo.png';
import {Breadcrumb, BreadcrumbItem, Row, Panel} from 'react-bootstrap';
import './App.css';
import data from './Questions/5.json';


class Round5 extends Component {

  
    constructor(props){
        super(props);
        this.startIndia = this.startIndia.bind(this);
        this.startLogos = this.startLogos.bind(this);
        this.startExpedia = this.startExpedia.bind(this);
        this.startHollywood = this.startHollywood.bind(this);
        this.startTech = this.startTech.bind(this);
        this.startFriends = this.startFriends.bind(this);
        this.startCricket = this.startCricket.bind(this);
        this.startFootball = this.startFootball.bind(this);

        this.startGot = this.startGot.bind(this);
        this.startAds = this.startAds.bind(this);
        this.startSports = this.startSports.bind(this);
        this.startGeography = this.startGeography.bind(this);
        this.startPolitics = this.startPolitics.bind(this);
        this.startMaths = this.startMaths.bind(this);
        this.startBollywood = this.startBollywood.bind(this);
        this.startCars = this.startCars.bind(this);
        this.startAnimals = this.startAnimals.bind(this);


        this.nextQuestion = this.nextQuestion.bind(this);
        this.getLine = this.getLine.bind(this);
        this.getColor = this.getColor.bind(this);
        this.state = {
           showRules: true,
           question: "",
           doneQuestionsList: [],
           error: "Oops!! Round 5 questions are exhausted!!",
           chosenOption: "",
           buttonText: "Next Question",
           questionNo: 1,
           doneOptions: []

           
        };
    }
   
    resetToDefaults() {
        this.setState({isCorrectAns: false});
        this.setState({isWrongAns: false});
        this.setState({selected: ""});
    }

    startIndia(e) {
        e.preventDefault();
        this.setState({showRules: false});
        this.setState({chosenOption: "India"});
        var questions = data["India"];
        this.setState({question: questions[(this.state.questionNo).toString()]})
        var quesNo = this.state.questionNo + 1;
        this.setState({questionNo: quesNo});
    }

    startLogos(e) {
        e.preventDefault();
        this.setState({showRules: false});
        this.setState({chosenOption: "Logos"});
        var questions = data["Logos"];
        this.setState({question: questions[(this.state.questionNo).toString()]})
        var quesNo = this.state.questionNo + 1;
        this.setState({questionNo: quesNo});
    }

    startExpedia(e) {
        e.preventDefault();
        this.setState({showRules: false});
        this.setState({chosenOption: "Expedia"});
        var questions = data["Expedia"];
        this.setState({question: questions[(this.state.questionNo).toString()]})
        var quesNo = this.state.questionNo + 1;
        this.setState({questionNo: quesNo});
    }

    startHollywood(e) {
        e.preventDefault();
        this.setState({showRules: false});
        this.setState({chosenOption: "Hollywood"});
        var questions = data["Hollywood"];
        this.setState({question: questions[(this.state.questionNo).toString()]})
        var quesNo = this.state.questionNo + 1;
        this.setState({questionNo: quesNo});
    }

    startTech(e) {
        e.preventDefault();
        this.setState({showRules: false});
        this.setState({chosenOption: "Tech"});
        var questions = data["Tech"];
        this.setState({question: questions[(this.state.questionNo).toString()]})
        var quesNo = this.state.questionNo + 1;
        this.setState({questionNo: quesNo});
    }

    startFriends(e) {
        e.preventDefault();
        this.setState({showRules: false});
        this.setState({chosenOption: "Friends"});
        var questions = data["Friends"];
        this.setState({question: questions[(this.state.questionNo).toString()]})
        var quesNo = this.state.questionNo + 1;
        this.setState({questionNo: quesNo});
    }

    startCricket(e) {
        e.preventDefault();
        this.setState({showRules: false});
        this.setState({chosenOption: "Cricket"});
        var questions = data["Cricket"];
        this.setState({question: questions[(this.state.questionNo).toString()]})
        var quesNo = this.state.questionNo + 1;
        this.setState({questionNo: quesNo});
    }

    startFootball(e) {
        e.preventDefault();
        this.setState({showRules: false});
        this.setState({chosenOption: "Football"});
        var questions = data["Football"];
        this.setState({question: questions[(this.state.questionNo).toString()]})
        var quesNo = this.state.questionNo + 1;
        this.setState({questionNo: quesNo});
    }

    startGot(e) {
        e.preventDefault();
        this.setState({showRules: false});
        this.setState({chosenOption: "Got"});
        var questions = data["Got"];
        this.setState({question: questions[(this.state.questionNo).toString()]})
        var quesNo = this.state.questionNo + 1;
        this.setState({questionNo: quesNo});
    }

    startAds(e) {
        e.preventDefault();
        this.setState({showRules: false});
        this.setState({chosenOption: "Ads"});
        var questions = data["Ads"];
        this.setState({question: questions[(this.state.questionNo).toString()]})
        var quesNo = this.state.questionNo + 1;
        this.setState({questionNo: quesNo});
    }

    startSports(e) {
        e.preventDefault();
        this.setState({showRules: false});
        this.setState({chosenOption: "Sports"});
        var questions = data["Sports"];
        this.setState({question: questions[(this.state.questionNo).toString()]})
        var quesNo = this.state.questionNo + 1;
        this.setState({questionNo: quesNo});
    }

    startGeography(e) {
        e.preventDefault();
        this.setState({showRules: false});
        this.setState({chosenOption: "Geography"});
        var questions = data["Geography"];
        this.setState({question: questions[(this.state.questionNo).toString()]})
        var quesNo = this.state.questionNo + 1;
        this.setState({questionNo: quesNo});
    }

    startPolitics(e) {
        e.preventDefault();
        this.setState({showRules: false});
        this.setState({chosenOption: "Politics"});
        var questions = data["Politics"];
        this.setState({question: questions[(this.state.questionNo).toString()]})
        var quesNo = this.state.questionNo + 1;
        this.setState({questionNo: quesNo});
    }

    startMaths(e) {
        e.preventDefault();
        this.setState({showRules: false});
        this.setState({chosenOption: "Maths"});
        var questions = data["Maths"];
        this.setState({question: questions[(this.state.questionNo).toString()]})
        var quesNo = this.state.questionNo + 1;
        this.setState({questionNo: quesNo});
    }

    startBollywood(e) {
        e.preventDefault();
        this.setState({showRules: false});
        this.setState({chosenOption: "Bollywood"});
        var questions = data["Bollywood"];
        this.setState({question: questions[(this.state.questionNo).toString()]})
        var quesNo = this.state.questionNo + 1;
        this.setState({questionNo: quesNo});
    }

    startCars(e) {
        e.preventDefault();
        this.setState({showRules: false});
        this.setState({chosenOption: "Cars"});
        var questions = data["Cars"];
        this.setState({question: questions[(this.state.questionNo).toString()]})
        var quesNo = this.state.questionNo + 1;
        this.setState({questionNo: quesNo});
    }

    startAnimals(e) {
        e.preventDefault();
        this.setState({showRules: false});
        this.setState({chosenOption: "Animals"});
        var questions = data["Animals"];
        this.setState({question: questions[(this.state.questionNo).toString()]})
        var quesNo = this.state.questionNo + 1;
        this.setState({questionNo: quesNo});
    }



    nextQuestion(e) {
        e.preventDefault();
        console.log("hello");
       

        if(this.state.questionNo == 4) {
            this.setState({showRules: true});
            this.setState({questionNo: 1});
            this.setState({buttonText: "Next Question"});
            this.state.doneOptions.push(this.state.chosenOption);
            this.setState({doneOptions: this.state.doneOptions })
            return;
            
        }

        if(this.state.questionNo == 3) {
            this.setState({buttonText: "Back To Menu"});
        }

       
        var option = data[this.state.chosenOption];
        this.setState({question: option[(this.state.questionNo).toString()]})
        var quesNo = this.state.questionNo + 1;
        this.setState({questionNo: quesNo});

}

getLine(option) {
    if(this.state.chosenOption == option || this.state.doneOptions.indexOf(option) > -1) {
        return "line-through"
    }
    else {
        return "none"
    }
}

getColor(option) {
    if(this.state.chosenOption == option || this.state.doneOptions.indexOf(option) > -1) {
        return "#540B0E"
    }
    else {
        return "#9E2A2B"
    }
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
        const panelStyle = {marginTop: "10px"}
        const rowStyle = {marginTop: "10px"}
        var content;
        
        if(this.state.showRules) {
             content = <div>

                 <Panel bsClass="panel" style={panelStyle}>
                                <Panel.Heading bsClass="panel-default panel-heading">
                                    <Panel.Title componentClass="h3">Round 5 : Rules and Scoring</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body bsClass="panel-body">
                                    <p>1) Choose a domain of your interest</p>
                                    <p>2) 3 questions will be asked based on the domain choosen</p>
                                    <p>3) For each right answer, team gets <b>20 Points</b></p>
                                    <p>4) No negative for not answering/wrong answer and no passing of question to next round</p>
                                </Panel.Body>
                            </Panel>
                           
           
                            <Row style={rowStyle}>

            
<button className="btn btn-2 btn-2b" style={{color: "white", padding: "20px 50px", textDecoration: this.getLine("India"), backgroundColor: this.getColor("India")}} onClick={(e) => this.startIndia(e)}>India</button>
<button className="btn btn-2 btn-2b" style={{color: "white", padding: "20px 50px", textDecoration: this.getLine("Logos"), backgroundColor: this.getColor("Logos")}} onClick={(e) => this.startLogos(e)}>Logos</button>
<button className="btn btn-2 btn-2b" style={{color: "white", padding: "20px 50px", textDecoration: this.getLine("Expedia"), backgroundColor: this.getColor("Expedia")}} onClick={(e) => this.startExpedia(e)}>Expedia</button>
<button className="btn btn-2 btn-2b" style={{color: "white", padding: "20px 50px", textDecoration: this.getLine("Hollywood"), backgroundColor: this.getColor("Hollywood")}} onClick={(e) => this.startHollywood(e)}>Hollywood</button>
<button className="btn btn-2 btn-2b" style={{color: "white", padding: "20px 50px", textDecoration: this.getLine("Tech"), backgroundColor: this.getColor("Tech")}} onClick={(e) => this.startTech(e)}>Technology</button>


            
<button className="btn btn-2 btn-2b" style={{color: "white", padding: "20px 50px", textDecoration: this.getLine("Friends"), backgroundColor: this.getColor("Friends")}} onClick={(e) => this.startFriends(e)}>Friends</button>
<button className="btn btn-2 btn-2b" style={{color: "white", padding: "20px 50px", textDecoration: this.getLine("Cricket"), backgroundColor: this.getColor("Cricket")}} onClick={(e) => this.startCricket(e)}>Cricket</button>
<button className="btn btn-2 btn-2b" style={{color: "white", padding: "20px 50px", textDecoration: this.getLine("Football"), backgroundColor: this.getColor("Football")}} onClick={(e) => this.startFootball(e)}>Football</button>
<button className="btn btn-2 btn-2b" style={{color: "white", padding: "20px 50px", textDecoration: this.getLine("Got"), backgroundColor: this.getColor("Got")}} onClick={(e) => this.startGot(e)}>Game of Thrones</button>

            
<button className="btn btn-2 btn-2b" style={{color: "white", padding: "20px 50px", textDecoration: this.getLine("Ads"), backgroundColor: this.getColor("Ads")}} onClick={(e) => this.startAds(e)}>Indian Ads</button>
<button className="btn btn-2 btn-2b" style={{color: "white", padding: "20px 50px", textDecoration: this.getLine("Sports"), backgroundColor: this.getColor("Sports")}} onClick={(e) => this.startSports(e)}>Sports</button>
<button className="btn btn-2 btn-2b" style={{color: "white", padding: "20px 50px", textDecoration: this.getLine("Geography"), backgroundColor: this.getColor("Geography")}} onClick={(e) => this.startGeography(e)}>Geography</button>
<button className="btn btn-2 btn-2b" style={{color: "white", padding: "20px 50px", textDecoration: this.getLine("Politics"), backgroundColor: this.getColor("Politics")}} onClick={(e) => this.startPolitics(e)}>Indian Politics</button>



            
<button className="btn btn-2 btn-2b" style={{color: "white", padding: "20px 50px", textDecoration: this.getLine("Maths"), backgroundColor: this.getColor("Maths")}} onClick={(e) => this.startMaths(e)}>Maths</button>
<button className="btn btn-2 btn-2b" style={{color: "white", padding: "20px 50px", textDecoration: this.getLine("Bollywood"), backgroundColor: this.getColor("Bollywood")}} onClick={(e) => this.startBollywood(e)}>Bollywood</button>
<button className="btn btn-2 btn-2b" style={{color: "white", padding: "20px 50px", textDecoration: this.getLine("Cars"), backgroundColor: this.getColor("Cars")}} onClick={(e) => this.startCars(e)}>Cars</button>
<button className="btn btn-2 btn-2b" style={{color: "white", padding: "20px 50px", textDecoration: this.getLine("Animals"), backgroundColor: this.getColor("Animals")}} onClick={(e) => this.startAnimals(e)}>Animals</button>
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
                        
                        <button className="btn panel-button" onClick={(e) => this.nextQuestion(e)} style={buttonStyle}>{this.state.buttonText}</button>
                      </div>
        }
       

   
    return (
        <div className="wrapper">
            <div className="breadcrumb">
                <Breadcrumb>
                    <BreadcrumbItem href="/home">Home</BreadcrumbItem>
                    <BreadcrumbItem href="#" active>Round 5</BreadcrumbItem>
                </Breadcrumb>
            </div>
        {content}
       

        </div>
    );
  }
}

export default Round5;
