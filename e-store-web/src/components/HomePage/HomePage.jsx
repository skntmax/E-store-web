import axios from 'axios'
import React ,{useState , useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './../../asssets/style.css'

function HomePage() {
   
    let history = useHistory()
    const [data, setData] = useState({
       email:"" ,
       password: "" 
    })

    const [error, setError] = useState({
      email:false ,
      password: false 
   })
    

    function onSubmit(e){
       let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
       e.preventDefault()
    
       const {email , password}  = data 
        if(email.trim().length==0 || password.trim().length==0) {
               if(email.trim().length==0) {   
                 setError({email:true , password:false})
               }
                
               if(password.trim().length==0){
                setError({password:true ,email:true })
               }
        }else{
          debugger
           if(data.email.match(regex)) {
            let model=data
            let url = `${process.env.REACT_APP_BASE_URL}/user/login`
            axios.post(url, model).then(res=>{
                if(res.data.success) {
                  localStorage.setItem("ud",res.data.result[0].token  );  
                   history.push('/dashboard')
                }else{
                  alert(res.data.message)
                }
            }).catch(err=>{
              alert(err)
            })
           }else{
             alert("enetr valid mail ")
           }
         

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
      

  useEffect(() => {
    return () => {
      
    };
  }, [])
   
   return (
     
    <div className="parentDiv">
      {console.log(data)}
    <div className="tab-content">
      <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
        <form>
          <div className="form-outline mb-4">
            <input type="email" id="loginName"
            onChange={onChangeHandler}
            className="form-control" name="email" />
              {
                error.email?   <span className="text-danger" >Email is Required </span>: ""  
              }
             
          
            </div>

    
          <div className="form-outline mb-4">
            <input type="password" id="loginPassword" 
             onChange={onChangeHandler}
            className="form-control" name="password" />
            {
              error.password?   <span className="text-danger" >Password is Required </span>: ""  
            }
   
          </div>
    
          <div className="row mb-4">
            <div className="col-md-6 d-flex justify-content-center">
              <div className="form-check mb-3 mb-md-0">
                <input className="form-check-input" type="checkbox" value="" id="loginCheck" checked />
                <label className="form-check-label" for="loginCheck"> Remember me </label>
              </div>
            </div>
    
            <div className="col-md-6 d-flex justify-content-center">
              <a href="#!">Forgot password?</a>
            </div>
          </div>
    
            
          <button type="submit" className="btn btn-primary btn-block mb-4"
            onClick={onSubmit} 
          >Sign in</button>

           
        
          <div className="text-center">
            <p>Not a member? <Link to="/signup" >Register</Link></p>
          </div>
        </form>
      </div>
      <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
        <form>
          <div className="text-center mb-3">
            <p>Sign up with:</p>
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
    
          <p className="text-center">or:</p>
           
          <div className="form-outline mb-4">
            <input type="text" id="registerName" className="form-control" />
            <label className="form-label" for="registerName">Name</label>
          </div>
    
          <div className="form-outline mb-4">
            <input type="text" id="registerUsername" className="form-control" />
            <label className="form-label" for="registerUsername">Username</label>
          </div>
    
          <div className="form-outline mb-4">
            <input type="email" id="registerEmail" className="form-control" />
            <label className="form-label" for="registerEmail">Email</label>
          </div>
    
          <div className="form-outline mb-4">
            <input type="password" id="registerPassword" className="form-control" />
            <label className="form-label" for="registerPassword">Password</label>
          </div>
    
          <div className="form-outline mb-4">
            <input type="password" id="registerRepeatPassword" className="form-control" />
            <label className="form-label" for="registerRepeatPassword">Repeat password</label>
          </div>
    
          <div className="form-check d-flex justify-content-center mb-4">
            <input className="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
              aria-describedby="registerCheckHelpText" />
            <label className="form-check-label" for="registerCheck">
              I have read and agree to the terms
            </label>
          </div>
          <button type="submit" className="btn btn-primary btn-block mb-3">Sign up </button>
        </form>
      </div>
    </div>
     
    </div>
  )
}

export default HomePage
