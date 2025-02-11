import { StudentScoreBoard } from "./StudentScoreBoard";
import { StudentScoreBoardLoadingSkeleton } from "./StudentScoreBoard.loading";
import { useClassroom } from "../useClassroom";

type StudentScoreBoardContainerProps = {
  classroomId: string;
};

export function StudentScoreBoardContainer({
  classroomId,
}: StudentScoreBoardContainerProps) {
  const { classroom, isLoading, isError } = useClassroom(classroomId);

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
