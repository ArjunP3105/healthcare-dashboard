import styled from "styled-components";

import Sidebar from "../Sidebar/Sidebar";
import MainContent from "../DashboardMainContent/MainContent";

const StyledLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 14rem 1fr;
  font-size: small;

  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    height: auto;
  }
`;

function AppLayout() {
  return (
    <StyledLayout>
      <Sidebar />
      <MainContent />
    </StyledLayout>
  );
}

export default AppLayout;
