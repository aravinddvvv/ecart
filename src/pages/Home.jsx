import React from 'react'
import { Row,Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../Hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/slice/wishlistslice';
import { addToCart } from '../redux/slice/cartSlice';



function Home() {

 const data = useFetch("https://dummyjson.com/products")
 console.log(data);
 const dispatch=useDispatch()

  return (
    <div className='m-3 '>
<Row>
      {
        
        data?.length>0?data?.map((product,index)=>(

        
        
        
        <Col>
        <Card key={index} className='m-3' style={{ width: '18rem'}}>
      <Card.Img height={'200px'} variant="top" src={product?.thumbnail} />
      <Card.Body>
        <Card.Title>{product.title.slice(0,25)}</Card.Title>
        <Card.Text>
         {product?.description.slice(0,50)}
        </Card.Text>
        <h5>{product?.price}</h5>
       
       <div className='d-flex  justify-content-between'>
       <Button onClick={()=>dispatch(addToWishlist(product))} variant="outline" className='btn ' ><i class="fa-solid fa-heart" style={{color: '#d22014'}}></i> </Button>
        <Button onClick={()=>dispatch(addToCart(product))} variant="outline" className=' btn '><i class="fa-solid fa-cart-shopping" style={{color: '#eb1405'}}></i> </Button>

       </div>
      </Card.Body>
    </Card>
        </Col>
      )):<p>Nothing to dispaly</p>
      }

</Row>
    </div>
  )
}

export default Home