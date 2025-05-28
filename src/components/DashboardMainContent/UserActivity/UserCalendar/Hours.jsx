import styled from "styled-components";

const StyledHour = styled.div`
  display: flex;
  background-color: ${(props) =>
    props.appointment === "Dentist"
      ? " #3636a6"
      : props.appointment === "Physiotherapy"
      ? "#adb1d7"
      : ""};

  color: ${(props) => (props.appointment !== null ? "white" : "#3636a6")};
  padding: 5px;
  width: 90%;
  justify-content: center;
  border: 2px solid transparent;
  border-radius: 10px;
`;

function Hours({ time }) {
  const { hour, appointment } = time;

  return (
    <StyledHour appointment={appointment}>
      {hour !== null ? hour : <span style={{ color: "#adb1d7" }}>&mdash;</span>}
    </StyledHour>
  );
}

export default Hours;
