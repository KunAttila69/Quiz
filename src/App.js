import Quiz from "./Quiz";
import { useEffect, useState } from "react";
import Papa from "papaparse";
import Data from "./data/data.csv"
import EndModal from "./EndModal";
import SetMode from "./SetMode";

function App() {
  const [data, setData] = useState()
  const [id, setId] = useState(0)
  const [points, setPoints] = useState([0, 0, 0, 0, 0])
  const [hasEnded, setHasEnded] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      await Papa.parse(Data, {
        download: true,
        delimiter: ";",
        complete: ((result) => {
          setData(result.data)
        })
      })
    }
    fetchData()
  }, [])

  const updateId = () => {
    if (id < 4) {
      setId(id + 1)
    }
    else {
      setTimeout(() => {
        setHasEnded(true)
      }, 500)
    }
  }

  const updatePoints = (isCorrect) => {
    setPoints(points.map((p, i) => {
      if (i === id) {
        p = isCorrect ? 1 : 0
      }
      return p
    }))
  }

  const resetPage = () => {
    setId(0)
    setPoints([0, 0, 0, 0, 0])
    setHasEnded(false)
  }

  return (
    <div className="App">
      <SetMode></SetMode>
      {data && <Quiz data={data} id={id} updateId={updateId} updatePoints={updatePoints} />}
      {hasEnded && <EndModal points={points} resetPage={resetPage} />}
    </div>
  );
}

export default App;
