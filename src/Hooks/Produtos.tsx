import { useEffect, useState } from 'react'

export function useFetch<T = unknown>(url: string) {
  const [data, setData] = useState<T | undefined>(undefined)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url)
      const json = await response.json()
      setData(json)
    }

    fetchData().then((r) => r)
  }, [url])

  return { data }
}
