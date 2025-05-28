import styled from "styled-components";
import Search from "../UI/StyledComponents/Search";
import MainHeader from "./MainHeader";
import AnatomySection from "./Anatomy/AnatomySection";
import ActivityFeed from "./ActivityFeed";

const StyledDiv = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr 0.5fr;
  height: 100%;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;

  @media (max-width: 900px) {
    grid-template-rows: auto auto auto auto;
    height: auto;
  }
`;

function DashboardOverview() {
  return (
    <StyledDiv>
      <Search />
      <MainHeader />
      <AnatomySection />
      <ActivityFeed />
    </StyledDiv>
  );
}

export default DashboardOverview;
