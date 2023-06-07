import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Movies from './components/movies'

function App() {
  const [movies, setMovies] = useState([])
  useEffect(() => {

    const fetchedData = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/search/shows?q=all')
        const data = await response.json()
        setMovies(data)
        // console.log(data)
        // console.log(movies)
      } catch (err) {
        console.log(err)
      }
    }

    fetchedData()
  }, [])


  return (
    <div className="App d-flex flex-column m-auto text-center justify-content-center bg-dark">
      <h1 className="bg-dark text-white">Movies</h1>
      <header className="App-header m-auto" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', width: '75rem' }}>
        {movies.map((val, idx) => {
          return <Movies key={idx} items={val} />
        })}

      </header>
    </div>
  );
}

export default App;
