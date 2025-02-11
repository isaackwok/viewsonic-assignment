import { Grid } from "./components/layout/Grid";
import { JoinClassPanel } from "./feature/classroom/join-class-panel";
import { StudentScoreBoardContainer } from "./feature/classroom/student-score-board";

function App() {
  return (
    <Grid
      $gap={12}
      $cols={{
        mobile: 1,
        tablet: 2,
        desktop: 2,
      }}
      style={{ height: "100%" }}
    >
      <JoinClassPanel />
      <StudentScoreBoardContainer classroomId="123" />
    </Grid>
  );
}

export default App;
