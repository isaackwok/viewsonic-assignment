import styled from "styled-components";
import { ClassTitle, Grid, StyledTabs, StyledWindow } from "./shared";

const LoadingSkeleton = styled.div`
  background: white;
  height: 120px;
  border-radius: ${({ theme }) => theme.radius.base}px;
  animation: loading 2s infinite ease-in-out;
`;

export function StudentScoreBoardLoadingSkeleton() {
  return (
    <StyledWindow id="student-score-board">
      <ClassTitle>Loading...</ClassTitle>
      <StyledTabs
        tabs={{
          studentList: {
            title: "Student List",
            content: (
              <Grid>
                {Array.from({ length: 7 }).map((_, idx) => (
                  <LoadingSkeleton key={idx} />
                ))}
              </Grid>
            ),
          },
          group: {
            title: "Group",
            content: "Loading...",
          },
        }}
      />
    </StyledWindow>
  );
}
