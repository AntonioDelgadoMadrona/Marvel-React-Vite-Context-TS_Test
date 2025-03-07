import { useState } from 'react'
import CharacterCard from '../../components/CharacterCard/CharacterCard.tsx'
import Search from '../../components/Search/Search.tsx'
import { useCharacters } from '../../hooks/useCharacters.ts'
import { FavoritesContainer, Title, CharacterGrid } from './Favorites.styled.js'

function Favorites() {
  const { toggleFavorite, favorites } = useCharacters()
  const [searchFav, setSearchFav] = useState('')

  const handleSearchFavorite = (favName: string) => {
    setSearchFav(favName.toLowerCase())
  }

  const filteredFavorites = favorites.filter((favItem) =>
    favItem.name.toLowerCase().includes(searchFav),
  )

  return (
    <FavoritesContainer>
      <Title>Favorites</Title>
      <Search
        results={filteredFavorites.length}
        handleSearch={handleSearchFavorite}
      />
      <CharacterGrid data-testid="character-grid-favorites">
        {filteredFavorites.map((favItem) => (
          <CharacterCard
            key={favItem.id}
            character={favItem}
            isFavorite={true}
            handleToggleFavorite={toggleFavorite}
          />
        ))}
      </CharacterGrid>
    </FavoritesContainer>
  )
}

export default Favorites
