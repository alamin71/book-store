import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseUrl from "../../../utils/baseUrl";

const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/orders`,
    credentials: "include",
  }),
  tagTypes: ["Orders"],
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (newOrder) => ({
        url: "/",
        method: "POST",
        body: newOrder,
        credentials: "include",
      }),
      invalidatesTags: ["Orders"],
    }),

    getSingleOrder: builder.query({
      query: () => ({
        url: "/",
      }),
      providesTags: ["Orders"],
    }),

    getAllOrders: builder.query({
      query: () => ({
        url: "/",
      }),
      providesTags: ["Orders"],
    }),

    getOrderByEmail: builder.query({
      query: (email) => ({
        url: `/email/${email}`,
      }),
      providesTags: ["Orders"],
    }),
    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Orders"],
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetSingleOrderQuery,
  useGetOrderByEmailQuery,
  useGetAllOrdersQuery,
  useDeleteOrderMutation,
} = ordersApi;

export default ordersApi;
