import { useState } from "react";
import styled from "styled-components";

type StudentCardProps = {
  number: number;
  name: string;
  isActive: boolean;
  initialScore: number;
  onScoreChange?: (score: number) => void;
};

const Header = styled.div`
  color: white;
  text-align: center;
  padding: 4px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 16px;
  padding-bottom: 16px;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 4px;
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

const ScoreButton = styled.button<{ $type: "increment" | "decrement" }>(
  (props) => ({
    backgroundColor: props.disabled
      ? props.theme.colors.disabled
      : props.$type === "increment"
      ? props.theme.colors.success
      : props.theme.colors.error,
    color: "white",
    borderRadius: `${props.theme.radius.xs}px`,
    padding: "2px 6px",
    border: "none",
    cursor: props.disabled ? "not-allowed" : "pointer",
  })
);

const Container = styled.div<{ $isActive: boolean }>(({ $isActive, theme }) => {
  const color = $isActive ? theme.colors.primary : theme.colors.disabled;
  const textColor = $isActive ? theme.colors.text : theme.colors.disabled;
  return {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    overflow: "hidden",
    borderRadius: theme.radius.base,
    border: `1px solid ${color}`,
    [Header]: {
      height: "fit-content",
      backgroundColor: color,
    },
    [Body]: {
      color: textColor,
    },
    [Footer]: {
      color: textColor,
      borderTop: `1px solid ${color}`,
    },
  };
});

type ScoreBoardProps = {
  initialScore: number;
  isActive: boolean;
  onScoreChange?: (score: number) => void;
};

const ScoreBoard = ({
  initialScore,
  isActive,
  onScoreChange,
}: ScoreBoardProps) => {
  const [score, setScore] = useState<number>(initialScore);
  return (
    <Footer>
      <ScoreButton
        $type="decrement"
        disabled={score === 0 || !isActive}
        onClick={() => {
          const newScore = score - 1;
          setScore(newScore);
          onScoreChange?.(newScore);
        }}
      >
        - 1
      </ScoreButton>
      <span>{score}</span>
      <ScoreButton
        $type="increment"
        disabled={!isActive}
        onClick={() => {
          const newScore = score + 1;
          setScore(newScore);
          onScoreChange?.(newScore);
        }}
      >
        + 1
      </ScoreButton>
    </Footer>
  );
};

export const StudentCard = ({
  number,
  name,
  isActive,
  initialScore,
}: StudentCardProps) => {
  const paddedNumber = number.toString().padStart(2, "0");
  return (
    <Container $isActive={isActive}>
      <Header>{paddedNumber}</Header>
      <Body>{name}</Body>
      <ScoreBoard initialScore={initialScore} isActive={isActive} />
    </Container>
  );
};
