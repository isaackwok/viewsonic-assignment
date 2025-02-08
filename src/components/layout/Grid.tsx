import styled from "styled-components";
import { breakpoints } from "../../theme";

type GridProps = {
  $gap: number | Record<keyof typeof breakpoints, number>;
  $cols: number | Record<keyof typeof breakpoints, number>;
};

export const Grid = styled.div<GridProps>`
  display: grid;
  width: 100%;
  ${({ $gap, $cols, theme }) => [
    `gap: ${
      typeof $gap === "number"
        ? `${$gap}px`
        : Object.entries($gap)
            .map(
              ([breakpoint, value]) =>
                `@media (min-width: ${
                  theme.breakpoints[
                    breakpoint as keyof typeof theme.breakpoints
                  ]
                }px) { gap: ${value}px; }`
            )
            .join("")
    };`,
    `grid-template-columns: ${
      typeof $cols === "number"
        ? `repeat(${$cols}, 1fr)`
        : Object.entries($cols)
            .map(
              ([breakpoint, value]) =>
                `@media (min-width: ${
                  theme.breakpoints[
                    breakpoint as keyof typeof theme.breakpoints
                  ]
                }px) { grid-template-columns: repeat(${value}, 1fr); }`
            )
            .join("")
    };`,
  ]}
`;
