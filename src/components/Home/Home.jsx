import React from "react";
import "./home.css";
import Carpet from "../../images/carpet.png";
import Speaker from "../../images/speaker.svg";
import Logout from "../../images/logout.svg";
import background from "../../images/wall.jpg";
import CatBall from "./CatBall";
import Catwalk from "./Catwalk";

// merge
import "../../style.css";
import questionAPI from "../question/index";
import QuestionBox from "../QuestionBox";
import Result from "../ResultBox";

const l = "catBall";
const randomcatball = Math.floor(Math.random() * 3 + 1);
const randomcatwalk = Math.floor(Math.random() * 6 + 1);
const numberArrays = [
    "ZERO",
    "ONE",
    "TWO",
    "THREE",
    "FOUR",
    "FIVE",
    "SIX",
    "SEVEN",
    "EIGHT",
    "NINE",
];

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            questionBank: [],
            score: 0,
            ans: true,
            responses: 0,
            randomcatball: randomcatball,
            randomcatwalk: randomcatwalk,
            question: `${numberArrays[randomcatball]} kittens are playing and ${numberArrays[randomcatwalk]} more joins`,
            answer: randomcatball + randomcatwalk,
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
        let rand1 = Math.floor(Math.random() * 3 + 1);
        let rand2 = Math.floor(Math.random() * 6 + 1);
        this.getQuestions();
        this.setState({
            responses: 0,
            randomcatball: rand1,
            randomcatwalk: rand2,
            question: `${numberArrays[rand1]} kittens are playing and ${numberArrays[rand2]} more joins`,
            answer: rand1 + rand2,
        });
    };

    computeAnswer = (answer, correct) => {
        if (answer === correct) {
            this.setState({
                ...this.state,
                score: this.state.score + 1,
            });
            console.log("score", this.state.score);
        }

        this.setState({
            responses: this.state.responses < 5 ? this.state.responses + 1 : 5,
        });
    };

    correctAnswer = (answer, correct) => {
        let rand1 = Math.floor(Math.random() * 3 + 1);
        let rand2 = Math.floor(Math.random() * 6 + 1);

        if (answer === correct) {
            this.setState({
                ans: this.state.ans,

                randomcatball: rand1,
                randomcatwalk: rand2,

                question: `${numberArrays[rand1]} kittens are playing and ${numberArrays[rand2]} more joins`,
            });
        } else {
            this.setState({
                ans: !this.state.ans,
                randomcatball: rand1,
                randomcatwalk: rand2,
                question: `${numberArrays[rand1]} kittens are playing and ${numberArrays[rand2]} more joins`,
            });
        }
    };
    checkAnswers = (answer) => {
        this.setState({
            ...this.state,
            ans: this.state.answer == answer,
            responses: 1,
            score: this.state.score + 1,

        });
    };

    render() {
        return (
            <React.Fragment>
                <div className="card container">
                    <div className="card-body kitten-card-body">
                        <div className="room  row">
                            <img className="room1 col-12" src={background} alt="back" />

                            <div className="carpet-div">
                                <img className="carpet" src={Carpet} alt="carpet" />
                            </div>
                            <div className="mainContent">
                                {this.state.questionBank.length > 0 &&
                                    this.state.responses < 5 &&
                                    this.state.questionBank.map(
                                        ({ question, answers, correct, questionId }) => (
                                            <QuestionBox
                                                randomOne={this.state.randomcatball}
                                                randomTwo={this.state.randomcatwalk}
                                                question={this.state.question}
                                                options={answers}
                                                key={questionId}
                                                selected={(answer) =>
                                                    this.computeAnswer(answer, correct)
                                                }
                                                corrected={(answer) =>
                                                    this.correctAnswer(answer, correct)
                                                }
                                                playAgain={this.playAgain}
                                                checkAnswers={this.checkAnswers}
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
                            <button className="speaker">
                                <img src={Speaker} style={{ width: "20px", height: "20px" }} />
                            </button>
                            <button className="exit">
                                <img src={Logout} style={{ width: "20px", height: "20px" }} />
                            </button>
                            <div className="stars">
                                <div>
                                    <h2 className="score-board-home">
                                        Your Score: {this.state.score.toString()}
                                    </h2>
                                </div>
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
            </React.Fragment>
        );
    }
}

export default Home;
