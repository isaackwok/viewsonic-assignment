import { BaseQueryFn, createApi } from "@reduxjs/toolkit/query/react";
import { getClassroomInfoById } from "../services/get-classroom-by-id";

const customBaseQuery: BaseQueryFn<{ classroomId: string }> = async ({
  classroomId,
}) => {
  const data = await getClassroomInfoById(classroomId);
  return { data };
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    getClassroomInfo: builder.query<
      Awaited<ReturnType<typeof getClassroomInfoById>>,
      { classroomId: string }
    >({
      query: ({ classroomId }) => ({ classroomId }),
    }),
  }),
});

export const { useGetClassroomInfoQuery, util } = api;
