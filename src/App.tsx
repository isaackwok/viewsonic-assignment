import styled from "styled-components";
import { StudentCard } from "./components/StudentCard";
import { Window } from "./components/Window";
import { Grid } from "./components/layout/Grid";

const students = [
  {
    id: 1,
    name: "Philip",
    isActive: true,
    initialScore: 2,
  },
  {
    id: 2,
    name: "Darrell",
    isActive: true,
    initialScore: 5,
  },
  {
    id: 3,
    name: "Guest",
    isActive: false,
    initialScore: 0,
  },
  {
    id: 4,
    name: "Cody",
    isActive: true,
    initialScore: 9,
  },
  {
    id: 5,
    name: "Guest",
    isActive: false,
    initialScore: 0,
  },
  {
    id: 6,
    name: "Guest",
    isActive: false,
    initialScore: 0,
  },
  {
    id: 7,
    name: "Bessie",
    isActive: true,
    initialScore: 0,
  },
  {
    id: 8,
    name: "Wendy",
    isActive: true,
    initialScore: 3,
  },
  {
    id: 9,
    name: "Guest",
    isActive: false,
    initialScore: 0,
  },

  {
    id: 10,
    name: "Esther",
    isActive: true,
    initialScore: 1,
  },
  {
    id: 11,
    name: "Guest",
    isActive: false,
    initialScore: 0,
  },

  {
    id: 12,
    name: "Gloria",
    isActive: true,
    initialScore: 1,
  },
  {
    id: 13,
    name: "Guest",
    isActive: false,
    initialScore: 0,
  },
  {
    id: 14,
    name: "Lee",
    isActive: true,
    initialScore: 2,
  },
  {
    id: 15,
    name: "Guest",
    isActive: false,
    initialScore: 0,
  },
  {
    id: 16,
    name: "Ann",
    isActive: true,
    initialScore: 0,
  },
  {
    id: 17,
    name: "Jacob",
    isActive: true,
    initialScore: 8,
  },
  {
    id: 18,
    name: "Calvin",
    isActive: true,
    initialScore: 2,
  },
  {
    id: 19,
    name: "Guest",
    isActive: false,
    initialScore: 0,
  },
  {
    id: 20,
    name: "Joe",
    isActive: true,
    initialScore: 0,
  },
];

const ClassTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 600;
  margin-left: 24px;
`;

function App() {
  return (
    <Grid $gap={12} $cols={2} style={{ height: "100%" }}>
      <Window $backgroundColor="#F6F6F6">123</Window>
      <Window>
        <ClassTitle>302 Science</ClassTitle>
        <Grid
          $gap={12}
          $cols={5}
          style={{
            background: "white",
            padding: 12,
          }}
        >
          {students.map((student, idx) => (
            <StudentCard
              key={student.id}
              name={student.name}
              number={idx + 1}
              initialScore={student.initialScore}
              isActive={student.isActive}
            />
          ))}
        </Grid>
      </Window>
    </Grid>
  );
}

export default App;
