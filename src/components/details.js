import React, { useState } from 'react'
import Form from './form'

const Details = ({ movies }) => {
  const [flag, setFlag] = useState(false)


  const handleClick = () => {
    setFlag(true)
  }

  return (
    <div className='mt-5'>
      {movies ? <main className='bg-primary m-auto' style={{ width: '50rem', padding: '0.5rem' }}>
        <div className='d-flex justify-content-between'>
          <div className='d-flex flex-column justify-content-center m-auto'>
            <div>
              <h1 className='text-center'>Movie Details</h1>
            </div>
            <div>
              <h2>Name: {movies.show.name}</h2>
            </div>
            <div className='d-flex flex-col'>
              <h4>Genres: {movies.show.genres}</h4>
            </div>
            <div>
              <h4>Rating: {movies.show.rating.average}</h4>
            </div>
            <div>
              <h4 dangerouslySetInnerHTML={{ __html: movies.show.summary }}></h4>
            </div>
          </div>
          <div>
            <div>
              <img src={movies.show.image.medium}></img>
            </div>
          </div>
        </div>
        <div className='text-center'>
          <button type="button" className="btn btn-outline-danger bg-danger text-white" onClick={handleClick} >Book Ticket</button>
        </div>

      </main> : ''}
      <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>

        {flag && <Form name={movies.show.name} flag={flag} setFlag={setFlag} />}
      </div>
    </div>
  )
}

export default Details