import styled from "styled-components";

import { BlogPostImage } from "../images/blog/BlogPostImage";
import { BlogPostTagButton } from "../buttons/blog/BlogPostTagButton";
import { BlogTag } from "../../types/blog";
import { sizes } from "../../styles/sizes";

interface BlogPostHeaderProps {
  date: string;
  featureImage: string;
  altTag: string;
  titleTag: string;
  tags: BlogTag[];
}

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 30px;
  width: 100%;
  max-width: 800px;
`;

const PostImage = styled.div`
  background: var(--section-background-5);
  width: 100%;
  box-shadow: 0 0 0 6px hsla(224, 33%, 44%, 0.4);
  line-height: 0;
  overflow: hidden;
  ${sizes.aboveTablet} {
    border-radius: 12px;
  }
`;

const TagsContainer = styled.div`
  padding: 0 12px;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  width: 100%;
`;

export const BlogPostHeader: React.FC<BlogPostHeaderProps> = ({
  date,
  featureImage,
  altTag,
  titleTag,
  tags,
}) => {
  const postTags = tags.map((tag, i) => {
    return <BlogPostTagButton key={i} tag={tag} />;
  });

  return (
    <HeaderContainer>
      <PostImage>
        <BlogPostImage
          date={date}
          url={featureImage}
          altTag={altTag}
          titleTag={titleTag}
        />
      </PostImage>
      <TagsContainer>{postTags}</TagsContainer>
    </HeaderContainer>
  );
};
