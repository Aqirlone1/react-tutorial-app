import React, { useState } from "react";


import Card from './../../shared/components/UIElements/Card'
import Button from './../../shared/components/FormElements/Button'
import Model from './../../shared/components/UIElements/Model'
import './PlaceItem.css'

const PLaceItem = props => {
  const [showMap, setShowMap] = useState(false)

  const openMapHAndler = () =>  setShowMap(true)
  const closeMapHAndler = () =>  setShowMap(false)

return(
  <> 
  <Model 
  show={showMap}
  onCancel={closeMapHAndler}
  header={props.address}
  contentClass='place-item__model-content'
  footerClass='place-item__model-actions'
  footer={<Button onClick={closeMapHAndler}>CLOSE</Button>}
  >
  <div className="map-container">

  </div>
  </Model>
     <li className="place-item">
      <Card className="place-item__content">
        <div className="place-item__image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="place-item__info">
          <h2>{props.title} </h2>
          <h3>{props.address}</h3>
          <p>{props.description}</p>
        </div>
        <div className="place-item__actions">
          <Button inverse>VIEW ON MAP</Button> 
          <Button to={`/places/${props.id}`}>EDIT</Button> 
          <Button danger>DELETE</Button> 
          </div>
          </Card>
    </li>
    </>

)
}
export default PLaceItem