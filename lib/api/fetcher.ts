// lib/api/fetcher.ts
export async function fetchApi<T>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
      },
    })

    if (!res.ok) {
      throw new Error(`API fetch failed: ${res.status} ${res.statusText}`)
    }

    const data = await res.json()
    return data as T
  } catch (error: any) {
    console.error('fetchApi error:', error.message)
    throw error
  }
}
