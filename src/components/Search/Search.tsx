import { useState, useEffect } from 'react'
import {
  SearchForm,
  SearchContainer,
  SearchIcon,
  SearchInput,
  SearchResults,
} from './Search.styled.js'
import SearchIco from '../../assets/search.png'
import { useDebounce } from '../../hooks/useDebounce.ts'

interface SearchProps {
  results: number
  handleSearch: (value: string) => void
  loading?: boolean
}

const Search = ({ results, handleSearch, loading = false }: SearchProps) => {
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 1500)
  const [lastSearch, setLastSearch] = useState<string>('')

  useEffect(() => {
    if (debouncedSearch.trim() !== lastSearch.trim()) {
      handleSearch(debouncedSearch)
      setLastSearch(debouncedSearch)
    }
  }, [debouncedSearch, handleSearch, lastSearch])

  return (
    <SearchForm>
      <SearchContainer>
        <SearchIcon src={SearchIco} alt="Search Icon" />
        <SearchInput
          type="text"
          placeholder="Search a character..."
          value={search}
          onChange={({ target }: any) => setSearch(target.value)}
          disabled={loading}
        />
      </SearchContainer>
      <SearchResults>
        {results} {results === 1 ? 'result' : 'results'}
      </SearchResults>
    </SearchForm>
  )
}

export default Search
