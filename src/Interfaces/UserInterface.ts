export interface CreateUser {
    name:string   
    password:string 
    email:string    
    address?:string  
}
export interface UpdateUser {
    id:string
    name:string   
    password:string 
    email:string    
    address?:string  
}

export interface TokenInterFace {
    id:string
    name:string
    role:string
}