import React ,{useState} from 'react'
import Navbar from './components/common/Navbar'
import './assets/css/login.css'
import Signup from './Signup'
import { Singup , userLogin } from './actions/action'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import constant from './Redux_store/constant'

function Login() {
   
   let navigate = useNavigate()
  let dispatch  = useDispatch()
    const [state, setState ] = useState({
    login:true ,
    adminAcc:false, 
    signup:false , 
    waiting:false,
    admin_password:{ name:"admin_password" , value:"" , isRequired:true , alert:false  } ,  
    username:{name:"username" ,value:"" , isRequired:true , alert:false   } ,
    email:{ name:"email" ,value:"" , isRequired:true , alert:false} ,
    password:{name:"password" ,value:"" , isRequired:true , alert:false }  
 })
 
  const {login , signup }  = state  
  

   React.useEffect(() => {
   debugger
     if(window.localStorage.getItem('user')) {
      let user = JSON.parse(window.localStorage.getItem('user'))
       window.location.href="/dashboard/"+user.username
     }
     
   }, [])



  function getInputHandler(e) {  
    const { name , value }  = e.target 
     setState({
          ...state ,  [name]: { ...state[name] , value:value  , alert:false  } 
     })
  }

  // console.log("state >>>" , state );
     
  return (
    <React.Fragment>
     
     <div  style={{
       width:"40%" ,
     margin:"auto"
     }}>

        <h2 className='text-capitalize hover_button' >   <span className= {login?'active_button':""}   
         style={login?{color:"white"}:{color:"green"}}
        onClick={()=>{
           setState( {
             ...state , login:true , signup:false  
           })
         }} 
        >  { (login && !signup)?">":""} LOGIN  </span>/ 
        
        <span 
        className={signup?'active_button':"" }
        style={signup?{color:"white"}:{color:"green"}}
        onClick={()=>{
          setState( {
            ...state , login:false , signup:true  
           })
        }} 
        >  {(Singup && !login )?">":""}SIGNUP </span> </h2>
   
    {login?

   <React.Fragment>  
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label neonText "
    style={{  animation: "flicker 1.5s infinite alternate" }} 
    > Email address</label>
    <input type="email" className="form-control" 
      name={state.email.name}
      onChange={getInputHandler}
      value={state.email.value}
      onBlur={(e)=>{
      if(e.target.value=="")
         setState( {
           ...state ,[state.email.name] :{ ...state[state.email.name] ,  alert:true   } 
        }) 
      }} 
       
     id="exampleInputEmail1" aria-describedby="emailHelp" />
       {state.email.alert?
        <div id="emailHelp" className="form-text" style={{color:"white"}}>   please enter email  </div> :" " 
       } 

  </div>
   
  <div className= "mb-3" >
    <label for="exampleInputPassword1"
    style={{  animation: "flicker 1.5s infinite alternate" }} 
    className="form-label neonText " > Password </label>
    <input type="password" 
    onChange={getInputHandler}
    name={state.password.name} 
    value={state.password.value}
    onBlur={(e)=>{
      if(e.target.value=="")
      setState( {
         ...state ,[state.password.name] :{ ...state[state.password.name] ,  alert:true   } 
      })
    }} 
    className="form-control" id="exampleInputPassword1" />
  </div>
  {state.password.alert?
    <div id="emailHelp" className="form-text"  style={{color:"white"}} >   please enter pwassword  </div> :" " 
  }

  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" 
    
    />
    <label className="form-check-label neonText" 
    style={{  animation: "flicker 1.5s infinite alternate" }} 
    for="exampleCheck1">Check me out</label>
  </div>
   

  <button onClick={e=>{
    setState({...state , waiting:true} )
     userLogin(state).then(res=>{
      setState({...state , waiting:false , login:true , signup:false })
      if(res.status==200) {
            window.localStorage.setItem('token' , res.result.token )            
            window.localStorage.setItem('user' , JSON.stringify(res.result)  )            
            dispatch({
              type:constant.LOGGED_IN_USER_DATA ,
              payload:{
                data:res.result
              }
            })

            navigate(`/dashboard/${res.result.username}`)

          }
        else if(res.status==404 ){
          setState({...state , waiting:false  })
           window.alert(res.message)   
        }        
     }).catch(err=>{
      alert(err)
        setState({...state , waiting:false})
     })

    } } className="btn btn-primary btn-block" disabled={state.waiting} > {!state.waiting?" Login " :  
    <div className="spinner-border spinner-border-sm text-light mx-3 " size="sm" role="status" /> } </button>
  </React.Fragment>
  :






<React.Fragment >
   <div className="mb-3" >
   <label for="exampleInputEmail1"
   style={{  animation: "flicker 1.5s infinite alternate" }} 
   className="form-label neonText ">Username </label>
   <input type="text" className="form-control" 
   onChange={getInputHandler}
   name={state.username.name} 
   value={state.username.value}
   onBlur={(e)=>{
     if(e.target.value==""){
       
       setState( {
          ...state ,[state.username.name] :{ ...state[state.username.name] ,  alert:true   } 
       })  
     }
   }} 
   aria-describedby="emailHelp" />
   {state.username.alert?
    <div id="emailHelp" classNameName="form-text " style={{color:"white"}}>   please enter username  </div> :" " 
  }
   <div id="emailHelp" className="form-text"></div>
 
   </div>


    <div className="mb-3">
      <label for="exampleInputEmail1"
      style={{  animation: "flicker 1.5s infinite alternate" }} 
      className="form-label neonText ">Email address</label>
      <input type="email" className="form-control"
      name={state.email.name}
      onChange={getInputHandler}
      value={state.email.value}
      onBlur={(e)=>{

   if(e.target.value==""){
    setState( {
      ...state ,[state.email.name] :{ ...state[state.email.name] ,  alert:true   } 
   }) 
   }
        
      }} 

      id="exampleInputEmail1" aria-describedby="emailHelp" />
      {state.email.alert?
        <div id="emailHelp" classNameName="form-text" style={{color:"white"}}>   please enter email  </div> :" " 
      }
      </div>
    <div className="mb-3">
      <label for="exampleInputPassword1" 
      style={{  animation: "flicker 1.5s infinite alternate" }} 
      className="form-label neonText ">Password</label>
      <input type="password" className="form-control"
      onChange={getInputHandler}
      name={state.password.name} 
      value={state.password.value}
      onBlur={(e)=>{
       if(e.target.value=="") {
         setState( {
            ...state ,[state.password.name] :{ ...state[state.password.name] ,  alert:true   } 
         })   
         
       }
      }} 
       
      id="exampleInputPassword1" />
      {state.password.alert?
        <div id="emailHelp" classNameName="form-text"  style={{color:"white"}} >   please enter pwassword  </div> :" " 
      }
    </div>
     
 

    <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" onChange={e=> setState({...state, adminAcc:!state.adminAcc 
        }) } id="exampleCheck1"  />
      <label className="form-check-label neonText "
      style={{  animation: "flicker 1.5s infinite alternate" }} 
      for="exampleCheck1  "> Create admin account </label>
    </div>
      
    {
    state.adminAcc?<div className="mb-3">
    <label for="exampleInputPassword1 "
    className='neonText'
    style={{  animation: "flicker 1.5s infinite alternate" }} 
    > Provide admin password </label>
    <input type="password"
    onChange={getInputHandler}
    name={state.admin_password.name} 
    value={state.admin_password.value}
    onBlur={(e)=>{
       if(e.target.value==""){ 
         setState( {
            ...state ,['admin_password'] :{ ...state.admin_password ,  alert:true   } 
         })   
       }
    }} 
    className="form-control" id="exampleInputPassword1"  placeholder="admin" />

     {state.admin_password.alert?
        <div classNameName="form-text "  style={{color:"white"}} >   please provide admin pwassword  </div> :" " 
      }

    </div>

    : ""    
     }




    <button  onClick={e=>  {
      setState({...state , waiting:true} )
      Singup(state).then(res=>{
          if(res.status) {
            setState({...state , waiting:false , login:true , signup:false })
            window.alert("acccount created succesfully")           
          }else{
            setState({...state , waiting:false  })
            window.alert(res.msg)           
          }
       }).catch(err=>{
         console.log(err)
         setState({...state , waiting:false})
       })
        
    } } className="btn btn-primary  btn-block" disabled={state.waiting} > {!state.waiting?" Sign up " :  
      <div className="spinner-border spinner-border-sm text-light mx-3 " size="sm" role="status" /> } </button>     
   </React.Fragment> 

 }
         
    
  </div>

  
    </React.Fragment>
  )


}




export default Login
