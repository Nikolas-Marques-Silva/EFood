import { useEffect, useState } from 'react'

export function useFetch<T = undefined>(url: string) {
  const [data, setData] = useState<T | undefined>()

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => setData(response))
  }, [url])

  return { data }
}
