import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: ${(props) =>
    props.title === "Dentist" ? "#3737a7" : "#dde2f8"};
  display: flex;
  flex-direction: column;
  padding: 18px;
  gap: 10px;
  border: 2px transparent solid;
  border-radius: 20px;
  color: ${(props) => (props.title === "Dentist" ? "#f6faff" : "#1e2153")};
`;

const Title = styled.div`
  font-size: small;
  display: flex;
  justify-content: space-between;

  align-items: center;
  gap: 20px;
  font-weight: 500;
`;

const Text = styled.span`
  font-size: 15px;
`;

const Icon = styled.span`
  font-size: large;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

function Appointment({ data }) {
  const { id, title, time, doctor, icon } = data;
  const { start, end } = time;
  return (
    <StyledDiv title={title}>
      <Title>
        <Text>{title}</Text>
        <Icon>{icon}</Icon>
      </Title>
      <Info>
        <span>
          {start} {end ? "-" : ""} {end ? end : ""}{" "}
        </span>
        <span>{doctor ? doctor : ""}</span>
      </Info>
    </StyledDiv>
  );
}

export default Appointment;
