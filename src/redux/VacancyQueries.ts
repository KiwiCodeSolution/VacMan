import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { BaseQueryFn, createApi } from '@reduxjs/toolkit/query/react';

interface INote {
  data: number;
  text: string;
}
interface IAction {
  name: string;
  deadline: number;
}
interface IVacancy {
  id: string;
  companyName: string;
  companyURL: string;
  source: string;
  sourceURL: string;
  position: string;
  salary: number;
  currency: string;
  notes: INote[];
  actions: IAction[];
  status: string;
  userRank: number;
  archived: boolean;
}

// eslint-disable-next-line prettier/prettier
const axiosBaseQuery = ({ baseUrl }: { baseUrl: string } = {baseUrl: ''}): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    try {
      // console.log('Header auth:', axios.defaults.headers.common.Authorization);
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

export const vacancyAPI = createApi({
  reducerPath: 'vacancies',
  baseQuery: axiosBaseQuery({ baseUrl: 'https://vacmanserver-production.up.railway.app/' }),
  tagTypes: ['vacancies'],
  endpoints: builder => ({
    getVacancies: builder.query<IVacancy[], void>({
      query: () => ({ url: 'vacancy', method: 'GET' }),
      keepUnusedDataFor: 3,
      providesTags: ['vacancies'],
    }),
    // getVacancyById: builder.query<IVacancy, string>({
    //   query: vacancyId => `vacancy/${vacancyId}`,
    //   providesTags: ['vacancies'],
    // }),
    addVacancy: builder.mutation<IVacancy, void>({
      query: data => ({
        url: 'vacancy',
        method: 'POST',
        data,
      }),
      invalidatesTags: ['vacancies'],
    }),
    updateVacancy: builder.mutation<IVacancy, { data: Partial<IVacancy> }>({
      query: ({ data }) => ({
        url: `vacancy`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['vacancies'],
    }),
    deleteVacancy: builder.mutation({
      query: id => ({
        url: `vacancy/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['vacancies'],
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