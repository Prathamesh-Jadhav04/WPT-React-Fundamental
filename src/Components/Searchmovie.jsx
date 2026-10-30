import React from 'react'
import { useSelector } from 'react-redux'

export default function Searchmovie() {
    let Record=useSelector(state=>state.search.movieName)
  return (
    <div>
      Searchmovie
      {Record}
    </div>
  );
}
