import styled from "styled-components";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

import { BlogPostHeader } from "../../../components/blog/BlogPostHeader";
import { BlogPostHeadline } from "../../../components/blog/BlogPostHeadline";
import { PostContent } from "../../../components/blog/PostContent";
import { CallToActionSection } from "./CallToActionSection";
import { BlogFrontmatter } from "../../../types/blog";
import { sizes } from "../../../styles/sizes";

interface BlogPostViewProps {
  frontmatter: BlogFrontmatter;
  content: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const ViewContainer = styled.div`
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 60px;
  justify-items: center;
  width: 100%;
  ${sizes.aboveTablet} {
    padding: 40px 0 0 0;
  }
  ${sizes.aboveIpadPro} {
    padding: 80px 0 0 0;
  }
`;

const CallToActionContainer = styled.div`
  padding: 80px 0 0 0;
  width: 100%;
`;

export const BlogPostView: React.FC<BlogPostViewProps> = ({
  frontmatter,
  content,
}) => {
  const handleTagClick = () => {};

  return (
    <ViewContainer>
      <BlogPostHeader
        featureImage={frontmatter.featureImage}
        altTag={frontmatter.altTag}
        titleTag={frontmatter.titleTag}
        tags={frontmatter.tags}
        handleTagClick={handleTagClick}
      />
      <BlogPostHeadline
        headline={frontmatter.headline}
        category={frontmatter.category}
      />
      <PostContent postContent={content} />
      <CallToActionContainer>
        <CallToActionSection type={frontmatter.category} />
      </CallToActionContainer>
    </ViewContainer>
  );
};
