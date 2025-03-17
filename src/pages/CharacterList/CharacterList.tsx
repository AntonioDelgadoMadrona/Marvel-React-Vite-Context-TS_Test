import CharacterCard from '../../components/molecules/CharacterCard/CharacterCard.tsx'
import Search from '../../components/molecules/Search/Search.tsx'
import { useFavorites } from '../../context/FavoritesContext.tsx'
import { useCharacters } from '../../hooks/useCharacters.ts'
import {
  CharacterListContainer,
  CharacterGrid,
} from './CharacterList.styled.js'

function CharacterList() {
  const { characters, handleSearch, apiLoading } = useCharacters()
  const { favorites, handleFavorite } = useFavorites()

  return (
    <CharacterListContainer className={apiLoading ? 'loading' : ''}>
      <Search
        results={characters.length}
        handleSearch={handleSearch}
        loading={apiLoading}
      />
      <CharacterGrid data-testid="character-grid">
        {characters.map((characterItem) => (
          <CharacterCard
            key={characterItem.id}
            character={characterItem}
            isFavorite={favorites.some((fav) => fav.id === characterItem.id)}
            handleFavorite={handleFavorite}
          />
        ))}
      </CharacterGrid>
    </CharacterListContainer>
  )
}

export default CharacterList
