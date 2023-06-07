import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import Details from './details';

const MoviesDetails = () => {

  const [movies, setMovies] = useState()

  const params = useParams()
  // console.log(params.MoviesDetails)
  const id = params.MoviesDetails
  //console.log(typeof id)

  useEffect(() => {

    const fetchedData = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/search/shows?q=all')
        const data = await response.json()
        data.map(async (val) => {
          const d = JSON.stringify(val.show.id)
          //console.log(typeof d)
          if (d === id) {
            await setMovies(val)
          }
        })
      } catch (err) {
        console.log(err)
      }
    }

    fetchedData()
  }, [])

  return (
    <div className='mt-5'>
      <Details movies={movies} />

    </div>
  )
}

export default MoviesDetails