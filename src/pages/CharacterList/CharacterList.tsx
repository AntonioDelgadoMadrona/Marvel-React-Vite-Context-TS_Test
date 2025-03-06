import CharacterCard from '../../components/CharacterCard/CharacterCard.tsx'
import Search from '../../components/Search/Search.tsx'
import { useCharacters } from '../../hooks/useCharacters.ts'
import {
  CharacterListContainer,
  CharacterGrid,
} from './CharacterList.styled.js'

function CharacterList() {
  const {
    characters,
    toggleFavorite,
    favorites,
    handleSearch,
    loadingCharacters,
  } = useCharacters()

  return (
    <CharacterListContainer className={loadingCharacters ? 'loading' : ''}>
      <Search
        results={characters.length}
        handleSearch={handleSearch}
        loading={loadingCharacters}
      />
      <CharacterGrid data-testid="character-grid">
        {characters.map((characterItem) => (
          <CharacterCard
            key={characterItem.id}
            character={characterItem}
            isFavorite={favorites.some((fav) => fav.id === characterItem.id)}
            handleToggleFavorite={toggleFavorite}
          />
        ))}
      </CharacterGrid>
    </CharacterListContainer>
  )
}

export default CharacterList
