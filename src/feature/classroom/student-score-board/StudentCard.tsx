import styled from "styled-components";
import { useStudentScore } from "../useStudentScore";

type StudentCardProps = {
  id: string;
  number: number;
  name: string;
  isActive: boolean;
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
  score: number;
  isActive: boolean;
  onScoreChange?: (score: number) => void;
};

const ScoreBoard = ({ score, isActive, onScoreChange }: ScoreBoardProps) => {
  return (
    <Footer>
      <ScoreButton
        $type="decrement"
        disabled={score === 0 || !isActive}
        onClick={() => {
          const newScore = score - 1;
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
  id,
}: StudentCardProps) => {
  const { score, changeScore } = useStudentScore({ id });
  const paddedNumber = number.toString().padStart(2, "0");

  return (
    <Container $isActive={isActive}>
      <Header>{paddedNumber}</Header>
      <Body>{name}</Body>
      <ScoreBoard
        score={score}
        isActive={isActive}
        onScoreChange={changeScore}
      />
    </Container>
  );
};
