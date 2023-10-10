import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

function Episode() {
    const params = useParams()
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)


  return (
    <>
        <div>Episode #{searchParams.get('id')}</div>
        <Link to="/">Volver</Link>
    </>
  )
}

export default Episode