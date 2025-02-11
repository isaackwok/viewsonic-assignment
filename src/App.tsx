import { Grid } from "./components/layout/Grid";
import { JoinClassPanelContainer } from "./feature/classroom/join-class-panel";
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
      <JoinClassPanelContainer />
      <StudentScoreBoardContainer />
    </Grid>
  );
}

export default App;
