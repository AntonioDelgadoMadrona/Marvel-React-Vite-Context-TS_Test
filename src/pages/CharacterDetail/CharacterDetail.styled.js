import styled from 'styled-components'

const DetailsContainer = styled.div`
  display: block;
  border-top: 5px solid #151515;
  color: #fafafa;
  padding-bottom: 50px;

  &.loading {
    border-color: #e62429;
  }
`

const DetailsSection = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 500px));
  gap: 20px;
  background: #000;
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
    font-size: 2rem;
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
  font:
    400 16px/1.1 RobotoCondensed Bold,
    Trebuchet MS,
    Helvetica,
    Arial,
    sans-serif;
`

const ComicsSection = styled.div`
  display: block;
  margin: 30px auto;
  width: 100%;
  max-width: 800px;
  padding: 10px 20px;

  h2 {
    text-transform: uppercase;
    font-size: 1.5rem;
    color: #000;
  }
`

const ComicsContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
  display: flex;
  gap: 16px;
  padding: 8px 0;
  color: #000;

  &::-webkit-scrollbar {
    height: 5px;
    background-color: rgb(212, 207, 207);
  }

  &::-webkit-scrollbar-thumb {
    background-color: #e62429;
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
  color: #000;

  p:first-child {
    font-size: 0.9rem;
    font-weight: bold;
    width: 100%;
    text-wrap: auto;
  }

  p {
    font-size: 0.8rem;
    color: #000;
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
