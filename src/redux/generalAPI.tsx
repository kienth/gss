// NOTE: when using this generalAPI, please pass the three props. {url, method, body}

// url: used to access API from back-end. this must be a string type
// method: used either GET, POST, PUT, DELETE
// body: the parameter that must sent to the back-end

import Cookies from "js-cookie";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const { VITE_APP_ENDPOINT } = import.meta.env;
// const AUTH_TOKEN =
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI4MmEyYWZiNi0xZWY3LTExZWYtYWNlOC0wMmQzZjI4MjQwZDkiLCJyb2xlIjoiQ09NTU9OIiwiZmlyc3RuYW1lIjoiZ2Vyem9uIiwibGFzdG5hbWUiOiJ1ZGFuZyIsImltYWdlIjoiaHR0cHM6Ly91aS1hdmF0YXJzLmNvbS9hcGkvP25hbWU9Z2Vyem9uJmJvbGQ9dHJ1ZSZsZW5ndGg9MSZjb2xvcj1mZmZmZmYmYmFja2dyb3VuZD0wMDk4YTYmc2l6ZT05NiIsImVtYWlsIjoiZ2Vyem9uLnVkYW5nQGdtYWlsLmNvbSIsInBob25lIjoiIiwicmVmcmVzaEtleSI6IlB4Vi90UEpqTnN1VG5JQXNrVmU5Smc9PSIsImlhdCI6MTcxNzEyMzg4NH0.2WJE8WMzYHITSv31wUJ76w1fUN1voYDBG86y1s3rPRI";

const AUTH_TOKEN = Cookies.get("token");

export const generalAPI = createApi({
    reducerPath: "generalApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${VITE_APP_ENDPOINT}/credit`,
        prepareHeaders(headers) {
            headers.set("authorization", `${AUTH_TOKEN}`);
            return headers;
        },
    }),
    tagTypes: ["generalApi"],
    endpoints: (builder) => ({
        fetch: builder.query({
            query: (data) => data,
            providesTags: (result) =>
                result && result.list
                    ? [
                          ...result.list.map(
                              ({
                                  id,
                              }: {
                                  id: { data: number[]; type: string };
                              }) => ({
                                  type: "generalApi" as const,
                                  id,
                              })
                          ),
                          { type: "generalApi", id: "LIST" },
                      ]
                    : [{ type: "generalApi", id: "LIST" }],
        }),
        action: builder.mutation({
            query: (data) => data,
            invalidatesTags: [{ type: "generalApi", id: "LIST" }],
        }),
    }),
});

export const { useFetchQuery, useActionMutation } = generalAPI;
