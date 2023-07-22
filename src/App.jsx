import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [stop, setStop] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "India has largest deposits of ____ in the world.?",
      answers: [
        {
          text: "gold",
          correct: false,
        },
        {
          text: "copper",
          correct: false,
        },
        {
          text: "mica",
          correct: true,
        },
        {
          text: "None of the above",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "What is the boiling point temperature (water)?",
      answers: [
        {
          text: "50 °C",
          correct: false,
        },
        {
          text: "100 °C",
          correct: true,
        },
        {
          text: "150 °C",
          correct: false,
        },
        {
          text: "200 °C",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Which fruit is associated with Isaac Newton?",
      answers: [
        {
          text: "Pear",
          correct: false,
        },
        {
          text: "Pineapple",
          correct: false,
        },
        {
          text: "Banana",
          correct: false,
        },
        {
          text: "Apple",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "The largest part of the human brain part is?",
      answers: [
        {
          text: "Cerebellum",
          correct: false,
        },
        {
          text: "Midbrain",
          correct: false,
        },
        {
          text: "Cerebrum",
          correct: true,
        },
        {
          text: "Medulla Oblongata",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Which of the following is the oldest monument?",
      answers: [
        {
          text: " Qutubminar",
          correct: false,
        },
        {
          text: "Taj Mahal",
          correct: false,
        },
        {
          text: "Ajanta Caves",
          correct: true,
        },
        {
          text: "Khajuraho",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "The World Largest desert is ?",
      answers: [
        {
          text: "Thar",
          correct: false,
        },
        {
          text: "Kalahari",
          correct: false,
        },
        {
          text: "Sahara",
          correct: true,
        },
        {
          text: "Sonoran",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Country that has the highest in Barley Production ?",
      answers: [
        {
          text: "China",
          correct: false,
        },
        {
          text: "India",
          correct: false,
        },
        {
          text: "Russia",
          correct: true,
        },
        {
          text: "France",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "The metal whose salts are sensitive to light is ?",
      answers: [
        {
          text: "Zinc",
          correct: false,
        },
        {
          text: "Silver",
          correct: true,
        },
        {
          text: "Copper",
          correct: false,
        },
        {
          text: "Aluminium",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Mount Everest is located in ? ",
      answers: [
        {
          text: " India",
          correct: false,
        },
        {
          text: "Nepal",
          correct: true,
        },
        {
          text: "Tibet",
          correct: false,
        },
        {
          text: "China",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: " Which soil is suitable for agriculture ? ",
      answers: [
        {
          text: "Red soil",
          correct: true,
        },
        {
          text: "Sand",
          correct: false,
        },
        {
          text: "Black soil",
          correct: false,
        },
        {
          text: "Peaty Soil",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "The Gate way of India is ? ",
      answers: [
        {
          text: "Chennai",
          correct: false,
        },
        {
          text: "Mumbai",
          correct: true,
        },
        {
          text: "Kolkata",
          correct: false,
        },
        {
          text: "Newdelhi",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Which is considered as the biggest port of India ?",
      answers: [
        {
          text: "Kolkata",
          correct: false,
        },
        {
          text: "Chennai",
          correct: false,
        },
        {
          text: "Cochin",
          correct: false,
        },
        {
          text: "Mumbai",
          correct: true,
        },
      ],
    },
    {
      id: 13,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {stop ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setStop={setStop}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setStop={setStop}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
