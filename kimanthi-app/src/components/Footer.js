import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';







const Footer = () => {
  return (
    <div>
       
       <footer className='m-3'>

            <div className="copyright">
                
                <h1>Reach Out To Us...</h1>
            </div>



            <Row>
            <Col xs={6}>
            <div>
                <h1> We are available and ready to serve you at our physical offices locations as well as on all social media platforms.</h1>
            </div>
                    
            </Col>
            <Col xs={6} className="flex" id='icons' >
            <ul className='icons' >
            <p> <i class="fab fa-facebook"></i>  </p>
            <p>  <i class="fab fa-github"></i></p>
            <p>  <i class="fab fa-twitter"></i></p>
            <p>  <i class="fab fa-instagram"></i></p>
          
            
            
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