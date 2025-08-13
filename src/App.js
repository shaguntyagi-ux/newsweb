import React, { Component } from 'react'

import SearchInput from './components/SearchInput'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import Test1 from './components/Test1';
// import News from './components/News';
// import Loding from './components/Loding';

const App=()=> {
 
    return (
         <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exect path='/' element={ <SearchInput key='business'  category='business' pagesize='3' />}  />
        <Route exect path='/Business' element={ <SearchInput key='business'  category='business' pagesize='3' />}  />
       <Route exect path='/Technology' element={ <SearchInput  key=' technology' category='Technology' pagesize='3' />}  />
      <Route exect path='/Entertainment' element={ <SearchInput key='Entertainment ' category='Entertainment' pagesize='3' />}  />
      <Route exect path='/Sport' element={ <SearchInput key='sports' category='Sports' pagesize='3' />}  />                
      <Route exect path='/Science' element={ <SearchInput key='Science' category='Science' pagesize='3' />}  />                
      <Route exect path='/Health' element={ <SearchInput key='Health' category='Health' pagesize='3' />}  />                
      </Routes>
    </BrowserRouter>
    //  < BrowserRouter>
    //  <Router>
    //   <Route path='/' element={ <SearchInput category='business' pagesize='3' />}  />
    //   <Route path='/Tecnology' element={ <SearchInput category='Tecnology' pagesize='3' />}  />
    //   <Route path='/Entertainment' element={ <SearchInput category='Entertainment' pagesize='3' />}  />
    //   <Route path='/Sport' element={ <SearchInput category='Sport' pagesize='3' />}  />
    //  </Router>
    //  </BrowserRouter>
    // <div>
    //  {/* <Test1/>
    //  <Loding/>
    //  <News/> */}


    //     <SearchInput category='business' pagesize='3' />
      
    //   </div>
  
    )
  }


export default App
