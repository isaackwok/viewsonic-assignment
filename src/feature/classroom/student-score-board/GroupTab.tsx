import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { memo, useMemo } from "react";
import { sortByName } from "./shared";
import { sortByScore } from "./shared";
import { GroupCard } from "./GroupCard";
import { Grid } from "../../../components/layout/Grid";

const MemoizedGroupCard = memo(GroupCard);

type GroupTabProps = {
  sortBy: "name" | "score";
};

export function GroupTab({ sortBy }: GroupTabProps) {
  const groups = useSelector(
    (state: RootState) => state.classroom.info?.groups
  );
  const groupsArray = useMemo(
    () => (groups ? Object.values(groups) : []),
    [groups]
  );
  const sortedGroups = useMemo(() => {
    return groupsArray.slice().sort((a, b) => {
      if (sortBy === "name") return sortByName(a.name, b.name);
      return sortByScore(a.score, b.score);
    });
  }, [groupsArray, sortBy]);

  return (
    <div>
      <Grid
        $cols={{
          mobile: 1,
          tablet: 2,
          desktop: 2,
        }}
        $gap={10}
      >
        {sortedGroups.map((group) => (
          <MemoizedGroupCard key={group.id} groupId={group.id} />
        ))}
      </Grid>
    </div>
  );
}
