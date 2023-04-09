import { useState } from "react"
import SetMode from "./SetMode"

const Quiz = ({ data, id, updateId, updatePoints }) => {

    const question = data[id][0]
    const answers = [data[id][1], data[id][2], data[id][3]]
    const correctAnswer = data[id][4]
    const [selectedAnswer, setSelectedAnswer] = useState("")
    const [colors, setColors] = useState(["grey", "grey", "grey"])
    const [showAnswer, setShowAnswer] = useState(false)

    const handleSelect = (answer) => {
        return () => {
            setSelectedAnswer(answer)
        }
    }

    const updateQuestion = () => {
        setColors(["grey", "grey", "grey"])
        setSelectedAnswer("")
    }

    const checkAnswer = () => {
        if (selectedAnswer !== "") {
            let isCorrect = false
            if (selectedAnswer === correctAnswer) {
                setColors(colors.map((c, i) => {
                    if (i === answers.indexOf(selectedAnswer)) {
                        isCorrect = true
                        if (showAnswer) {
                            return "green"
                        }

                    }
                    return "grey"
                }))
            } else {
                setColors(colors.map((c, i) => {
                    if (i === answers.indexOf(selectedAnswer)) {
                        if (showAnswer) {
                            return "red"
                        }
                    }
                    if (i === answers.indexOf(correctAnswer)) {
                        if (showAnswer) {
                            return "green"
                        }
                    }
                    return "grey"
                }))
            }
            setTimeout(() => {
                updatePoints(isCorrect)
                updateId()
                updateQuestion()
            }, 1000)
        }
    }

    const changeAnswerState = (isChecked) => {
        setShowAnswer(isChecked)
    }

    return (
        <div className="quiz-container">
            <h1>{question}</h1>
            <div className="answer-container">
                {answers.map((ans, i) => (
                    <button key={i} onClick={handleSelect(ans)} className={`${colors[i]} ${ans === selectedAnswer ? "selected" : ""}`}>{ans}</button>
                ))}
            </div>
            <button className="submit-button" onClick={checkAnswer}>Válasz ellenőrzése</button>
            <SetMode changeAnswerState={changeAnswerState}></SetMode>
        </div>
    );
}

export default Quiz;