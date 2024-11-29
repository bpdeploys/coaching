import styled from "styled-components";
import theme from "../utils/theme";

const StyTitle = styled.div`
  h3 {
    font-size: ${theme.typography.large};
  }
`;

const Title = ({ title }) => {
  return (
    <StyTitle>
      <h3>{title}</h3>
    </StyTitle>
  );
};

export default Title;
