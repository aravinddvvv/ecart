import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import {Button} from 'react-bootstrap'
import { removeFromCart } from '../redux/slice/cartSlice'



function Cart() {
  const cartArray = useSelector(state => state.cartReducer)
  const dispatch=useDispatch()
  return (
    <div style={{marginTop:"100px"}}>
      Your cart
      {
        cartArray.length>0?
          
<div className="row ">
<div className="col-lg-8 mt-5">
  <table className="table shadow rounded">
    <thead>
      <tr>
        <th>#</th>
        <th>product</th>
        <th>price</th>
        <th>action</th>
      </tr>
    </thead>
    <tbody>
      {
        cartArray.map((product,index)=>(
          <tr key={index}>
            <td>{index+1}</td>
            <td>{product.title}</td>
            <td><img src={product.thumbnail} alt='' width={'110px'} height={'100px'} /></td>
            <td> <Button onClick={()=>dispatch(removeFromCart(product.id))} variant="outline" className='btn ' ><i class="fa-solid fa-trash" style={{color: '#d22014'}}></i></Button></td>
          </tr>
        ))
      }
    </tbody>
  </table>
</div>
</div>













        :<div style={{height:'100vh'}} className='w-100 d-flex dlex-column align-items-center justify-content-center'>
  
  <img height={'500px'} src="https://farmfreshshop.com/public/img/empty-cart1.gif" alt="hhh" />
  <Link className='btn btn-warning rounded' style={{textDecoration:'none'}} to={'/'}>Back to Home</Link>
</div>
      }



      </div>
  )
}

export default Cart