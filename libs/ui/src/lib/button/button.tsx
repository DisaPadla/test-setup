import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ButtonProps {
  onClick: () => void;
}

const StyledButton = styled.button`
  color: pink;
`;

export function Button(props: ButtonProps) {
  return (
    <StyledButton {...props}>
      <h1>Welcome to Button!</h1>
    </StyledButton>
  );
}

export default Button;
