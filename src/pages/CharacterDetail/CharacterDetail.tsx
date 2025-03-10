import { useParams } from 'react-router-dom'
import {
  DetailsContainer,
  DetailsSection,
  CharacterImg,
  CharacterInfo,
  NameRow,
  DescriptionRow,
  ComicsSection,
  ComicsContainer,
  ComicCard,
  ComicImage,
  ComicBody,
} from './CharacterDetail.styled.js'
import Heart from '../../components/Heart/Heart.styled.js'
import { useCharacters } from '../../hooks/useCharacters.ts'
import { useEffect } from 'react'
import { useFavorites } from '../../context/FavoritesContext.tsx'
import { useComics } from '../../hooks/useComics.ts'

function CharacterDetail() {
  const { id: charId }: { id?: string } = useParams()

  const { apiLoading, getCharacterDetails, characterDetails } = useCharacters()
  const { favorites, handleFavorite } = useFavorites()
  const { comicsLoading, comicsList, getComicList } = useComics()

  useEffect(() => {
    if (charId) {
      getCharacterDetails(charId)
      getComicList(charId)
    }
  }, [charId, getCharacterDetails, getComicList])

  if (!characterDetails) {
    return <DetailsContainer className="loading"></DetailsContainer>
  }

  const { id, name, description, img } = characterDetails
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
        <ComicsContainer>
          {comicsLoading ? 'Loading...' : ''}
          {comicsList.map((comic) => (
            <ComicCard key={comic.id}>
              <ComicImage>
                <img src={comic.img} alt={comic.title} />
              </ComicImage>
              <ComicBody>
                <p>{comic.title}</p>
                <p>{new Date(comic.saleDate).getFullYear()}</p>
              </ComicBody>
            </ComicCard>
          ))}
        </ComicsContainer>
      </ComicsSection>
    </DetailsContainer>
  )
}

export default CharacterDetail
