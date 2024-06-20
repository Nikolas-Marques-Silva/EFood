import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Plate } from '../Pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Plate[], void>({
      query: () => '/restaurantes'
    }),
    getPlates: builder.query<Plate, string>({
      query: (id) => `/restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantsQuery, useGetPlatesQuery } = api
export default api
