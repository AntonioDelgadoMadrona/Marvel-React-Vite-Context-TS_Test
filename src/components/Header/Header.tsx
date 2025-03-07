import { Link } from 'react-router-dom'
import { useFavorites } from '../../context/FavoritesContext.tsx'
import { HeaderContainer, Logo, FavoritesButton } from './Header.styled.js'
import Heart from '../Heart/Heart.styled.js'

const Header = () => {
  const { favorites } = useFavorites()

  return (
    <HeaderContainer>
      <Link to="/">
        <Logo src="/Marvel.png" alt="marvel_logo" />
      </Link>
      <Link to="/favorites">
        <FavoritesButton>
          <Heart className="large" />
          {favorites.length}
        </FavoritesButton>
      </Link>
    </HeaderContainer>
  )
}

export default Header
