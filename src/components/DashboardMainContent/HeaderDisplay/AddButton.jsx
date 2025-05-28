import styled from "styled-components";
import { IoIosAdd } from "react-icons/io";

const Container = styled.div`
  display: flex;

  justify-content: center;
  background-color: #3636a6;
  height: 40px;
  width: 40px;
  border: 1px transparent solid;
  border-radius: 7px;
`;

const Add = styled(IoIosAdd)`
  height: 100%;
  width: 100%;
  color: #f6faff;
`;

function AddButton() {
  return (
    <Container>
      <Add />
    </Container>
  );
}

export default AddButton;
