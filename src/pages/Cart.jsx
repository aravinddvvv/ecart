import React, { useEffect, useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { Link , useNavigate } from 'react-router-dom'
import {Button} from 'react-bootstrap'
import { removeFromCart , emptyCart } from '../redux/slice/cartSlice'




function Cart() {
  const cartArray = useSelector(state => state.cartReducer)
  const dispatch=useDispatch()

  const navigate=useNavigate()


  const[total,setTotal]=useState(0)

  const getCartTotal =()=>{
    if(cartArray.length>0){
      setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }else{
      setTotal(0)
    }

  }
  useEffect(()=>{
    getCartTotal()
  },[cartArray])

  const handleCart =()=>{
    dispatch(emptyCart())
    alert("your order placed successfully..thank you for purchasing")
    navigate('/')
  }






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

<div className='col-lg-3'>
  <div className='border mt-3 rounded shadow p-2 w-100'>
    <h1 className='text-primary p-2'> Cart Summary</h1>
    <h4>Total Products : <span>{cartArray.length}</span></h4>
    <h4>Total : <span className='text-danger fw-bolder fs-2'>$ {total}</span></h4>
    <div className=''>
      <center>
<button onClick={handleCart} style={{width:"300px"}} className='bg-success text-black border mt-3 rounded'><b>Checkout</b></button>
</center>
    </div>
  </div>





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