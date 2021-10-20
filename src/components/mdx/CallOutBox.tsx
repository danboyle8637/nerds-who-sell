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
  padding: 20px 12px 0 12px;
  background-color: var(--section-background-5);
  border-radius: 12px;
  width: 100%;
  & p {
    --paragraph-padding-bottom: 2rem;
    color: hsl(225, 85%, 80%);
  }
`;

const Icon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  transform: translate(14px, -14px);
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
