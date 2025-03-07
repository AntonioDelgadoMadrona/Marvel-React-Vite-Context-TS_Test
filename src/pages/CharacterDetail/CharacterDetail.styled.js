import styled from 'styled-components'

const DetailsContainer = styled.div`
  display: block;
  border-top: 5px solid #151515;
  color: #fafafa;

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
`

const CharacterInfo = styled.div`
  width: 100%;
  height: 100%;
  align-content: center;
  position: relative;
  display: grid;
  grid-template-rows: auto auto;
  gap: 25px;
  padding: 20px;
`

const NameRow = styled.div`
  position: relative;

  & > h1 {
    text-transform: uppercase;
    font-size: 2rem;
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

  h2 {
    text-transform: uppercase;
    font-size: 1.5rem;
    color: #000;
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
}
