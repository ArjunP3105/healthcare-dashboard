import styled from "styled-components";
import Days from "../../Data/DaysData";

const StyledFeed = styled.div`
  padding: 1rem;
  background-color: #f6faff;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-self: center;
  gap: 15px;
  height: 75%;
  border: 2px transparent solid;
  border-radius: 20px;
`;

const StyledSpan1 = styled.span`
  font-size: large;
  color: #373aa5;
  font-weight: 500;
`;

const StyledSpan2 = styled.span`
  color: #a9adb3;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  align-self: center;
`;

const StyledChart = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Bar = styled.div`
  width: 6px;
  height: ${(props) => props.height}px;
  background: ${(props) => props.color};
  border-radius: 3px;
  margin: 2px 0;

  ${(props) => props.bottom === true && css``}
`;

const Calendar = styled.div`
  display: flex;
  height: 75%;
  width: 90%;
  align-self: center;
`;

const BarGraph = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

function ActivityFeed() {
  return (
    <StyledFeed>
      <StyledHeader>
        <StyledSpan1>Activity</StyledSpan1>
        <StyledSpan2>3 apointment on this week</StyledSpan2>
      </StyledHeader>
      <Calendar>
        {Days.map((day) => (
          <StyledChart>
            <BarGraph>
              <Bar height={90} color="#e0e3eb" />
              <Bar height={70} color="#3fddf1" />
              <Bar height={40} color="#5561b4" />
            </BarGraph>
            <lable style={{ color: "#adb0b6" }}>{day}</lable>
          </StyledChart>
        ))}
      </Calendar>
    </StyledFeed>
  );
}

export default ActivityFeed;
