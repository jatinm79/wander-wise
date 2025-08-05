import React from 'react'
import { Link } from 'react-router'

const TripCard = ({id, name, location, imageUrl, tags, price}: TripCardProps) => {
  return (
    <Link>
      <img src={imageUrl} alt={name}/>
    </Link>
  )
}

export default TripCard