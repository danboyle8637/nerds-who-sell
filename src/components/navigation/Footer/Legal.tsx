import styled from "styled-components";

import { bodyText } from "../../../styles/typography";
import { PostLink } from "../../mdx/Link";
import { sizes } from "../../../styles/sizes";

const LegalContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  padding: 8px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  background: hsla(225, 32%, 16%, 0.6);
  border-radius: 6px;
  width: max-content;
  transform: translateX(-50%);
  ${sizes.aboveMobile} {
    left: unset;
    right: 20px;
    transform: translateX(0);
  }
`;

const Copywrite = styled.p`
  ${bodyText}
  font-size: 1.4rem;
`;

export const Legal = () => {
  return (
    <LegalContainer>
      <Copywrite>© 2021</Copywrite>
      <PostLink slug="/legal/privacy">Privacy Policy</PostLink>
    </LegalContainer>
  );
};
