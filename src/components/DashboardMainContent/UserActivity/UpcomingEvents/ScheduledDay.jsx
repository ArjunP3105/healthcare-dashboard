import styled from "styled-components";
import Appointment from "../UserCalendar/Appointment";

const Day = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Span = styled.span`
  color: #80818e;
  font-size: medium;
  font-weight: normal;
`;
const Container = styled.div`
  display: flex;
  gap: 10px;
`;

function ScheduledDay({ event }) {
  const { day, events } = event;

  return (
    <Day>
      <Span>on {day}</Span>
      <Container>
        {events.map((data) => (
          <Appointment data={data} key={data.id} />
        ))}
      </Container>
    </Day>
  );
}

export default ScheduledDay;
