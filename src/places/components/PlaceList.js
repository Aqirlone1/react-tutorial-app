import React from "react";
 
import Card from './../../shared/components/UIElements/Card'
import PLaceItem from "./PlaceItem";
import './PlaceList.css'

const PLaceList = props => {
if(props.items.length === 0){
    return (
    <div className="place-list">
        <Card className=''>
            <h2> No places Found. Maybe create one?</h2>
            <button> Share Place</button>
        </Card>
    </div>)
}
return (
    <ul className="place-list">
        {props.items.map(place => 
        <PLaceItem 
         key={place.id}
         id={place.id}
         image={place.imageUrl}
         title={place.title}
         description={place.description}
         address={place.address}
         creatorId={place.creator}
         coordinates={place.location}
        />)}
    </ul>
)
}
export default PLaceList