import styled from "styled-components";

import { CallOutIcon } from "../images/blog/CallOutIcon";

const CallOutContainer = styled.div`
  padding: 50px 0 80px 0;
  width: 100%;
  max-width: 660px;
  line-height: 0;
`;

const ContentContainer = styled.div`
  position: relative;
  padding: 12px;
  background-color: var(--section-background-5);
  border-radius: 12px;
  width: 100%;
  & p {
    padding-bottom: 12px;
    color: hsl(225, 85%, 80%);
  }
`;

const Icon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  transform: translate(-14px, -14px);
`;

export const CallOutBox: React.FC = ({ children }) => {
  return (
    <CallOutContainer>
      <ContentContainer>
        {children}
        <Icon>
          <CallOutIcon />
        </Icon>
      </ContentContainer>
    </CallOutContainer>
  );
};
