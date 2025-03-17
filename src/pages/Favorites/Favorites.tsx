import { useState } from 'react'
import CharacterCard from '../../components/molecules/CharacterCard/CharacterCard.tsx'
import Search from '../../components/molecules/Search/Search.tsx'
import { useFavorites } from '../../context/FavoritesContext.tsx'
import { FavoritesContainer, Title, CharacterGrid } from './Favorites.styled.js'

function Favorites() {
  const { favorites, handleFavorite } = useFavorites()
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
            handleFavorite={handleFavorite}
          />
        ))}
      </CharacterGrid>
    </FavoritesContainer>
  )
}

export default Favorites
