import { MdContentCopy } from "react-icons/md";
import { styled } from "styled-components";

type CopyTextProps = {
  displayText: string;
  copyText: string;
};

const CopyTextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 550;
`;

const CopyButtonWrapper = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.radius.base}px;
  cursor: pointer;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
`;

export function CopyTextButton({ displayText, copyText }: CopyTextProps) {
  return (
    <CopyTextWrapper>
      {displayText}
      <CopyButtonWrapper
        onClick={() => navigator.clipboard.writeText(copyText)}
      >
        <MdContentCopy size={16} />
      </CopyButtonWrapper>
    </CopyTextWrapper>
  );
}
