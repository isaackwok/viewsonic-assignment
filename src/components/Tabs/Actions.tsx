import { MdMoreVert } from "react-icons/md";
import styled from "styled-components";

type ActionItem = {
  text: string;
  onClick: () => void;
};

type ActionsProps = {
  actions: ActionItem[];
};

const ActionButton = styled.button`
  margin-right: 16px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  transition: transform 0.2s ease-in-out;

  &:focus {
    transform: scale(0.85);
  }
`;

const Menu = styled.div`
  position: absolute;
  top: 100%;
  right: calc(100% - 16px);
  background-color: white;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  border-radius: ${({ theme }) => theme.radius.base}px;
  transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
  overflow: hidden;
  z-index: 9999;
  min-width: 150px;
  padding: 8px 0;
`;

const MenuItem = styled.div`
  padding: 8px 16px 8px 8px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  cursor: default;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
  white-space: nowrap;
`;

const Wrapper = styled.div`
  position: relative;

  & > ${ActionButton} + ${Menu} {
    opacity: 0;
    transform: scale(0);
  }

  & > ${ActionButton}:focus + ${Menu} {
    opacity: 1;
    transform: scale(1);
  }
`;

export function Actions({ actions }: ActionsProps) {
  const handleActionClick = (action: ActionItem) => {
    action.onClick();
  };

  return (
    <Wrapper>
      <ActionButton>
        <MdMoreVert size={24} />
      </ActionButton>
      <Menu>
        {actions.map((action) => (
          <MenuItem key={action.text} onClick={() => handleActionClick(action)}>
            {action.text}
          </MenuItem>
        ))}
      </Menu>
    </Wrapper>
  );
}
