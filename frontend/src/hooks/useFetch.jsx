import { useState, useEffect } from 'react'

export default function useFetch(url, dependencies = []) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true

    setLoading(true)
    setError(null)

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Unable to fetch the requested data.')
        }
        return response.json()
      })
      .then((result) => {
        if (isMounted) {
          setData(result)
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message || 'Something went wrong.')
        }
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false)
        }
      })

    return () => {
      isMounted = false
    }
  }, dependencies)

  return { data, loading, error }
}
