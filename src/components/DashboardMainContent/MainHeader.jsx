import styled from "styled-components";

const StyledHeader = styled.div`
  color: #2a2491;
  width: 90%;
  justify-self: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledSpan = styled.span`
  font-weight: bold;
  font-size: 1.3rem;
`;

const StyledSelect = styled.select`
  outline: none;
  border: transparent;
  color: #3d38a9;
  background-color: white;
`;

function MainHeader() {
  return (
    <StyledHeader>
      <StyledSpan>Dashboard</StyledSpan>
      <StyledSelect>
        <option>This Week</option>
      </StyledSelect>
    </StyledHeader>
  );
}

export default MainHeader;
