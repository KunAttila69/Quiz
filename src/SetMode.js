import { useState } from "react";

const SetMode = ({ changeAnswerState }) => {
    const [checkboxState, setCheckboxState] = useState(false)

    const handleModeChange = () => {
        if (checkboxState) {
            setCheckboxState(false)
            changeAnswerState(false)
        } else {
            setCheckboxState(true)
            changeAnswerState(true)
        }
    }

    return (
        <div className="switch-container">
            <label className="switch">
                <input type="checkbox" id="check-box" onChange={handleModeChange} />
                <span className="slider round"></span>
            </label>
            <h2>Helyes Válasz megjelenítése</h2>
        </div>
    );
}

export default SetMode;