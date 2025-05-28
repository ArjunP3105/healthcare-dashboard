import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
import { PiBellSimpleFill } from "react-icons/pi";

const SearchLayout = styled.div`
  display: flex;
  justify-content: center;
  justify-self: center;
  width: 90%;
  margin: 1rem 0;
  justify-content: space-between;
`;

const SearchContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 90%;
  border: 2px solid transparent;
  border-radius: 7px;
`;

const StyledInput = styled.input`
  outline: none;
  border: 2px solid transparent;
  width: 95%;
  padding: 8px;
`;

const StyledSearchIcon = styled(CiSearch)`
  height: 70%;
  width: 50%;
  padding: 8px;
`;

const StyledBellIcon = styled(PiBellSimpleFill)`
  padding: 5px;
  color: #3d38a9;
  height: 15px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BellIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 6px;
  border: 1px solid transparent;
  border-radius: 7px;
`;

function Search() {
  return (
    <SearchLayout>
      <SearchContainer>
        <IconWrapper>
          <StyledSearchIcon />
        </IconWrapper>
        <IconWrapper>
          <StyledInput placeholder="Search"></StyledInput>
        </IconWrapper>
      </SearchContainer>
      <BellIconWrapper>
        <StyledBellIcon />
      </BellIconWrapper>
    </SearchLayout>
  );
}

export default Search;
