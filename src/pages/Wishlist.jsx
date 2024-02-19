import React from 'react'
import { Row ,Col, Card, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../redux/slice/wishlistslice'
import { addToCart } from '../redux/slice/cartSlice'


function Wishlist() {

 const wishlistArray=useSelector((state)=>state.wishlistreducer)
 const dispatch=useDispatch()
 const handleWishlistCart =(product)=>{
  dispatch(addToCart(product))
  dispatch(removeFromWishlist(product.id))
 }
 
  return (
    <div style={{marginTop:'100px'}}>Wishlist

    <Row>
{
wishlistArray.length>0?
wishlistArray.map((product,index)=>(


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
<Button  onClick={()=>dispatch(removeFromWishlist(product.id))} variant="outline" className='btn ' ><i class="fa-solid fa-trash" style={{color: '#d22014'}}></i> </Button>
 <Button onClick={()=>handleWishlistCart(product)} variant="outline" className=' btn '><i class="fa-solid fa-cart-shopping" style={{color: '#eb1405'}}></i> </Button>

</div>
</Card.Body>
</Card>
 </Col>
)):<div style={{height:'100vh'}} className='w-100 d-flex dlex-column align-items-center justify-content-center'>
  
  <img height={'500px'} src="https://farmfreshshop.com/public/img/empty-cart1.gif" alt="hhh" />
  <Link className='btn btn-warning rounded' style={{textDecoration:'none'}} to={'/'}>Back to Home</Link>
</div>


}



    </Row>

    </div>
  )
}

export default Wishlist