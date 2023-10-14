import Cards from "./components/Cards/Cards"
import Filters from "./components/Filters/Filters"
import React, { useState, useEffect } from 'react';

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  let [fetchedData, updateFetchedData] = useState([]);
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
  let { info, results } = fetchedData;

  //console.log(fetchedData);
  //console.log('hola')
  useEffect(() => {
    (async () => {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
      //console.log(data.results);
    })();
  }, [api])

  return (
    <>
      <h1 className="text-center my-4 ubuntu">Rick & Morty <span className="text-primary">Wiki</span></h1>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters />
          </div>
          <div className="col-8">
            <div className="row">
              <Cards results={results}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
