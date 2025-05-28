import styled from "styled-components";
import { FiZoomIn } from "react-icons/fi";
import HealthStatus from "./HealthStatus";

const StyledDiv = styled.div`
  display: grid;
  width: 90%;
  justify-self: center;
  grid-template-columns: 1.5fr 1fr;
  margin: 20px;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  display: flex;
  background-color: #f6faff;
  justify-content: center;
  justify-self: center;
  border: 2px transparent solid;
  border-radius: 20px;
  position: relative;
  width: 80%;
  height: auto;
`;

const StyledZoom = styled(FiZoomIn)`
  position: absolute;
  top: 15px;
  right: 15px;
  color: #64748b;
  padding: 5px;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const StyledImg = styled.img`
  justify-content: center;
  width: 70%;
  object-fit: contain;
`;

const StyledSpan1 = styled.span`
  display: flex;
  position: absolute;
  background-color: #3737a7;
  color: white;
  padding: 7px;
  font-size: x-small;
  border: 2px transparent solid;
  border-radius: 10px;
  width: 30%;
  justify-content: center;
  top: 22%;
  left: 60%;

  @media (max-width: 900px) {
    top: 18.5%;
    left: 60%;
    font-size: 8px;
  }

  @media (min-width: 900px) and (max-width: 1510px) {
    top: 29%;
    left: 60%;
    font-size: 8px;
  }

  @media (min-width: 0px) and (max-width: 610px) {
    top: 25%;
    left: 60%;
    font-size: 8px;
  }
`;

const StyledSpan2 = styled.span`
  display: flex;
  position: absolute;
  background-color: #41e3ed;
  color: #3737a7;
  padding: 7px;
  font-size: x-small;
  border: 2px transparent solid;
  border-radius: 10px;
  width: 30%;
  justify-content: center;
  top: 58%;
  right: 60%;

  @media (max-width: 900px) {
    top: 59%;
    right: 60%;
    font-size: 8px;
  }

  @media (min-width: 900px) and (max-width: 1510px) {
    top: 55%;
    right: 60%;
    font-size: 8px;
  }

  @media (min-width: 0px) and (max-width: 610px) {
    top: 55%;
    right: 60%;
    font-size: 8px;
  }
`;

function AnatomySection() {
  return (
    <StyledDiv>
      <ImageContainer>
        <StyledImg src="/images/anatomy.png" alt="Anotomy"></StyledImg>
        <StyledZoom />
        <StyledSpan1>💖 Healthy Heart</StyledSpan1>
        <StyledSpan2>🦵🏻 Healthy Leg</StyledSpan2>
      </ImageContainer>
      <HealthStatus />
    </StyledDiv>
  );
}

export default AnatomySection;
