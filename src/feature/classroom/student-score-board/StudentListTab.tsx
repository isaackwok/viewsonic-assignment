import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { Grid, sortByName, sortByScore } from "./shared";
import { StudentCard } from "./StudentCard";
import { memo, useMemo } from "react";

type StudentListTabProps = {
  sortBy: "name" | "score";
};

const MemoizedStudentCard = memo(StudentCard);

export function StudentListTab({ sortBy }: StudentListTabProps) {
  const students = useSelector(
    (state: RootState) => state.classroom.info?.students || {}
  );
  const sortedStudents = useMemo(() => {
    const studentsArray = Object.values(students);
    return studentsArray.slice().sort((a, b) => {
      switch (sortBy) {
        case "name":
          return sortByName(a.name, b.name);
        case "score":
          return sortByScore(a.score, b.score);
      }
    });
  }, [students, sortBy]);
  return (
    <Grid>
      {sortedStudents.map((student, idx) => (
        <MemoizedStudentCard
          key={student.id}
          name={student.name}
          number={idx + 1}
          isActive={student.isActive}
          id={student.id}
        />
      ))}
    </Grid>
  );
}
