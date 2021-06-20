import React from 'react'

const Card =({name, email, id})=>{
  //  const {name, email ,id}= props
    return(
        <div className ='tc bg-light-green dib br2 pa4 mr1 grow bw2 shadow-8 pv4 pb7 mh1 mv2'>
          <img  alt ='robot' src={`https://robohash.org/${id}?size=200x200`}/>
          <div>
              <h2>{ name} </h2>
              <p> {email}</p> 
          </div>

        </div>
    );
}
export default Card