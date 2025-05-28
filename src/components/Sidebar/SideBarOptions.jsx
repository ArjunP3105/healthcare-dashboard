import StyledList from "../UI/StyledComponents/StyledList";

const StyledDiv = StyledList;

function SideBarOptions({ option }) {
  const { name, icon: Icon } = option;
  return (
    <StyledDiv name={name}>
      <Icon />
      <span>{name}</span>
    </StyledDiv>
  );
}

export default SideBarOptions;
