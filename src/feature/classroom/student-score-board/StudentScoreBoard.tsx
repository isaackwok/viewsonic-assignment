import { MdPerson } from "react-icons/md";
import { StyledWindow, Header, ClassTitle, StyledTabs } from "./shared";
import { memo, useMemo, useState } from "react";
import { StudentListTab } from "./StudentListTab";
import { Student } from "../../../types/student";

const MemoizedStudentListTab = memo(StudentListTab);

const sortByScore = (students: Student[]) => {
  return students.slice().sort((a, b) => b.score - a.score);
};

const sortByName = (students: Student[]) => {
  return students.slice().sort((a, b) => a.name.localeCompare(b.name));
};

type StudentScoreBoardProps = {
  name: string;
  capacity: number;
  students: Student[];
};

export function StudentScoreBoard({
  name,
  capacity,
  students,
}: StudentScoreBoardProps) {
  const [sortBy, setSortBy] = useState<"name" | "score">("name");

  const sortedStudents = useMemo(() => {
    switch (sortBy) {
      case "score":
        return sortByScore(students);
      case "name":
        return sortByName(students);
      default:
        return students;
    }
  }, [sortBy, students]);

  const handleSort = (sort: typeof sortBy) => () => {
    setSortBy(sort);
  };

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
            content: <MemoizedStudentListTab students={sortedStudents} />,
          },
          group: {
            title: "Group",
            content: <div>Group</div>,
          },
        }}
        actions={[
          {
            text: "Sort by score",
            onClick: handleSort("score"),
          },
          {
            text: "Sort by name",
            onClick: handleSort("name"),
          },
        ]}
      />
    </StyledWindow>
  );
}
