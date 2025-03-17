import { StyledButton } from './FavoritesButton.styled.js'
import Heart from '../../atoms/Heart/Heart.styled.js'

interface FavoriteButtonProps {
  count: number
}

const FavoriteButton = ({ count }: FavoriteButtonProps) => {
  return (
    <StyledButton>
      <Heart className="large" />
      {count}
    </StyledButton>
  )
}

export default FavoriteButton
