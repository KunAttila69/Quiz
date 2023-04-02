import Quiz from "./Quiz";
import { useEffect, useState } from "react";
import Papa from "papaparse";
import Data from "./data/data.csv"

function App() {
  const [data, setData] = useState()
  const [id, setId] = useState(0)

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
      alert("vége")
    }
  }

  return (
    <div className="App">
      {data && <Quiz data={data} id={id} updateId={updateId} />}
    </div>
  );
}

export default App;
