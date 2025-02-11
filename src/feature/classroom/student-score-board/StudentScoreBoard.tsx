import { StudentCard } from "./StudentCard";
import { MdPerson } from "react-icons/md";
import { StyledWindow, Header, ClassTitle, Grid, StyledTabs } from "./shared";

type StudentScoreBoardProps = {
  name: string;
  capacity: number;
  students: {
    id: string;
    name: string;
    initialScore: number;
    isActive: boolean;
  }[];
};

export function StudentScoreBoard({
  name,
  capacity,
  students,
}: StudentScoreBoardProps) {
  return (
    <StyledWindow id="student-score-board">
      <Header>
        <ClassTitle>{name}</ClassTitle>
        <MdPerson size={20} /> {students.length}/{capacity}
      </Header>
      <StyledTabs
        tabs={{
          studentList: {
            title: "Student List",
            content: () => (
              <Grid>
                {students.map((student, idx) => (
                  <StudentCard
                    key={student.id}
                    name={student.name}
                    number={idx + 1}
                    initialScore={student.initialScore}
                    isActive={student.isActive}
                  />
                ))}
              </Grid>
            ),
          },
          group: {
            title: "Group",
            content: () => <div>Group</div>,
          },
        }}
      />
    </StyledWindow>
  );
}
