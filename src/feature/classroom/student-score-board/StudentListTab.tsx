import { Grid } from "./shared";
import { StudentCard } from "./StudentCard";
import { Student } from "../../../types/student";
import { memo } from "react";

type StudentListTabProps = {
  students: Student[];
};

const MemoizedStudentCard = memo(StudentCard);

export function StudentListTab({ students }: StudentListTabProps) {
  return (
    <Grid>
      {students.map((student, idx) => (
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
