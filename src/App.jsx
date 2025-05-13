import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';


const router =createBrowserRouter([
  {
    path:"/",
    element:<div>
      <Navbar/>
      <Home/>
    </div>
  },

  {
      path:"/About",
      element:<div>
        <Navbar/>
        <About/>
      </div>
  },

  {
    path:"/Projects",
    element:<div>
      <Navbar/>
      <Projects/>
    </div>
  },

  {
    path:"/Skills",
    element:<div>
      <Navbar/>
      <Skills/>
    </div>
  },
  {
    path:"/Contact",
    element:<div>
      <Navbar/>
      <Contact/>
    </div>
  },
])
function App() {

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
