import React, { useState, useEffect } from "react";
import Characters from './Characters';
import Navigation from './Navigation';

const MiApi = ({ charSearch }) => {

  const [characterData, setCharacterData] = useState([]);
  const [reverseData, setReverseData] = useState([...characterData]);
  const [page, setPage] = useState([]);

  let apiData = `https://rickandmortyapi.com/api/character/?name=${charSearch}`;

  const obtainData = (url) => {
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else if (response.status === 404) {
          return Promise.reject('Error 404')
        } else {
          return Promise.reject('Error: ' + response.status)
        }
      })
      .then(data => {
        setCharacterData(data.results);
        setPage(data.info);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const onPrev = () => {
    obtainData(page.prev);
  };

  const onNext = () => {
    obtainData(page.next);
  };

  useEffect(() => {
    obtainData(apiData);
  }, [apiData]);

  const reverseButton = (e) => {
    setReverseData([...characterData.reverse()], reverseData);
  };

  return (
    <div className="container">
      <Navigation prev={page.prev} next={page.next} onPrev={onPrev} onNext={onNext} reverseButton={ reverseButton } />
      <Characters characters={characterData} />
      <Navigation prev={page.prev} next={page.next} onPrev={onPrev} onNext={onNext} reverseButton={ reverseButton } />
    </div>
  );
};

export default MiApi;