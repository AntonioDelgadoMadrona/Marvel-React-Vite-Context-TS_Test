import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GlobalStyles } from './App.styled.js'
import { FavoritesProvider } from './context/FavoritesContext.tsx'
import Header from './components/Header/Header.tsx'
import CharacterList from './pages/CharacterList/CharacterList.tsx'
import Favorites from './pages/Favorites/Favorites.tsx'

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route path="/" element={<CharacterList />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </FavoritesProvider>
  )
}

export default App
