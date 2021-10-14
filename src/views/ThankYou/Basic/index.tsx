import styled from "styled-components";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import { ThankYouHeadline } from "./ThankYouHeadline";
import { ThankYouNerd } from "./ThankYouNerd";
import { ContactInfoChip } from "../../../components/chips/ContactInfoChip";
import {
  Paragraph,
  InternalLink,
  Strong,
  List,
  ListItem,
} from "../../../components/mdx";
import { sizes } from "../../../styles/sizes";

interface BasicThankYouProps {
  headline: string;
  email: string;
  phone: string;
  twitter: string;
  content: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const components = {
  p: (props: any) => <Paragraph {...props} />,
  InternalLink,
  a: (props: any) => <InternalLink {...props} />,
  strong: (props: any) => <Strong {...props} />,
  ul: (props: any) => <List type="ul" {...props} />,
  ol: (props: any) => <List type="ol" {...props} />,
  li: (props: any) => <ListItem {...props} />,
};

const ContentContainer = styled.section`
  padding: 60px 12px 120px 12px;
  display: grid;
  grid-template-areas:
    "headline"
    "nerd"
    "copy"
    "contact";
  gap: 20px;
  justify-items: center;
  width: 100%;
  ${sizes.aboveMobile} {
    padding: 80px 12px 160px 12px;
    grid-template-areas:
      "headline headline"
      "nerd copy"
      "contact contact";
    column-gap: 10px;
    row-gap: 60px;
  }
  ${sizes.aboveTablet} {
    padding: 120px 26px 160px 26px;
  }
  ${sizes.aboveIpadPro} {
    padding: 120px 26px 160px 26px;
    width: 1000px;
  }
`;

const BaseContainer = styled.div`
  grid-area: copy;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  & p {
    padding-bottom: 4rem;
  }
  ${sizes.aboveMobile} {
    padding: 0 14px;
  }
  ${sizes.aboveTablet} {
    padding: 0;
  }
`;

const ContactContainer = styled.div`
  grid-area: contact;
  padding-top: 40px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 20px;
  justify-items: center;
  width: 100%;
  ${sizes.aboveTablet} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const BasicThankYou: React.FC<BasicThankYouProps> = ({
  headline,
  email,
  phone,
  twitter,
  content,
}) => {
  return (
    <ContentContainer>
      <ThankYouHeadline headline={headline} />
      <ThankYouNerd />
      <BaseContainer>
        <MDXRemote {...content} components={components} />
      </BaseContainer>
      <ContactContainer>
        <ContactInfoChip icon="phone" contactInfo={phone} />
        <ContactInfoChip icon="email" contactInfo={email} />
        <ContactInfoChip icon="twitter" contactInfo={twitter} />
      </ContactContainer>
    </ContentContainer>
  );
};
