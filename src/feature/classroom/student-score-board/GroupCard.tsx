import styled from "styled-components";
import { useGroup } from "../useGroup";

type GroupCardProps = {
  groupId: string;
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

const Container = styled.div(({ theme }) => {
  const color = theme.colors.primary;
  const textColor = theme.colors.text;
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
  onScoreChange?: (score: number) => void;
};

const ScoreBoard = ({ score, onScoreChange }: ScoreBoardProps) => {
  return (
    <Footer>
      <ScoreButton
        $type="decrement"
        disabled={score === 0}
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

export function GroupCard({ groupId }: GroupCardProps) {
  const { group, changeScore } = useGroup(groupId);
  if (!group) return null;
  return (
    <Container>
      <Header>{group.name}</Header>
      <Body>{group.students.map((student) => student.name).join(", ")}</Body>
      <ScoreBoard score={group.score} onScoreChange={changeScore} />
    </Container>
  );
}
