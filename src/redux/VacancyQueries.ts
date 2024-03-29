/* eslint-disable prettier/prettier */
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { BaseQueryFn, createApi } from "@reduxjs/toolkit/query/react";
import serverUrl from "../appConfig";
// eslint-disable-next-line import/no-cycle
import { RootState } from "./store";

export interface IAction {
  date: number;
  name: string;
  deadline: number;
  fulfilled?: boolean;
}

export interface IVacancy {
  _id: string;
  companyName: string;
  companyURL?: string;
  source?: string;
  sourceURL?: string;
  position?: string;
  salary?: string;
  notes?: string;
  actions: IAction[];
  userRank: number;
  archived: boolean;
  cardColor: string;
}

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
  async ({ url, method, data, params }, { getState }) => {
    const { token } = (getState() as RootState).user;
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const result = await axios({ url: baseUrl + url, method, data, params, headers });
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
  
const baseUrl = serverUrl;

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
    addVacancy: builder.mutation<{ message: string; data: IVacancy }, Partial<IVacancy>>({
      query: data => ({ url: "vacancy", method: "POST", data }),
      invalidatesTags: ["vacancies"],
    }),
    updateVacancy: builder.mutation<{ message: string; data: Partial<IVacancy> }, Partial<IVacancy>>({
      query: data => ({ url: `vacancy`, method: "PUT", data }),
      invalidatesTags: ["vacancies"],
    }),
    deleteVacancy: builder.mutation<{ message: string }, { _id: string }>({
      query: ({ _id }) => ({ url: `vacancy/${_id}`, method: "DELETE" }),
      invalidatesTags: ["vacancies"],
    }),
  }),
});

export const { useGetVacanciesQuery, useAddVacancyMutation, useUpdateVacancyMutation, useDeleteVacancyMutation } =
  vacancyAPI;
