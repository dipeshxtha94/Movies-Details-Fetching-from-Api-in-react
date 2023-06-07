import React from 'react'
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'
import moviesDetails from './moviesDetails'


const Movies = ({ items }) => {

  return (
    <main className='bg-primary' style={{ width: '30rem', margin: '1rem', padding: '0.5rem' }}>
      <div className='d-flex justify-content-between'>
        <div className='d-flex flex-column justify-content-center m-auto'>
          <div>
            <h2>{items.show.name}</h2>
          </div>
          <div>
            <h4>{items.show.genres}</h4>
          </div>
          <div>
            <h4>{items.show.rating.average}</h4>
          </div>
        </div>
        <div>
          <div>
            <img src={items.show.image.medium}></img>
          </div>
        </div>
      </div>
      <div>
        <Link to={`${items.show.id}`}>

          <button type="button" className="btn btn-outline-danger bg-danger text-white" >View More</button>
        </Link>
      </div>
    </main>
  )
}

export default Movies