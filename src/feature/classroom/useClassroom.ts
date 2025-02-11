import { useSelector } from "react-redux";
import { useGetClassroomInfoQuery } from "../../store/api";
import { RootState } from "../../store";

export function useClassroom(classroomId: string) {
  const classroom = useSelector((state: RootState) => state.classroom.info);
  const { isLoading, isError } = useGetClassroomInfoQuery({ classroomId });
  return { classroom, isLoading, isError };
}
