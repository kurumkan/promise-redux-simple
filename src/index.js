export default function({dispatch}){    
    return next => action => {              
        if(action.payload && action.payload.then){          
            action.payload
            .then((response)=>{                   
                //we use dispatch instead of next
                //to avoid skipping other('previous') middlewares
                //so the action will go from the beginning of the middleware chain
                dispatch({...action, payload: response.data});                
            })
            .catch(error=>{                
                dispatch({ ...action, payload: error, error: true });                
                return Promise.reject(error);
            });         
        }else{            
            next(action);
        }       
    }
}