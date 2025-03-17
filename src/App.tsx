import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GlobalStyles } from './App.styled.js'
import { FavoritesProvider } from './context/FavoritesContext.tsx'
import Header from './components/organisms/Header/Header.tsx'
import CharacterList from './pages/CharacterList/CharacterList.tsx'
import Favorites from './pages/Favorites/Favorites.tsx'
import CharacterDetail from './pages/CharacterDetail/CharacterDetail.tsx'

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route path="/" element={<CharacterList />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
        </Routes>
      </Router>
    </FavoritesProvider>
  )
}

export default App
