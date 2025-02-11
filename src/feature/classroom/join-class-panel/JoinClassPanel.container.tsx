import { useClassroom } from "../useClassroom";
import { JoinClassPanel } from "./JoinClassPanel";
import { JoinClassPanelLoadingSkeleton } from "./JoinClassPanel.loading";

export function JoinClassPanelContainer() {
  const { classroom, isLoading, isError } = useClassroom("X58E9647");
  if (isError) return <div>Error</div>;
  if (isLoading) return <JoinClassPanelLoadingSkeleton />;
  if (!classroom) return null;
  return <JoinClassPanel onBack={() => {}} />;
}
