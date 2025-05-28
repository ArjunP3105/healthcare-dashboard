import styled from "styled-components";
import HealthStatusCardsData from "../../../Data/HealthStatusCardsData";
import OrganData from "./OrganData";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledSpan = styled.span`
  color: #2a2491;
  align-self: last baseline;
`;

function HealthStatus() {
  return (
    <StyledDiv>
      {HealthStatusCardsData.map((organ) => (
        <OrganData organ={organ} key={organ.id} />
      ))}
      <StyledSpan>Details &rarr;</StyledSpan>
    </StyledDiv>
  );
}

export default HealthStatus;
