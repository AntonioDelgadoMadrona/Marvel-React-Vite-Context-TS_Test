import styled from 'styled-components'

const Heart = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 20px;
  height: 18px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 10px;
    height: 15px;
    border-radius: 10px 10px 0 0;
    background: #e62429;
    transition: background 0.35s ease-in-out;
  }

  &::before {
    left: 10px;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }

  &::after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }

  // Diferent Variants
  &.large {
    width: 30px;
    height: 28px;

    &::before,
    &::after {
      width: 15px;
      height: 22px;
      border-radius: 20px 20px 0 0;
    }

    &::before {
      left: 15px;
    }
  }

  &.white {
    &::before,
    &::after {
      background: white;
    }
  }

  &.empty {
    &::before,
    &::after {
      background: #fafafa;
    }
  }

  // Father hovered
  .hovered &.heart::before,
  .hovered &.heart::after {
    background: white; /* Cambia a blanco en hover */
  }
`

export default Heart
