import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <div>
       
       <footer>

            <div className="copyright">
                
                <h1>Reach Out To Us...</h1>
            </div>



            <Row>
            <Col xs={6}>
            <div>
                <h1> We are available and ready to serve you at our physical offices locations as well as on all social media platforms.</h1>
            </div>
                    
            </Col>
            <Col xs={6}>
            <ul>
            <li> <i className="fab fa-facebook-f">Facebook</i></li>
            <li>  <i className="fab fa-github"></i>github</li>
            <li>  <i className="fab fa-github"></i>Twitter</li>
            <li>  <i className="fab fa-github"></i>Instagram</li>
            </ul>
                    
            </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <h1>The Sammienator Inc. 2022</h1>
                    
              </Col>
            </Row>

</footer>

   
    </div>
  )
}

export default Footer