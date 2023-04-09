const EndModal = ({ points, resetPage, data }) => {
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
                <ul className="list-container">
                    {points.map((point, i) => {
                        let pointClass = point === 1 ? "correct" : "false"
                        let pointText = data[i][0]

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