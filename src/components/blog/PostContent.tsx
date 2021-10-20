import styled from "styled-components";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import {
  Headline3,
  Headline4,
  Headline5,
  Paragraph,
  InternalLink,
  Strong,
  List,
  ListItem,
  CallOutBox,
  PostImage,
  YouTubeEmbed,
} from "../mdx";
import { sizes } from "../../styles/sizes";

interface PostContentProps {
  postContent: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const components = {
  h3: (props: any) => <Headline3 {...props} />,
  h4: (props: any) => <Headline4 {...props} />,
  h5: (props: any) => <Headline5 {...props} />,
  p: (props: any) => <Paragraph {...props} />,
  InternalLink,
  a: (props: any) => <InternalLink {...props} />,
  strong: (props: any) => <Strong {...props} />,
  ul: (props: any) => <List type="ul" {...props} />,
  ol: (props: any) => <List type="ol" {...props} />,
  li: (props: any) => <ListItem {...props} />,
  CallOutBox,
  PostImage,
  YouTubeEmbed,
};

const BaseContainer = styled.div`
  padding: 0 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  & p {
    padding-bottom: var(--paragraph-padding-bottom, 4rem);
  }
  ${sizes.aboveMobile} {
    padding: 0 26px;
  }
  ${sizes.aboveTablet} {
    padding: 0;
  }
`;

export const PostContent: React.FC<PostContentProps> = ({ postContent }) => {
  return (
    <BaseContainer>
      <MDXRemote {...postContent} components={components} />
    </BaseContainer>
  );
};
