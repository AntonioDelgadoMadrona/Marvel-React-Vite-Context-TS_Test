import { Link } from 'react-router-dom'
import { Character } from '../../interfaces/Character.ts'
import { Card, CardImage, CardBody } from './CharacterCard.styled.js'
import Heart from '../Heart/Heart.styled.js'
import { useState } from 'react'

interface CharacterCardProps {
  character: Character
  isFavorite: boolean
  handleToggleFavorite: (id: number) => void
}

const CharacterCard = ({
  character,
  isFavorite,
  handleToggleFavorite,
}: CharacterCardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <Card
      className={isHovered ? 'hovered' : ''}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/character/${character.id}`}>
        <CardImage>
          <img src={character.img} alt={character.name} />
        </CardImage>
        <CardBody>
          <p>{character.name}</p>
          <button
            onClick={(event) => {
              event.preventDefault()
              event.stopPropagation()
              handleToggleFavorite(character.id)
            }}
          >
            <Heart className={isFavorite ? 'heart' : 'empty'} />
          </button>
        </CardBody>
      </Link>
    </Card>
  )
}

export default CharacterCard
