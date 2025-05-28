import styled from "styled-components";
import UpcomingEvents from "../../../../Data/UpcomingEvents";
import ScheduledDay from "./ScheduledDay";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;

  width: 92%;
  align-self: center;
  gap: 1rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
`;

const Span = styled.span`
  color: #1e2252;
  font-size: large;
  font-weight: 500;
`;

function UpcomingSchedule() {
  return (
    <StyledDiv>
      <Span>The Upcoming Schedule</Span>
      <Container>
        {UpcomingEvents.map((event) => (
          <ScheduledDay event={event} key={event.id} />
        ))}
      </Container>
    </StyledDiv>
  );
}

export default UpcomingSchedule;
