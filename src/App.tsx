import styled from "styled-components";
import { Window } from "./components/Window";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <Grid>
      <Window backgroundColor="#F6F6F6">123</Window>
      <Window>456</Window>
    </Grid>
  );
}

export default App;
