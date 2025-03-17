import styled from 'styled-components'

const Card = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 6px 0 4px;
  background: var(--secondary-color);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--primary-color);
    top: -100%;
    left: 0;
    transition: top 0.3s ease-in-out;
  }

  &::after {
    border-color: transparent var(--tertiary-color) transparent transparent;
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
    color: var(--tertiary-color);
  }
`

const CardImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;

  margin: 0;
  overflow: hidden;
  padding: 0;
  border-bottom: 5px solid var(--primary-color);

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
    font-family: var(--font-primary);
    font-size: var(--font-size-md);
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: var(--tertiary-color);
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
