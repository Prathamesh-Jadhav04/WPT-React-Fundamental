import React from 'react'
import { useParams } from 'react-router'

export default function Singlemovie() {
    let Result = useParams();
    console.log(Result);
    
  return (
    <div>Single movie Page</div>
  )
}
