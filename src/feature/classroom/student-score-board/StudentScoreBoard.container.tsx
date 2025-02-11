import { StudentScoreBoard } from "./StudentScoreBoard";
import { StudentScoreBoardLoadingSkeleton } from "./StudentScoreBoard.loading";
import { useClassroom } from "../useClassroom";

export function StudentScoreBoardContainer() {
  const { classroom, isLoading, isError } = useClassroom("X58E9647");

  if (isError) return <div>Error</div>;
  if (isLoading) return <StudentScoreBoardLoadingSkeleton />;
  if (!classroom) return null;

  return (
    <StudentScoreBoard
      name={classroom.name}
      capacity={classroom.capacity}
      students={classroom.students}
    />
  );
}
