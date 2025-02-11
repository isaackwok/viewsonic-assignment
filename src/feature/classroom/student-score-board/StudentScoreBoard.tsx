import { MdPerson } from "react-icons/md";
import { StyledWindow, Header, ClassTitle, StyledTabs } from "./shared";
import { memo, useState } from "react";
import { Classroom } from "../../../types/classroom";
import { GroupTab } from "./GroupTab";
import { StudentListTab } from "./StudentListTab";

const MemoizedStudentListTab = memo(StudentListTab);
const MemoizedGroupTab = memo(GroupTab);
type StudentScoreBoardProps = {
  name: string;
  capacity: number;
  students: Classroom["students"];
};

export function StudentScoreBoard({
  name,
  capacity,
  students,
}: StudentScoreBoardProps) {
  const [studentSortBy, setStudentSortBy] = useState<"name" | "score">("name");
  const [groupSortBy, setGroupSortBy] = useState<"name" | "score">("name");

  const handleStudentSort = (sort: typeof studentSortBy) => () => {
    setStudentSortBy(sort);
  };

  const handleGroupSort = (sort: typeof groupSortBy) => () => {
    setGroupSortBy(sort);
  };

  return (
    <StyledWindow id="student-score-board">
      <Header>
        <ClassTitle>{name}</ClassTitle>
        <MdPerson size={20} /> {Object.keys(students).length}/{capacity}
      </Header>
      <StyledTabs
        tabs={{
          studentList: {
            title: "Student List",
            content: <MemoizedStudentListTab sortBy={studentSortBy} />,
            actions: [
              {
                text: "Sort by score",
                onClick: handleStudentSort("score"),
              },
              {
                text: "Sort by name",
                onClick: handleStudentSort("name"),
              },
            ],
          },
          group: {
            title: "Group",
            content: <MemoizedGroupTab sortBy={groupSortBy} />,
            actions: [
              {
                text: "Sort by score",
                onClick: handleGroupSort("score"),
              },
              {
                text: "Sort by name",
                onClick: handleGroupSort("name"),
              },
            ],
          },
        }}
      />
    </StyledWindow>
  );
}
