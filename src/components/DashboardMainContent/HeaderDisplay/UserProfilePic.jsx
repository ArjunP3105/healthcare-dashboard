import styled from "styled-components";

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #41e2ed;
  height: 40px;
  width: 40px;
  border: 1px transparent solid;
  border-radius: 7px;
`;

const UserPic = styled.img`
  height: 100%;
`;

function UserProfilePic() {
  return (
    <ProfileContainer>
      <UserPic src="/images/UserPicture.webp" alt="profile picture"></UserPic>
    </ProfileContainer>
  );
}

export default UserProfilePic;
