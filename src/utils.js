export const getAuthHeader =()=>{
     return {
        headers:{
            "content-type":"application/json" ,
             "authorization": "Bearer "+JSON.parse(window.localStorage.getItem('user')).token 
        }
     }
}

