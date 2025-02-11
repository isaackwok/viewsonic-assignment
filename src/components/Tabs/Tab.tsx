import styled from "styled-components";

type TabProps = {
  $isCurrent: boolean;
};

export const Tab = styled.button<TabProps>`
  border: none;
  align-self: stretch;
  border-top-left-radius: ${({ theme }) => theme.radius.base}px;
  border-top-right-radius: ${({ theme }) => theme.radius.base}px;
  padding: 12px 24px;
  background-color: ${({ theme, $isCurrent }) =>
    $isCurrent ? "white" : theme.colors.disabled};
  color: ${({ theme, $isCurrent }) =>
    $isCurrent ? theme.colors.primary : theme.colors.text};
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  z-index: ${({ $isCurrent }) => ($isCurrent ? 1 : 0)};
`;
