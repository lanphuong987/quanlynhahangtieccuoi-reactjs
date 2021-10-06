import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
export default function ClientCard(props) {
    return (
        <div id="menu">
            <div className="col colmenu" data-aos="fade-up">
                <Card className="h-100 shadow-sm clientCard" as={Link}>
                    <Card.Img variant="top" src={props.menu.hinh} className="card-img-top"/>
                        <Card.Body>
                            <Card.Title>{props.menu.name}</Card.Title>
                            <Card.Text>
                            {props.menu.description}
                        </Card.Text>
                        <div className="clearfix mb-3"> <span className="float-start price-hp">{props.menu.price}</span> </div>
                        </Card.Body>
                </Card>
            </div>
        </div>

        )
}