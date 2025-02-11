import { Grid } from "./shared";
import { StudentCard } from "./StudentCard";
import { Student } from "../../../types/student";

type StudentListTabProps = {
  students: Student[];
};

export function StudentListTab({ students }: StudentListTabProps) {
  return (
    <Grid>
      {students.map((student, idx) => (
        <StudentCard
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
