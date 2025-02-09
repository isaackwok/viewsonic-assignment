import { StudentScoreBoard } from "./StudentScoreBoard";
import { getClassroomInfoById } from "../../../services/get-classroom-by-id";
import { useQuery } from "@tanstack/react-query";
import { StudentScoreBoardLoadingSkeleton } from "./StudentScoreBoard.loading";

type StudentScoreBoardContainerProps = {
  classroomId: string;
};

export function StudentScoreBoardContainer({
  classroomId,
}: StudentScoreBoardContainerProps) {
  const {
    data: classroomInfo,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["classroom", classroomId],
    queryFn: () => getClassroomInfoById(classroomId),
  });

  if (isError) return <div>Error: {error?.message}</div>;
  if (isLoading) return <StudentScoreBoardLoadingSkeleton />;
  if (!classroomInfo) return null;
  return (
    <StudentScoreBoard
      name={classroomInfo.name}
      capacity={classroomInfo.capacity}
      students={classroomInfo.students}
    />
  );
}
