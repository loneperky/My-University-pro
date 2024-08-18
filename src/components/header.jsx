import '../styles/index.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Body from './body'
import { About,Services,FAQ } from './pages'
function Header (){
  return(
    <>
    <div className="nav">
       <div className="heading">
          <h1 className='logo'>EDU MEETING</h1>
        </div>
       <div className="heading-links">
          <ul>
            <Router>
            <li className='hide'>HOME</li>
            <li className='hide'>MEETINGS</li>
            <li className='hide'>APPLY NOW</li>
            <li className='hide'>PAGES</li>
            <li className='hide'>COURSES</li>
            <li className='hide'>CONTACT US</li>
            <li> 
             <div className="nav-btn">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
             </div>
           </li>
              <Routes>
                {/* <Route path='/' element={Body}/>
                <Route path='/about' element={<About />}/>
                <Route path='/service' element={Services}/>
                <Route path='/faq' element={FAQ}/>
                <Route path='/body' element={Body}/>
                <Route path='/' element={Body}/> */}
              </Routes>
            </Router>
           
          </ul>
       </div>
    </div>

    </>
  )
}



{/* <h3>UPCOMING MEETINGS </h3>
<hr /> */}

function Video(){
  return(
    <>
      <video autoPlay="on" muted loop id="bg-video">
      <source src="./src/Images/course-video.mp4" type="video/mp4" />
      </video>
    
    </>
  )
}

export default Header
export {Video}