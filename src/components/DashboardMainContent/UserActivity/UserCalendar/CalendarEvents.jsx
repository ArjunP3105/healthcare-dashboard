import styled from "styled-components";
import appointments from "../../../../Data/Appointments";
import Appointment from "./Appointment";

const StyledDiv = styled.div`
  display: flex;
  width: 92%;
  justify-content: space-between;
  gap: 10px;
  align-self: center;
`;

function CalendarEvents() {
  return (
    <StyledDiv>
      {appointments.map((data) => (
        <Appointment data={data} key={data.id} />
      ))}
    </StyledDiv>
  );
}

export default CalendarEvents;
