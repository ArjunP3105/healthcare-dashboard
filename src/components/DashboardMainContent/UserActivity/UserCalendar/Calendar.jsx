import styled from "styled-components";
import Hours from "./Hours";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.date === 26 ? "#ecf3fe" : "#f6faff")};
  flex: 1 1 0;
  min-width: 40px;
  padding: 10px;
  align-items: center;
  font-size: x-small;
  color: #3636a6;
  font-weight: 500;
  gap: 1rem;
  justify-items: center;
  border: 2px transparent solid;
  border-radius: 15px;
`;

const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;
const StyledSpan = styled.span`
  font-weight: 600;
  text-align: center;
  font-size: large;
`;

const StyledHourFaces = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
`;

function Calendar({ days }) {
  const { id, day, date, timeSlot } = days;

  return (
    <StyledDiv date={date}>
      <DateContainer>
        <span>{day}</span>
        <StyledSpan> {date}</StyledSpan>
      </DateContainer>

      <StyledHourFaces>
        {timeSlot.map((time) => (
          <Hours time={time} key={time} />
        ))}
      </StyledHourFaces>
    </StyledDiv>
  );
}

export default Calendar;
