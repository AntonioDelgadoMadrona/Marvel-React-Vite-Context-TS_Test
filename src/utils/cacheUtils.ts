const CACHE_DURATION = 24 * 60 * 60 * 1000

export const setCache = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data))
  localStorage.setItem(`${key}Time`, Date.now().toString())
}

export const getCache = (key: string) => {
  const cachedData = localStorage.getItem(key)
  const cachedTime = localStorage.getItem(`${key}Time`)

  if (!cachedData || !cachedTime) return null

  const isCacheValid = Date.now() - Number(cachedTime) < CACHE_DURATION
  return isCacheValid ? JSON.parse(cachedData) : null
}

export const clearCache = (key: string) => {
  localStorage.removeItem(key)
  localStorage.removeItem(`${key}Time`)
}
