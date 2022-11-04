import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';

const ExcCourses = () => {
    return (
        <Container>
            <h3>Cours exclusifs</h3>
        <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://f.hellowork.com/obs-static-images/seo/ObsJob/infographiste.jpg" />
        <Card.Body>
          <Card.Title>Infographiste</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.1min30.com/wp-content/uploads/2021/05/strategie-marketing-1.jpg" />
        <Card.Body>
          <Card.Title>Marketing Stratégique</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://cdn.ready-market.com/101/373de1b4//Templates/pic/06-Quality-Management.jpg?v=ad84bbd1" />
        <Card.Body>
          <Card.Title>Gestion de la qualité</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
        </Container>
    );
}

export default ExcCourses;
