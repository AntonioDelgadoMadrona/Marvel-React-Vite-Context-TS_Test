import styled from 'styled-components'

const DetailsContainer = styled.div`
  display: block;
  border-top: 5px solid #151515;
  color: var(--tertiary-color);
  padding-bottom: 50px;

  &.loading {
    border-color: var(--primary-color);
  }
`

const DetailsSection = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 500px));
  gap: 20px;
  background: var(--secondary-color);
  justify-content: center;
`

const CharacterImg = styled.div`
  width: 300px;
  height: auto;
  margin: 5px auto;

  & > img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`

const CharacterInfo = styled.div`
  width: 100%;
  height: 100%;
  align-content: center;
  position: relative;
  display: grid;
  grid-template-rows: auto auto;
  gap: 25px;
  padding: 30px 20px;
`

const NameRow = styled.div`
  position: relative;

  & > h1 {
    text-transform: uppercase;
    font-size: var(--font-size-lg);
    width: 90%;
  }

  button {
    position: absolute;
    right: 0;
    top: 0;
    background: transparent;
    border: none;
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
      transition: transform 0.3s ease-in-out;
    }
  }
`

const DescriptionRow = styled.p`
  font-family: var(--font-secondary);
`

const ComicsSection = styled.div`
  display: block;
  margin: 30px auto;
  width: 100%;
  max-width: 800px;
  padding: 10px 20px;

  h2 {
    text-transform: uppercase;
    font-size: var(--font-size-lg);
    color: var(--secondary-color);
  }
`

const ComicsContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
  display: flex;
  gap: 16px;
  padding: 8px 0;
  color: var(--secondary-color);

  &::-webkit-scrollbar {
    height: 5px;
    background-color: rgb(212, 207, 207);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--primary-color);
  }
`

const ComicCard = styled.div`
  flex: 0 0 auto;
  width: 200px;
  padding: 8px;
  text-align: center;
`

const ComicImage = styled.div`
  width: 180px;
  height: auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ComicBody = styled.div`
  display: block;
  text-align: left;
  width: 180px;
  height: auto;
  padding: 10px 0;
  color: var(--secondary-color);

  p:first-child {
    font-size: var(--font-size-md);
    font-weight: bold;
    width: 100%;
    text-wrap: auto;
  }

  p {
    font-size: var(--font-size-sm);
    color: var(--secondary-color);
    margin-top: 10px;
  }
`

export {
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
}
