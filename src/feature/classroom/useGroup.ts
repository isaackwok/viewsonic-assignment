import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { updateGroupScore } from "../../store/slices/classroomSlice";
import { useMemo } from "react";
import { Classroom } from "../../types/classroom";
import { Group } from "../../types/group";

export function useGroup(groupId: string) {
  const dispatch = useDispatch();
  const { group, students } = useSelector<
    RootState,
    { group: Group | null; students: Classroom["students"] | null }
  >((state: RootState) => ({
    group: state.classroom.info?.groups[groupId] || null,
    students: state.classroom.info?.students || null,
  }));

  const groupDetail = useMemo(() => {
    if (!group || !students) return null;
    return {
      ...group,
      students: group.students.map((studentId) => students[studentId]),
    };
  }, [group, students]);

  const changeScore = (score: number) => {
    dispatch(updateGroupScore({ id: groupId, score }));
  };
  return { group: groupDetail, changeScore };
}
