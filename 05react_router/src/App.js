
import './App.css';
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route,Routes,BrowserRouter, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github from './Components/Github/Github.jsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
          <Routes>
            <Route path='/' element={<Layout />} > 
            {/* for fixed heade and footer */}
                <Route path='' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact />} />
                <Route path='user/:userid' element={<User />} />
                <Route path='/github' element={<Github/>} />
            </Route>
          </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
