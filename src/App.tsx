import './styles/index.scss';
import React from 'react';
import './App.css';
import NewFilms from "./components/NewFilms/NewFilms";



function App() {
/*  useEffect(() => {
    axios.get(`https://api.kinopoisk.dev/movie?field=rating.kp&search=7-10&field=year&search=2017-2020&field=typeNumber&search=2&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=ZQQ8GMN-TN54SGK-NB3MKEC-ZKB8V06`, {
      headers: {
        'X-API-KEY': `${process.env.REACT_APP_API_KEY}`,
        'Content-Type': 'application/json'
      }
    }).then((r) => console.log(r))
  }, [])*/

  return (
    <div className="App">
      <NewFilms />
    </div>
  );
}

export default App;
