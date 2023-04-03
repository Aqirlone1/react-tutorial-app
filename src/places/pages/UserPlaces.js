import React from "react";
import { useParams } from "react-router-dom";

import PLaceList from "../components/PlaceList";

const DUMMMY_PLACES=[
    {
id: 'p1',
title: 'Empire state building',
description: 'one of the most famous sky scrapers in the world',
imageUrl: 'https://images.skyscrapercenter.com/building/EmpireStateBuilding_(c)AutismSpeaks.jpg',
address: '20 W 34th St., New York, NY 10001, United States',
location: {
    lat: 40.7484405,
    lng: -73.9878584
},
creator: 'u1'

},
{
    id: 'p2',
    title: 'Empire state building',
    description: 'one of the most famous sky scrapers in the world',
    imageUrl: 'https://images.skyscrapercenter.com/building/EmpireStateBuilding_(c)AutismSpeaks.jpg',
    address: '20 W 34th St., New York, NY 10001, United States',
    location: {
        lat: 40.7484405,
        lng: -73.9878584
    },
    creator: 'u2'
    
    }
]
const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMMY_PLACES.filter(place => place.creator === userId)
return(
    <PLaceList items={loadedPlaces}/>
)
}
export default UserPlaces