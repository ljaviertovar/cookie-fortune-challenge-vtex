import { useEffect, useState } from 'react'

import axios from 'axios'

import { sleep } from '../utils'

interface CookieFortune {
  DocumentId: string
  IdcookieFortune: number
  CookieFortune: string
}

export default function useCookieFortunes() {
  const [cookieFortunes, setCookieFortunes] = useState<CookieFortune[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isAddLoading, setIsAddLoading] = useState(false)
  const [isDeleteLoading, setIsDeleteLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const getCookieFortunes = async () => {
    setIsLoading(true)
    setIsError(false)

    try {
      const response = await axios.get('/api/dataentities/CF/search?_fields=id,CookieFortune,createdIn&_sort=createdIn DESC&_cache=no', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'REST-Range': 'resources=0-100',
          'Cache-Control': 'no-cache',
        },
      })

      const data = response.data
      const formattedData = data.map((item: any, index: number) => ({
        DocumentId: item.id,
        IdcookieFortune: index + 1,
        CookieFortune: item.CookieFortune,
      }))

      setCookieFortunes(formattedData)

    } catch (error) {
      console.error('Error al obtener los registros:', error)
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  const addCookieFortune = async (newCookieFortune: string) => {
    setIsAddLoading(true)
    setIsError(false)

    const newRecord = { CookieFortune: newCookieFortune }

    try {
      const response = await axios.post('/api/dataentities/CF/documents', newRecord)

      if (response.status === 201) {
        await sleep(5000)
        getCookieFortunes()
      }
    } catch (error) {
      console.error('Error al agregar registro:', error)
      setIsError(true)
    } finally {
      setIsAddLoading(false)
    }
  }

  const deleteCookieFortune = async (documentId: string) => {
    setIsDeleteLoading(true)
    setIsError(false)

    try {
      const response = await axios.delete(`/api/dataentities/CF/documents/${documentId}`)

      if (response.status === 204) {
        await sleep(5000)
        getCookieFortunes()
      }
    } catch (error) {
      console.error('Error al eliminar el registro:', error)
      setIsError(true)
    } finally {
      setIsDeleteLoading(false)
    }
  }

  useEffect(() => {
    getCookieFortunes()
  }, [])

  return {
    cookieFortunes,
    isLoading,
    isAddLoading,
    isDeleteLoading,
    isError,
    getCookieFortunes,
    addCookieFortune,
    deleteCookieFortune,
  }
}
