import axios from "axios"

export async function Singup(state) {
     
    try{    
        let model = { } 
        // let state = JSON.parse(JSON.stringify(state))
        let userInput = {username:state.username, email:state.email ,password:state.password } 

         if(state['adminAcc']) {
            userInput["admin_password"] = state.admin_password
          } 
           
     for(let [key , val]  of Object.entries(userInput)) {
         if(typeof userInput[key] =='object') 
                model[key]=state[key]?.value
          }       

      for(let val in model) { 
           if( model[val] == "" ){
             alert(" please enter " + val )
             return 
            }
       }
        // console.log("sign up model " , model);     
      let signedUp =  await axios.post(`${process.env.REACT_APP_BASE_URL}/signup` , model)
      if(signedUp) 
           return signedUp.data
    
    }catch(err){
        return err 
    }     
} 





export async function  userLogin( state ) {

     try{
                 
        let model = {
            email:state.email.value ,
            password:state.password.value
       }
        for(let [key,val] of Object.entries(model) ) {        
             if(model[key]=="") {
                    alert(" please enter " + key )
                    return 
                }
          }
                 
        let url = process.env.REACT_APP_BASE_URL+"/login"
         let login_status =  await axios.post( url, model)
            if(login_status)
                   return login_status.data
            
    }catch(err) {
           return err
        }
         
    } 

