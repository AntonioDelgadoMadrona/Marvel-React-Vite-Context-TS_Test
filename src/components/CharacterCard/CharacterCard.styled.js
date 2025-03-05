import styled from 'styled-components'

const Card = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 6px 0 4px;
  background: #000;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #e62429;
    top: -100%;
    left: 0;
    transition: top 0.3s ease-in-out;
  }

  &::after {
    border-color: transparent #fff transparent transparent;
    border-style: solid;
    border-width: 12px 12px 0 0;
    bottom: 0;
    content: '';
    position: absolute;
    right: 0;
    top: auto;
    z-index: 40;
  }

  &:hover::before {
    top: 0;
  }

  a {
    text-decoration: none;
    position: relative;
    z-index: 2;
    color: white;
  }

  &:hovered .heart {
    background: white !important; /* Cambia a blanco cuando el corazón es favorito y la card está en hover */
  }
`

const CardImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;

  margin: 0;
  overflow: hidden;
  padding: 0;
  border-bottom: 5px solid #e62429;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const CardBody = styled.div`
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;

  p {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0;
    font:
      400 16px/1.1 RobotoCondensed Bold,
      Trebuchet MS,
      Helvetica,
      Arial,
      sans-serif;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #fff;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
      transition: transform 0.3s ease-in-out;
    }
  }
`

export { Card, CardImage, CardBody }
