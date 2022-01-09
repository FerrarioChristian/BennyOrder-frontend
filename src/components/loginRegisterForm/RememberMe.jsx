import styled from "styled-components";
import React from "react";

export default function RememberMe(props) {
  return (
    <>
      <StyledContainer>
        <StyledLabel>
          <StyledCheckbox type="checkbox" onClick={props.onClick} />
          <StyledSpan></StyledSpan>
          Mantienimi autenticato
        </StyledLabel>
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.div`
  display: inline-flex;
  margin-bottom: 1rem;
`;

const StyledSpan = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  border: solid 2px var(--accent);
  border-radius: 3px;

  &:after {
    content: "";
    position: absolute;
    display: none;
  }
`;

const StyledCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked ~ span {
    background-color: var(--accent);
  }

  &:checked ~ span:after {
    display: block;
  }
`;

const StyledLabel = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  line-height: 20px;
  cursor: pointer;
  font-size: 15px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: var(--accent);

  &:hover span {
    background-color: var(--accent);
  }

  & span:after {
    left: 4px;
    top: 1px;
    width: 4px;
    height: 9px;
    border: solid var(--primary);
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
