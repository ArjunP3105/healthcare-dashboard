import styled from "styled-components";
import SideBarOptions from "./SideBarOptions";

const StyledText = styled.p`
  color: #dee1e9;
  font-weight: normal;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 900px) {
    flex-direction: row;
    gap: 1rem;
  }
`;

const StyledDiv = styled.div`
  align-items: center;
  display: flex;
`;

const StyledSpan = styled.span`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  @media (max-width: 900px) {
    flex-direction: row;
    gap: 1rem;
    align-items: center;
  }
`;

function SideBarType({ content }) {
  const { type, options } = content;

  return (
    <StyledDiv>
      <StyledList>
        <StyledText>{type.charAt(0).toUpperCase() + type.slice(1)}</StyledText>
        <StyledSpan>
          {options.map((option) => (
            <SideBarOptions option={option} key={option.name} />
          ))}
        </StyledSpan>
      </StyledList>
    </StyledDiv>
  );
}

export default SideBarType;
