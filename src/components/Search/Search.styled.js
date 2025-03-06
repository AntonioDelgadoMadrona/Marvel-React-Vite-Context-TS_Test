import styled from 'styled-components'

const SearchForm = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  margin: 2rem 0;
`

const SearchContainer = styled.div`
  display: grid;
  grid-template-columns: 30px 1fr;
  align-items: center;
  border-bottom: 1px solid black;
  height: 35px;
`

const SearchIcon = styled.img`
  height: 15px;
`

const SearchInput = styled.input`
  border: 0;
  width: 100%;
  outline: none;
  text-transform: uppercase;
  font-size: 0.8rem;
  background: transparent;

  &::placeholder {
    color: #c7bebc;
  }
`

const SearchResults = styled.span`
  font-size: 0.8rem;
  text-transform: uppercase;
  margin: 1rem 0;
`
export { SearchForm, SearchContainer, SearchIcon, SearchInput, SearchResults }
