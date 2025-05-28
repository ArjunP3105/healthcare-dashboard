import styled from "styled-components";

import UserHeader from "../HeaderDisplay/UserHeader";
import UserCalendar from "./UserCalendar/UserCalendar";

const StyledDiv = styled.div`
  background-color: #f6faff;
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
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
