Dependencies Installed -               
  body-parser                         
  express                            
  mongoose                                    
  nodemon                                                                   

Directly use Api Heroku hosted link  with further additions in link (ex - /server ) for each case as mentioned under -             
  https://hungerstaytask.herokuapp.com (Base Link)                     
                                        
other wise use                                     
  https://localhost:400     (Local Host)                           
                                                   
METHODS (Please follow the given order only) :-                                                                 
                                                                                       
                                                
POST(create) User                                                                                                       
    https://hungerstaytask.herokuapp.com/api/users                                                                                        
                                                                                                                 
    JSON-encoded message body                                                    
   {                                                                                        
      "name": "mycentos",                                                                               
      "id": "12345",                                                               
      "Language":"python",                                                               
      "Framework":"djhango"                                                         
   }                                                                                                
   *(id must be unique else error will be shown)                                                       
                            
                                               
*In the cases where id is passed if the object doesn't exists message of 404 or id doesn't exist will appear                           
                                                                                               
Get all Users                                           
   https://hungerstaytask.herokuapp.com/api/users                            
                                                                  
Get User by passing user id as parameter (where id is _id of the user object)                                  
   https://hungerstaytask.herokuapp.com/api/users/:_id   ex-(https://hungerstaytask.herokuapp.com/api/users/5e8f898f1129880004be7167)           
   *(if such _id doesn't exist 404 message is returned)           
                                 

GET(find) User by name                                               
    https://hungerstaytask.herokuapp.com/api/userbyname/mycentos  || https://hungerstaytask.herokuapp.com/api/userbyname/:name                     
                                         
PUT User                                                    
   https://hungerstaytask.herokuapp.com/api/users/12345 ||https://hungerstaytask.herokuapp.com/api/users/id                                       
                                                                                                
    JSON-encoded message body                                                   
   {
      "name": "maybe",                                        
      "id": "123",                                                     
      "Language":"java",                                                               
      "Framework":"spring"                                                                                         
   }                                                
   **(Here id used in params is id of the user object)                                                            
                                                       
DELETE User                                    
    https://hungerstaytask.herokuapp.com/api/users/123    ||  https://hungerstaytask.herokuapp.com/api/users/:id                                   
                                          
                                                       
                       
                                     
                                           
Explanation-                                                                                      
                                                       
Main file where server is running is app.js                                                                                                        
config->keys.js consist mongo atlas / mlab link (Mongodb is used as database)                                                         
models->server.js consist of defined schema                                                                  
                                                                                                              
To make the code easy to debug and make it easy to understand by everyone GET , POST , PUT , DELETE are written seperately in run.js(under  controller) and exported to api.js (in routes)                                                                                                    
           
