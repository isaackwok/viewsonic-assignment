import styled from "styled-components";
import { ClassTitle, Grid, GridWrapper, StyledWindow } from "./shared";

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
      <GridWrapper>
        <Grid>
          {Array.from({ length: 7 }).map((_, idx) => (
            <LoadingSkeleton key={idx} />
          ))}
        </Grid>
      </GridWrapper>
    </StyledWindow>
  );
}
