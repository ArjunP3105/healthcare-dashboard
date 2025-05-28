import { RiArrowLeftFill, RiArrowRightFill } from "react-icons/ri";
import styled from "styled-components";

import CalendarData from "../../../../Data/CalendarData";
import Calendar from "./Calendar";
import CalendarEvents from "./CalendarEvents";
import UpcomingSchedule from "../UpcomingEvents/UpcomingSchedule";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  justify-self: center;
  gap: 1.1rem;
`;

const StyledHeader = styled.header`
  color: #3636a6;

  display: flex;
  justify-content: space-between;
  width: 92%;
  align-self: center;
`;

const StyledSpan = styled.span`
  font-weight: 500;
  font-size: medium;
`;

const StyledDirection = styled.span`
  font-size: 20px;
  display: flex;
  gap: 10px;
`;

const CalendarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  overflow-x: auto;
`;

function UserCalendar() {
  return (
    <StyledDiv>
      <StyledHeader>
        <StyledSpan>October 2021</StyledSpan>
        <StyledDirection>
          <RiArrowLeftFill />
          <RiArrowRightFill />
        </StyledDirection>
      </StyledHeader>

      <CalendarContainer>
        {CalendarData.map((days) => (
          <Calendar key={days.id} days={days} />
        ))}
      </CalendarContainer>
      <CalendarEvents />
      <UpcomingSchedule />
    </StyledDiv>
  );
}

export default UserCalendar;
