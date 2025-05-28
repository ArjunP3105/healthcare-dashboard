import styled from "styled-components";

import UserHeader from "./UserHeader";
import UserCalendar from "./UserActivity/UserCalendar";

const StyledDiv = styled.div`
  background-color: #f6faff;
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100%;
  min-height: 0;
  overflow: hidden;
`;

function UserActivityView() {
  return (
    <StyledDiv>
      <UserHeader />
      <UserCalendar />
    </StyledDiv>
  );
}

export default UserActivityView;
