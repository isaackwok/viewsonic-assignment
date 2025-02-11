import QRCode from "react-qr-code";
import { MdChevronLeft } from "react-icons/md";
import { CopyTextButton } from "./CopyTextButton";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { StyledWindow } from "./shared";
import styled from "styled-components";

const BackButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  border: none;
  background: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  padding: 0px;
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 600;
`;

const StyledQRCode = styled(QRCode)`
  aspect-ratio: 1 / 1;
  padding: 16px;
  border-radius: ${({ theme }) => theme.radius.base}px;
  background-color: white;
  height: auto;
  width: 100%;
  flex-grow: 1;
`;

const Version = styled.div`
  justify-self: flex-end;
  align-self: center;
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

const CopyTextButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
`;

type JoinClassPanelProps = {
  onBack: () => void;
};

export function JoinClassPanel({ onBack }: JoinClassPanelProps) {
  const classroom = useSelector((state: RootState) => state.classroom.info);
  if (!classroom) return null;
  return (
    <StyledWindow id="join-class-panel" backgroundColor="#F6F6F6">
      <BackButton onClick={onBack}>
        <MdChevronLeft size={24} />
        Back to Class List
      </BackButton>
      <Title>Join {classroom.name}</Title>
      <CopyTextButtonsWrapper>
        <CopyTextButton
          displayText={`ID: ${classroom.classroomId}`}
          copyText={classroom.classroomId}
        />
        <CopyTextButton
          displayText="Link"
          copyText="https://www.classswift.viewsonic.io/"
        />
      </CopyTextButtonsWrapper>
      <StyledQRCode value="https://www.classswift.viewsonic.io/" />
      <Version>Version 1.1.7</Version>
    </StyledWindow>
  );
}
