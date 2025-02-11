import { JoinClassPanel } from "./JoinClassPanel";

const classId = "X58E9647";
const classTitle = "302 Science";

export function JoinClassPanelContainer() {
  return (
    <JoinClassPanel
      onBack={() => {}}
      classId={classId}
      classTitle={classTitle}
    />
  );
}
