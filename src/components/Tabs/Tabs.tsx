import { ComponentProps, useState } from "react";
import { Tab } from "./Tab";
import styled from "styled-components";
import { Actions } from "./Actions";

const Wrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: space-between;
`;

const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 8px;
  padding: 0 24px;
`;

export const TabPanel = styled.div`
  background: white;
  padding: 12px;
  overflow-y: auto;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  border-top-left-radius: ${({ theme }) => theme.radius.base}px;
  border-top-right-radius: ${({ theme }) => theme.radius.base}px;
  flex-grow: 1;
`;

type TabsProps = {
  tabs: Record<
    string,
    {
      title: string;
      content: React.ReactNode;
      actions?: ComponentProps<typeof Actions>["actions"];
    }
  >;
  className?: string;
};

export function Tabs({ tabs, className }: TabsProps) {
  const keys = Object.keys(tabs);
  if (keys.length === 0) {
    throw new Error("Tabs must have at least one tab");
  }
  const [currentTab, setCurrentTab] = useState(keys[0]);
  const currentTabContent = tabs[currentTab].content;
  const actions = tabs[currentTab].actions;
  const handleTabClick = (tabId: string) => {
    setCurrentTab(tabId);
  };

  return (
    <Wrapper className={className}>
      <Flex>
        <TabContainer>
          {keys.map((key) => (
            <Tab
              key={key}
              onClick={() => handleTabClick(key)}
              $isCurrent={currentTab === key}
            >
              {tabs[key].title}
            </Tab>
          ))}
        </TabContainer>
        {actions && <Actions actions={actions} />}
      </Flex>
      <TabPanel>{currentTabContent}</TabPanel>
    </Wrapper>
  );
}
