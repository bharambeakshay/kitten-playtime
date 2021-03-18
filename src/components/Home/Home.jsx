import React, { useEffect, useState } from 'react'
import './home.css'
import Carpet from "../../images/carpet.png"
import KittenGame from "../../images/kitten game.png"
import Speaker from "../../images/speaker.svg"
import Logout from "../../images/logout.svg"
import background from "../../images/wall.jpg"
import CatBall from './CatBall'
import Catwalk from './Catwalk'

// merge 
import "../../style.css";
import questionAPI from "../question/index";
import QuestionBox from "../QuestionBox";
import Result from "../ResultBox";



const l = "catBall"
// const randomcatball = Math.floor((Math.random() * 3) + 1);
// const randomcatwalk = Math.floor((Math.random() * 6) + 1);


class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            questionBank: [],
            score: 0,
            ans: true,
            responses: 0,
            randomcatball: Math.floor((Math.random() * 3) + 1),
            randomcatwalk: Math.floor((Math.random() * 6) + 1)
        };
    }

    getQuestions = () => {
        questionAPI().then((question) => {
            this.setState({
                questionBank: question,
            });
        });
    };



    componentDidMount() {
        this.getQuestions();
    }

    playAgain = () => {
        this.getQuestions();
        this.setState({
            responses: 0,
        });
    };

    computeAnswer = (answer, correct) => {
        if (answer === correct) {
            this.setState({
                score: this.state.score + 1,

            });
        }

        this.setState({
            responses: this.state.responses < 5 ? this.state.responses + 1 : 5,
        });
    };

    correctAnswer = (answer, correct) => {
        if (answer === correct) {
            this.setState({
                ans: this.state.ans,
                randomcatball: Math.floor((Math.random() * 3) + 1),
                randomcatwalk: Math.floor((Math.random() * 6) + 1)
            });
        }
        else {
            this.setState({
                ans: !this.state.ans,
                randomcatball: Math.floor((Math.random() * 3) + 1),
                randomcatwalk: Math.floor((Math.random() * 6) + 1)
            });
        }
    };




    render() {
        return (
            <React.Fragment>
                <div className="card container">
                    <div className="card-body kitten-card-body">
                        <div className="room  row" >
                            <img className="room1 col-12" src={background} alt="back" />

                            <div className="carpet-div">
                                <img className="carpet" src={Carpet} alt="carpet" />
                            </div>
                            <div className="mainContent" >
                                {this.state.questionBank.length > 0 &&
                                    this.state.responses < 5 &&
                                    this.state.questionBank.map(
                                        ({ question, answers, correct, questionId }) => (
                                            <QuestionBox
                                                question={question}
                                                options={answers}
                                                key={questionId}
                                                selected={(answer) => this.computeAnswer(answer, correct)}
                                                corrected={(answer) => this.correctAnswer(answer, correct)}
                                                playAgain={this.playAgain}
                                            />
                                        )
                                    )}

                                {this.state.responses === 1 ? (
                                    <Result ans={this.state.ans} playAgain={this.playAgain} />
                                ) : null}
                                {/* <div className="cat-image-logo">
                            <img src={KittenGame} alt="game logo" style={{ height: "150px", width: "150px" }} />
                        </div> */}
                            </div>
                            <button className="speaker"><img src={Speaker} style={{ width: "20px", height: "20px" }} /></button>
                            <button className="exit"><img src={Logout} style={{ width: "20px", height: "20px" }} /></button>
                            <div className="stars">
                                <div><h2 className="score-board-home">Your Score: {this.state.score.toString()}</h2></div>
                            </div>
                            <div className="flex1">
                                <CatBall count={this.state.randomcatball} />
                            </div>
                            <div className="flex2">
                                <Catwalk count={this.state.randomcatwalk} />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }

}

export default Home;
