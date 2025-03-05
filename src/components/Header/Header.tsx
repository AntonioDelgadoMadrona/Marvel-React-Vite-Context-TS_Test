import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FavoritesContext } from '../../context/FavoritesContext.tsx'
import { HeaderContainer, Logo, FavoritesButton } from './Header.styled.js'
import Heart from '../Heart/Heart.styled.js'

const Header = () => {
  const { favorites } = useContext(FavoritesContext)
  const navigate = useNavigate()

  return (
    <HeaderContainer>
      <Logo
        src="/Marvel.png"
        alt="marvel_logo"
        onClick={() => navigate('/')}
      ></Logo>
      <FavoritesButton onClick={() => navigate('/favorites')}>
        <Heart className="large" />
        {favorites.length}
      </FavoritesButton>
    </HeaderContainer>
  )
}

export default Header
