import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
    const [episodes, setEpisodes] = useState(null)

    useEffect(() => {
        fetch("https://globalmakermedia.blob.core.windows.net/core/misc/data.json")
            .then(res => res.json())
            .then(data => {
                setEpisodes(data.episodes)
            })
    }, [])

    if (episodes === null) {
        return <div>Loading...</div>
    }

  return (
    <div>
        {episodes.map(e => (
            <div><Link to={`/episodes?id=${e.id}`}>{e.name}</Link></div>
        ))}
    </div>
  )
}

export default HomePage