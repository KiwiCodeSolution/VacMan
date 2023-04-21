/* eslint-disable prettier/prettier */
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { BaseQueryFn, createApi } from "@reduxjs/toolkit/query/react";
import { TcurrencyList } from "assets/currencyList";

// interface INote {
//   date: number;
//   text: string;
// }
export interface IAction {
  date: number;
  name: string;
  deadline?: number;
  fulfilled?: boolean;
}
export interface IVacancy {
  _id: string;
  companyName: string;
  companyURL: string;
  source: string;
  sourceURL: string;
  position: string;
  salaryMin: number;
  salaryMax: number;
  currency: "USD" | "Euro" | "local";
  notes: string;
  actions: IAction[];
  userRank: number;
  archived: boolean;
  cardColor: string;
}

// eslint-disable-next-line prettier/prettier
const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" }
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
    };
// const baseURL = "https://kiwicode.tech:5000/";
const baseUrl = "https://vacmanserver-production.up.railway.app/";
// const baseUrl = "http://localhost:3030/";

export const vacancyAPI = createApi({
  reducerPath: "vacancies",
  baseQuery: axiosBaseQuery({ baseUrl }),
  tagTypes: ["vacancies"],
  endpoints: builder => ({
    getVacancies: builder.query<{ data: IVacancy[] }, void>({
      query: () => ({ url: "vacancy", method: "GET" }),
      // keepUnusedDataFor: 3,
      providesTags: ["vacancies"],
    }),
    // getVacancyById: builder.query<IVacancy, string>({
    //   query: id => ({ url: `vacancy/${id}`, method: 'GET' }),
    //   providesTags: ['vacancies'],
    // }),
    addVacancy: builder.mutation<{ message: string; data: IVacancy }, Partial<IVacancy>>({
      query: data => ({ url: "vacancy", method: "POST", data }),
      invalidatesTags: ["vacancies"],
    }),
    updateVacancy: builder.mutation<{ message: string; data: IVacancy }, Partial<IVacancy>>({
      query: data => ({ url: `vacancy`, method: "PUT", data }),
      invalidatesTags: ["vacancies"],
    }),
    deleteVacancy: builder.mutation<{ message: string }, { _id: string }>({
      query: ({ _id }) => ({ url: `vacancy/${_id}`, method: "DELETE" }),
      invalidatesTags: ["vacancies"],
    }),
  }),
});

export const {
  useGetVacanciesQuery,
  // useGetVacancyByIdQuery,
  useAddVacancyMutation,
  useUpdateVacancyMutation,
  useDeleteVacancyMutation,
} = vacancyAPI;
