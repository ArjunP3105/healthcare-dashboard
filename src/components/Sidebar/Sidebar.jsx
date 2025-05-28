import styled from "styled-components";
import { sidebarData } from "../../Data/sidebarData";

import SideBarType from "./SideBarType";
import { RiSettings3Fill } from "react-icons/ri";
import StyledList from "../UI/StyledComponents/StyledList";

const StyledSidebar = styled.div`
  background-color: #f6faff;
  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  font-weight: bold;
  height: 100%;
  justify-content: space-between;
  box-sizing: border-box;
  overflow: hidden;
  border-left: 2px solid transparent;

  @media (max-width: 900px) {
    height: auto;
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    padding: 0.5rem 0;
    border-radius: 0;
  }
`;

const StyledSpan = styled.span`
  text-align: center;
  font-size: 1.25rem;

  @media (max-width: 900px) {
    flex-direction: row;
    align-items: center;
    gap: 10px;
    flex-wrap: nowrap;
  }
`;

const StyledSettings = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 10rem;

  @media (max-width: 900px) {
    flex-direction: row;
    align-items: center;
    gap: 10px;
    flex-wrap: nowrap;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    flex-direction: row;
    align-items: center;
    gap: 10px;
    flex-wrap: nowrap;
  }
`;

const StyledSettingsList = StyledList;

function Sidebar() {
  return (
    <StyledSidebar>
      <InnerWrapper>
        <StyledSpan>
          <span style={{ color: "turquoise" }}>Health</span>
          <span style={{ color: "#3d38a9" }}>care.</span>
        </StyledSpan>
        {sidebarData.map((content) => (
          <SideBarType content={content} key={content.type} />
        ))}
      </InnerWrapper>
      <StyledSettings>
        <StyledSettingsList>
          <RiSettings3Fill />
          Setting
        </StyledSettingsList>
      </StyledSettings>
    </StyledSidebar>
  );
}

export default Sidebar;
