import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GlobalStyles } from './App.styled.ts'
import { FavoritesProvider } from './contexts/FavoritesContext.tsx'

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
        </Routes>
      </Router>
    </FavoritesProvider>
  )
}

export default App
