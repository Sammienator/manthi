import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Cont() {
  return (
    <Container className='m-3'>
      {/* Stack the columns on mobile by making one full-width  */}
      <Row>
        <Col xs={12}  >
         <h1 className='heading'> Lorem ipsum dolor sit aliqua. </h1>
        </Col>
        
      </Row>

  

      {/* Columns are always 50% wide, on mobile and desktop */}
      <Row>
        <Col xs={6}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec feugiat nisl pretium fusce id velit ut tortor pretium. Risus quis varius quam quisque id diam vel. Vitae tortor condimentum lacinia quis. Ullamcorper eget nulla facilisi etiam. Cras sed felis eget velit aliquet sagittis. Consequat nisl vel pretium lectus quam id. 
        </Col>
        <Col xs={6}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec feugiat nisl pretium fusce id velit ut tortor pretium. Risus quis varius quam quisque id diam vel. Vitae tortor condimentum lacinia quis. Ullamcorper eget nulla facilisi etiam. Cras sed felis eget velit aliquet sagittis. Consequat nisl vel pretium lectus quam id. 
        </Col>

      </Row>
      
    </Container>
  );
}

export default Cont;