import styled from "styled-components";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import {
  Paragraph,
  InternalLink,
  Strong,
  List,
  ListItem,
  CallOutBox,
  PostImage,
} from "../mdx";
import { sizes } from "../../styles/sizes";

interface PostContentProps {
  postContent: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const components = {
  p: (props: any) => <Paragraph {...props} />,
  InternalLink,
  a: (props: any) => <InternalLink {...props} />,
  strong: (props: any) => <Strong {...props} />,
  ul: (props: any) => <List type="ul" {...props} />,
  ol: (props: any) => <List type="ol" {...props} />,
  li: (props: any) => <ListItem {...props} />,
  CallOutBox,
  PostImage,
};

const ContentContainer = styled.div`
  padding: 0 12px;
  width: 100%;
  max-width: 800px;
  ${sizes.aboveMobile} {
    padding: 0 26px;
  }
  ${sizes.aboveTablet} {
    padding: 0;
  }
`;

export const PostContent: React.FC<PostContentProps> = ({ postContent }) => {
  return (
    <ContentContainer>
      <MDXRemote {...postContent} components={components} />
    </ContentContainer>
  );
};
