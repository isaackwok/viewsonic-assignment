import { LoadingSkeleton } from "../../../components/LoadingSkeleton";
import { StyledWindow } from "./shared";
import styled from "styled-components";

const TitleLoadingSkeleton = styled(LoadingSkeleton)`
  height: 24px;
  width: 300px;
`;

const QRCodeLoadingSkeleton = styled(LoadingSkeleton)`
  aspect-ratio: 1 / 1;
  width: 100%;
  height: auto;
`;

export function JoinClassPanelLoadingSkeleton() {
  return (
    <StyledWindow id="join-class-panel" backgroundColor="#F6F6F6">
      <TitleLoadingSkeleton />
      <TitleLoadingSkeleton />
      <TitleLoadingSkeleton />
      <QRCodeLoadingSkeleton />
    </StyledWindow>
  );
}
