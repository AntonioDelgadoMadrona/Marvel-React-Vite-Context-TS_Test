import { Link } from 'react-router-dom'
import { useFavorites } from '../../../context/FavoritesContext.tsx'
import { HeaderContainer, Logo } from './Header.styled.js'
import FavoriteButton from '../../molecules/FavoritesButton/FavoritesButton.tsx'

const Header = () => {
  const { favorites } = useFavorites()

  return (
    <HeaderContainer>
      <Link to="/">
        <Logo src="/Marvel.png" alt="marvel_logo" />
      </Link>
      <Link to="/favorites">
        <FavoriteButton count={favorites.length} />
      </Link>
    </HeaderContainer>
  )
}

export default Header
