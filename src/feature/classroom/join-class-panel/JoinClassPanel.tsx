import QRCode from "react-qr-code";
import { Window } from "../../../components/Window";
import styled from "styled-components";
import { MdChevronLeft } from "react-icons/md";
import { CopyTextButton } from "./CopyTextButton";

const StyledWindow = styled(Window)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 24px;
  padding-bottom: 24px;
  gap: 16px;
`;

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

export function JoinClassPanel() {
  return (
    <StyledWindow id="join-class-panel" backgroundColor="#F6F6F6">
      <BackButton>
        <MdChevronLeft size={24} />
        Back to Class List
      </BackButton>
      <Title>Join 302 Science</Title>
      <CopyTextButtonsWrapper>
        <CopyTextButton displayText="ID: X58E9647" copyText="X58E9647" />
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
