import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Category from './pages/Category';
import NewPage from './pages/NewPage';
import OnSaleGames from './pages/OnSaleGames';
import UpComingGames from './pages/UpComingGames';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/categories' element={<Category/>}/>
        
          <Route path='/new-games' element={<NewPage/>}/>
          <Route path='/on-sale-games' element={<OnSaleGames/>}/>
          <Route path='/upcoming-Games' element={<UpComingGames/>}/>

        </Route>
      </Routes>
    </Router>
  )
}

export default App
