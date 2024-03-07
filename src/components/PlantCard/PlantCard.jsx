import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PlantCard = ({ plant }) => {
  return (
    <Card style={{ width: '30%', margin: 5 }}>
     
     <Card.Img variant="top" src={plant.image_url} alt={plant.common_name} />
      
      <Card.Header className="centered-text">{plant.common_name}</Card.Header>
      <Card.Body>
        <Card.Text className="centered-text">
          <strong>Sunlight:</strong> {plant.sunlight}
        </Card.Text>
        <Card.Text className="centered-text">
          <strong>Watering:</strong> {plant.watering}
        </Card.Text>
        <Card.Text className="centered-text">
          <strong>Cycle:</strong> {plant.cycle}
        </Card.Text>
        <Link to={`/plant-details/${plant.id}`}>
          <Button variant="primary">Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default PlantCard;
