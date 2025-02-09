import { Window } from "./components/Window";
import { Grid } from "./components/layout/Grid";
import { StudentScoreBoardContainer } from "./feature/classroom/student-score-board";

function App() {
  return (
    <Grid $gap={12} $cols={2} style={{ height: "100%" }}>
      <Window $backgroundColor="#F6F6F6">123</Window>
      <StudentScoreBoardContainer classroomId="123" />
    </Grid>
  );
}

export default App;
