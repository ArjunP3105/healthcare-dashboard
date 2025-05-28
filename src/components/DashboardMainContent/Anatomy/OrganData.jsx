import styled, { css } from "styled-components";

const StyledDiv = styled.div`
  background-color: #f6faff;
  padding: 10px;
  border: 2px solid transparent;
  border-radius: 20px;
  font-weight: normal;
  width: 67%;
  justify-self: center;
`;

const StyledIcon = styled.span`
  font-size: 2rem;
  font-weight: 400;
`;

const StyledOrgan = styled.div`
  display: flex;
  flex-direction: column;
  align-items: first baseline;
  gap: 15px;
`;

const StyledDate = styled.span`
  font-size: smaller;
  color: #b8bcc2;
`;

const StyledStatusBar = styled.input.attrs({
  type: "range",
  max: "10",
  value: "8",
})`
  width: 100%;

  -webkit-appearance: none;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 0;
    height: 0;
    visibility: hidden;
    background: none;
    border: none;
  }

  &::-webkit-slider-runnable-track {
    height: 6px;
    background: #e0e0e0;
    border-radius: 3px;
  }

  ${(props) => {
    const color =
      props.condition === "healthy"
        ? "#81d1c1"
        : props.condition === "issue"
        ? "#aa4a4a"
        : "#f97858";

    return css`
      &::-webkit-slider-runnable-track {
        background: linear-gradient(
          to right,
          ${color} 0%,
          ${color} ${(props) => (props.value / props.max) * 100}%,
          #e0e0e0 ${(props) => (props.value / props.max) * 100}%,
          #e0e0e0 100%
        );
      }
    `;
  }}
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

function OrganData({ organ }) {
  const { organName: name, icon, date, condition } = organ;

  return (
    <StyledDiv>
      <StyledOrgan>
        <StyledIcon>
          <span
            style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;" }}
          >
            {icon}{" "}
          </span>
          <span style={{ fontSize: "1.1rem", color: " #2a2491" }}>{name}</span>
        </StyledIcon>
        <InfoSection>
          <StyledDate>Date: {date}</StyledDate>
          <StyledStatusBar condition={condition}></StyledStatusBar>
        </InfoSection>
      </StyledOrgan>
    </StyledDiv>
  );
}

export default OrganData;
