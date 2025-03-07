import { useParams } from 'react-router-dom'
import {
  DetailsContainer,
  DetailsSection,
  CharacterImg,
  CharacterInfo,
  NameRow,
  DescriptionRow,
  ComicsSection,
} from './CharacterDetail.styled.js'
import Heart from '../../components/Heart/Heart.styled.js'
import { useCharacters } from '../../hooks/useCharacters.ts'
import { useEffect } from 'react'
import { useFavorites } from '../../context/FavoritesContext.tsx'

function CharacterDetail() {
  const { id: charId }: { id?: string } = useParams()

  const { apiLoading, getCharacterDetails, characterDetails } = useCharacters()
  const { favorites, handleFavorite } = useFavorites()

  useEffect(() => {
    if (charId) getCharacterDetails(charId)
  }, [charId, getCharacterDetails])

  if (!characterDetails) {
    return <DetailsContainer className="loading"></DetailsContainer>
  }

  const { id, name, description, img, comics } = characterDetails
  const isFavorite = favorites.some((fav) => fav.id === id)

  return (
    <DetailsContainer className={apiLoading ? 'loading' : ''}>
      <DetailsSection>
        <CharacterImg>
          <img src={img} alt={name} />
        </CharacterImg>
        <CharacterInfo>
          <NameRow>
            <h1>{name}</h1>
            <button
              onClick={() => {
                handleFavorite({ id, name, img })
              }}
            >
              <Heart className={`large ${isFavorite ? '' : 'empty'}`} />
            </button>
          </NameRow>
          <DescriptionRow>
            {description || 'No description available.'}
          </DescriptionRow>
        </CharacterInfo>
      </DetailsSection>

      <ComicsSection>
        <h2>Comics</h2>
      </ComicsSection>
    </DetailsContainer>
  )
}

export default CharacterDetail
