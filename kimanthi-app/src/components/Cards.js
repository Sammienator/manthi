import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/esm/Container';
import pic6 from '../assets/pic6.jpg';
import pic5 from '../assets/pic5.jpg';
import pic4 from '../assets/pic4.jpg';

function Car () {
  return (
    <Container> 
                <CardGroup>
                <Card>
                    <Card.Img variant="top" src={pic6} />
                    <Card.Body>
                    <Card.Title>Isinya Fun Ride</Card.Title>
                    <Card.Text>
                        Take a deep dive into our random bike run to Isinya.Tough, but fun none-theless!Take a deep dive into our random bike run to Isinya.Tough, but fun none-theless!Take a deep dive into our random bike run to Isinya.Tough, but fun none-theless!
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={pic4} />
                    <Card.Body>
                    <Card.Title>Machakos Makutano Ride</Card.Title>
                    <Card.Text>
                       Journey With us as we explore neighbouring Machakos County. Long distance runners we are!
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={pic5} />
                    <Card.Body>
                    <Card.Title>Rongai Visa Travels</Card.Title>
                    <Card.Text>
                      Cycling to Rongai is no easy task,However, we are always ready always steady!Cycling to Rongai is no easy task,However, we are always ready always steady!Cycling to Rongai is no easy task,However, we are always ready always steady
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

export default Car;