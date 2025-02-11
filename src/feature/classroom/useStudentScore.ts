import { useDispatch, useSelector } from "react-redux";
import { updateStudentScore } from "../../store/slices/classroomSlice";
import { RootState } from "../../store";

type UseStudentScoreProps = {
  id: string;
};

export function useStudentScore({ id }: UseStudentScoreProps) {
  const dispatch = useDispatch();
  const score = useSelector(
    (state: RootState) =>
      state.classroom.info?.students.find((student) => student.id === id)?.score
  );

  const changeScore = (score: number) => {
    dispatch(updateStudentScore({ id, score }));
  };

  return { score: score ?? 0, changeScore };
}
