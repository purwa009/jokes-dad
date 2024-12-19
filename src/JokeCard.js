import React from "react";
import { FaSync } from 'react-icons/fa'; 
import { Card, Button } from 'react-bootstrap'; 

const JokeCard = ({ joke, reloadJoke }) => {
  return (
    <Card className="joke-card">
      <Card.Body>
        <Card.Title style={{ color: "blue", fontWeight: "bold" }}>
          {joke.setup}
        </Card.Title>
        <Card.Text style={{fontWeight:"bolds"}}>{joke.punchline}</Card.Text>
        <div className="text-end">
          <Button variant="danger" onClick={reloadJoke}>
            <FaSync style={{ marginRight: "5px" }} /> Reload
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default JokeCard;

