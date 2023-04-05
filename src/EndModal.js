const EndModal = ({ points, resetPage }) => {
    const pointSumFunc = () => {
        let pointSum = 0
        points.forEach(point => {
            pointSum += point
        });
        return pointSum
    }

    return (
        <div className="modal-bg">
            <div className="modal-container">
                <h1>Vége</h1>
                <p>Elért pontszám:{pointSumFunc()}</p>
                <ul>
                    {points.map((point, i) => {
                        let pointClass = point === 1 ? "correct" : "false"
                        let pointText = point === 1 ? "Jó" : "Hibás"

                        return (
                            <li key={i} className={pointClass}>{pointText}</li>
                        )

                    })}
                </ul>
                <button className="restart-btn" onClick={resetPage}> Újrakezdés</button>
            </div>
        </div >
    );
}

export default EndModal;