import styled from "styled-components";

import { CallOutIcon } from "../images/blog/CallOutIcon";

const CallOutContainer = styled.div`
  position: relative;
  background-color: var(--section-background-5);
  width: 100%;
  max-width: 660px;
  line-height: 0;
`;

const ContentContainer = styled.div`
  padding: 12px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 20px;
  width: 100%;
`;

const Icon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  transform: translate(-10%, -10%);
`;

export const CallOutBox: React.FC = ({ children }) => {
  return (
    <CallOutContainer>
      <ContentContainer>{children}</ContentContainer>
      <Icon>
        <CallOutIcon />
      </Icon>
    </CallOutContainer>
  );
};
