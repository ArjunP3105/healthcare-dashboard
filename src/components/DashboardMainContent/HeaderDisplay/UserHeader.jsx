import styled from "styled-components";
import UserProfilePic from "./UserProfilePic";
import AddButton from "./AddButton";

const StyledDiv = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
  width: 80%;
  height: 10%;
  justify-self: center;
  justify-content: end;
`;

function UserHeader() {
  return (
    <StyledDiv>
      <UserProfilePic />
      <AddButton />
    </StyledDiv>
  );
}

export default UserHeader;
