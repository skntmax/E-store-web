import React ,{useState , useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './../../asssets/style.css'


function Signup() {
  let history = useHistory()

  const [data, setData] = useState({
     fullName:"",
    email:"" ,
    password: "" 
 })

 const [error, setError] = useState({
  fullName:false,
  email:false ,
   password: false 
})
 


function onSubmit(e){
  e.preventDefault()
debugger
  const { fullName, email , password}  = data 
   if(  fullName.trim().length==0 || email.trim().length==0 || password.trim().length==0) {
      debugger  
    if(fullName.trim().length==0) {  
      let copy = error 
      copy.fullName= true   
      setError(copy)
    }
     
        if(email.trim().length==0) {   
          let copy = error 
          copy.email= true
            setError(copy)
          }
           
          if(password.trim().length==0){
            let copy = error 
            copy.password= true
              setError(copy)
          }
   }else{
     debugger
      let model=data
      let url = `${process.env.REACT_APP_BASE_URL}/user/signup`
      axios.post(url, model).then(res=>{
        if(res.data.success) {
             alert("User registered")
             history.push('/')
          }else{
            alert(res.data.message)
          }
      }).catch(err=>{
        alert(err)
      })
   }
   return

}


function onChangeHandler(e){
  let name = e.target.name
  let value =  e.target.value

  debugger
setData({
  ...data, [name]:value
})  
 
setError({
 ...error, [name]:false
}) 
  
}



  return (
    <div className='parentDiv'>
    <h1 className='text-center'>   E-STORE </h1>
    <form>
      {console.log(data)}
    <div className="form-outline mb-4">
      <input type="text" id="form2Example1"
       name="fullName"
       onChange={onChangeHandler}
      className="form-control" />
       
      {
        error.fullName?   <span className="text-danger" >Full Name is Required </span>: ""  
      }


    </div>
  

    <div className="form-outline mb-4">
      <input type="email" id="form2Example1"
      name="email"
      onChange={onChangeHandler}
      className="form-control" />
      {
        error.email?   <span className="text-danger" >Email is Required </span>: ""  
      }


    </div>
  
    
    <div className="form-outline mb-4">
      <input type="password" id="form2Example2"
      name="password"
      onChange={onChangeHandler}
      className="form-control" />
      {
        error.password?   <span className="text-danger" >password is Required </span>: ""  
      }

    </div>
  
    <div className="row mb-4">
      <div className="col d-flex justify-content-center">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
          <label className="form-check-label" for="form2Example31"> Remember me </label>
        </div>
      </div>
  
      <div className="col">
        <a href="#!">Forgot password?</a>
      </div>
    </div>
  
    <button type="button" 
     onClick={onSubmit}
    className="btn btn-primary btn-block mb-4">Sign Up</button>
  
    <div className="text-center">
      <p>Not a member? <a href="#!">Register</a></p>
      <p>or sign up with:</p>
      <button type="button" className="btn btn-link btn-floating mx-1">
        <i className="fab fa-facebook-f"></i>
      </button>
  
      <button type="button" className="btn btn-link btn-floating mx-1">
        <i className="fab fa-google"></i>
      </button>
  
      <button type="button" className="btn btn-link btn-floating mx-1">
        <i className="fab fa-twitter"></i>
      </button>
  
      <button type="button" className="btn btn-link btn-floating mx-1">
        <i className="fab fa-github"></i>
      </button>
    </div>
  </form>





    </div>
  )
}

export default Signup
