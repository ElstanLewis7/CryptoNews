import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const exchangeRateApiHeaders = {
  'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com',
  'X-RapidAPI-Key': '83008fbd89mshe45c1f6b3c712afp1eb294jsnf5e9809787c5',
};

const baseUrl = 'https://alpha-vantage.p.rapidapi.com/query';

const createRequest = (url) => ({ url, headers: exchangeRateApiHeaders });

export const exchangeApi = createApi({
  reducerPath: 'exchangeApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getExchangeRate: builder.query({
      query: (cryptocurrency, exchangeCurrency) =>
        createRequest(
          `?function=CURRENCY_EXCHANGE_RATE&from_currency=${cryptocurrency}&to_currency=${exchangeCurrency}`
        ),
    }),
  }),
});

export const { useGetExchangeRateQuery } = exchangeApi;

// &apikey=${exchangeRateApiHeaders['X-RapidAPI-Key']}
