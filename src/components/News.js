import React, { Component } from 'react'
import '../components/nav.css'

const News=(props)=>  {
  
 
    
    // let {title , discription , imageurl,newsurl,name,author,date}=this.props;
    return (
      <div className='top'>
       
         <div style={{display:"flex",justifyContent:'space-between'}}>
      <div className="card" style={{width: "20rem"}}>
  
  <img src={!props.imageurl?"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/2LHRXCCTY723CTVOY67BKK2FRM.JPG&w=1440":props.imageurl} className="card-img-top" alt="..."/>
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {props.name}</span>
  <div className="card-body">
    <h5 className="card-title">{props.title}...</h5>
    <p className="card-text">{props.discription}...</p>
       <p class="card-text"><small class="text-body-secondary"> By {!props.author?'Undefined':props.author} on {new Date(props.date).toGMTString()}</small></p>
    <a href={props.newsurl} className="btn btn-sm  btn-primary" >Go somewhere</a>
  </div>
</div>
      
</div>
      </div>
    )
  }


export default News



