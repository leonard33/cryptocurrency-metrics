import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "0e23dfd609mshd4ac7e0b2521576p13a5adjsn09d2b8c5d60c",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com/coins";

// link the url with the headers
const createrequest = (baseUrl) => ({ baseUrl, headers: cryptoApiHeaders });

// create a fetch api
export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createrequest("/coins"),
    }),
    getCryptosDetail: builder.query({
      query: (coinid) => createrequest(`/coin/${coinid}`),
    }),
  }),
});

// export getcryptos as a hook created by redux to get all the datafor your query
export const { useGetCryptosQuery, useGetCryptosDetailQuery } = cryptoApi;
