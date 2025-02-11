import styled from "styled-components";
import { ClassTitle, Grid, StyledTabs, StyledWindow } from "./shared";
import { LoadingSkeleton } from "../../../components/LoadingSkeleton";

const StyledLoadingSkeleton = styled(LoadingSkeleton)`
  height: 120px;
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
                  <StyledLoadingSkeleton key={idx} />
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
