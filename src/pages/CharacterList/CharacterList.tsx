import CharacterCard from '../../components/CharacterCard/CharacterCard.tsx'
import { useCharacters } from '../../hooks/useCharacters.ts'
import {
  CharacterListContainer,
  CharacterGrid,
} from './CharacterList.styled.js'

function CharacterList() {
  const { characters, toggleFavorite, favorites } = useCharacters()
  return (
    <CharacterListContainer>
      <CharacterGrid>
        {characters.map((characterItem) => (
          <CharacterCard
            key={characterItem.id}
            character={characterItem}
            isFavorite={favorites.some((favId) => favId === characterItem.id)}
            handleToggleFavorite={toggleFavorite}
          />
        ))}
      </CharacterGrid>
    </CharacterListContainer>
  )
}

export default CharacterList
