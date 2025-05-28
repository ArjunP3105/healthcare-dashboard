import styled from "styled-components";
import DashboardOverview from "./DashboardOverview";
import UserActivityView from "./UserActivity/UserActivityView";

const StyledMain = styled.div`
  display: grid;
  grid-template-columns: minmax(500px, 1.2fr) minmax(400px, 1fr);
  gap: 2rem;
  height: 100%;
  align-items: stretch;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
`;

function MainContent() {
  return (
    <StyledMain>
      <DashboardOverview />
      <UserActivityView />
    </StyledMain>
  );
}

export default MainContent;
