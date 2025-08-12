import React, { Component } from 'react'
import '../components/nav.css'
import x1 from  '../images/logo.png'
import { Link } from 'react-router-dom'

const Test1= ()=> {
  // class SearchInput extends Component {
   
  
    // handleChange = (e) => {
    //   this.setState({ inputValue: e.target.value });
    // };
  
    // handleSubmit = () => {
    //   this.props.onCategoryChange(this.state.inputValue); // Call parent's method
    // };
 
    return (
    <div>
      <nav className={`navbar fixed-top  navbar-expand-lg text-bg-light p-3`}>
        <img src={x1} alt="" className='img1'  />
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  <div className="container-fluid">
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 list-unstyled d-flex justify-content-center  ">
        
        <li className="nav-item">
    <Link  className="nav-link active" to="/"  >Home</Link> 
    </li>
  
{/*    
        <li className="nav-item">
          <Link  className="nav-link active " aria-current="page" to="#">India</Link> 
        </li>
        <li className="nav-item">
          <Link  className="nav-link active" to="#">World</Link> 
        </li>
        <li className="nav-item ">
        <Link  className="nav-link active" to="Local">
            Local
          </Link>  */}
         
        {/* </li> */}
        <li className="nav-item">
           <Link  className="nav-link active" to="/Business">Business</Link> 
        </li>
        <li className="nav-item">
            <Link  className="nav-link active" to="/Technology">Technology</Link> 
        </li>
        <li className="nav-item">
          <Link  className="nav-link active" to="/Entertainment">Entertainment</Link> 
        </li>
        <li className="nav-item">
            <Link  className="nav-link active" to="/Sport">Sport</Link> 
        </li>
        <li className="nav-item">
           <Link  className="nav-link active" to="/Science">Science</Link> 
        </li>
        <li className="nav-item">
            <Link  className="nav-link active" to="/Health">Health</Link> 
        </li>
      </ul>
       {/* <input
          type="text"
          placeholder="Enter news category (e.g. business, sports)"
          // value={this.state.inputValue}
          // onChange={this.handleChange}
        /> */}
      
     
    </div>
  </div>
</nav>
 {/* <h1 style={{textAlign:'center'}}>Top Headlines {}</h1> */}
      {/* <div classNameName={`form-check form-switch text-bg-${first} p-3`}  style={{display:'flex',justifyContent:"space-between"}} >
  <label classNameName="form-check-label" htmlFor="switchCheckDefault">this is button of dark mode</label>
  <input classNameName="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onClick={tap} style={{marginLeft:'20px'}} />


</div> */}
{/* <div style={{display:'flex',justifyContent:'center'}}>
<textarea name="" id="tip" style={{width:'400px',height:'100px',}} value={first2}  onChange={handel}>  </textarea>
countword {word}
counttt{tt}
</div> */}

    </div>
  )
}

  


export default Test1

// import '../components/nav.css'
// export default function Test1() {
//     const [first,setCount]=useState('light')
//     const [first2,setCount2]=useState('primary2')

//     console.log(first)
// const tap=()=>{
//     if(first=='light'){
//         setCount('primary')
//     }
//     else{
//         setCount('light')
//     }
// }
//  function handel(event){
//     setCount2(event.target.value)

//   }
// const word=first2.length
// const tt=first2.split(" ").length

    
  