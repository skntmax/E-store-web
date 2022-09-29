import React ,{useState ,useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import user from './../../asssets/images.png'
import { Link } from 'react-router-dom'
import { getCurrentUserDetail, getUserDetails } from '../../Actions/Actions'
function Navbar({state, dispatch}) {
     let history = useHistory()
      const [ud, setUd] = useState("")

   useEffect(() => {
    getCurrentUserDetail().then(res=>{
      console.log('user detail ' , res)
      setUd(res.result)     

      }).catch(err=>{
      
    })

   }, [])
     

  return (
    <React.Fragment>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <Link class="navbar-brand" to="/dashboard"> E-Store </Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <Link class="nav-link" to="/catalogue" > Order Summary  <span class="sr-only">(current)</span></Link>
        </li>
       
    
      </ul>
      <form class="form-inline my-2 my-lg-0">
        
              <span> {ud.FULL_NAME}  <img alt="hi" src={user} height="50" width="60" /> </span>
            
          </form>
           <button className='btn btn-sucess mx-2' onClick={(e)=>{
             localStorage.removeItem('ud')
             history.push('/')
              
           }} >  Logout </button>
    </div>
  </nav>
    </React.Fragment>
  )
}

export default Navbar
