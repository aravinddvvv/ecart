import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <div>
      <MDBFooter bgColor='primary' className=' mt-3 text-center text-lg-start text-muted ' >
      

      <section className='mt-3'>
        <MDBContainer className='text-center text-md-start mt-3'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className=' text-light text-uppercase fw-bold mb-4'>
                <MDBIcon icon="video-camera" className="me-3 " style={{color:'orange'}} />
                ECart
              </h6>
              <p className='text-white'>
              free and open source cross-platform multimedia player and framework that plays most multimedia files
               as well as DVDs, Audio CDs, VCDs, and various streaming protocols.


    
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className=' text-light mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Links</h6>
              <p>
              <a href='/' className='text-white' style={{textDecoration:'none'}}>
                  Home 
                </a>
              </p>
              <p>
              <a href='/wishlist' className='text-white' style={{textDecoration:'none'}}>
                  Wishlist 
                </a>
              </p>
              <p>
              <a href='/cart' className='text-white' style={{textDecoration:'none'}}>
                  Cart
                </a>
              </p>
              
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='text-light mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Guides</h6>
              <p>
              <a href='https://react.dev/' className='text-white' style={{textDecoration:'none'}}>
                  React
                </a>
              </p>
              <p>
              <a href='https://react-bootstrap.github.io/' className='text-white' style={{textDecoration:'none'}}>
                  React Bootsrap
                </a>
              </p>
              <p>
                <a href='https://bootswatch.com/' className='text-white' style={{textDecoration:'none'}}>
                  Bootswatch
                </a>
              </p>
              
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact Us</h6>
              <div>
              <div>
              <input className='mb-3 me-2 border rounded' type="text" placeholder='Enter Your Email ID' />
              <button style={{backgroundColor:'orange'}} className='border rounded'>Subscribe</button>
              
              </div>
              <div className=''>
          <a href='/' className='m-4 text-white'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='/' className='m-4 text-white'>
            <MDBIcon fab icon="twitter" />
          </a>
          
          <a href='/' className='m-4 text-white '>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='/' className='m-4 text-white'>
            <MDBIcon fab icon="linkedin" />
          </a>
          
        </div>
        </div>
             
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='/' style={{textDecoration:'none'}}>
          VideoPlayer.com
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer