import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/Home';
import Category from './pages/Category';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/categories' element={<Category/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
