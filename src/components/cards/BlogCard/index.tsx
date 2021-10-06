import Link from "next/link";
import styled from "styled-components";

import { BlogCardImage } from "../../images/blog/BlogCardImage";
import { CategoryIcon } from "./CategoryIcon";
import { BlogPostTagButton } from "../../buttons/BlogPostTagButton";
import { bodyText, smallHeadline } from "../../../styles/typography";
import { BlogCategory, BlogTag } from "../../../types/blog";
import { sizes } from "../../../styles/sizes";

interface BlogCardProps {
  featureImage: string;
  altTag: string;
  titleTag: string;
  headline: string;
  description: string;
  category: BlogCategory;
  tags: BlogTag[];
  slug: string;
}

const CardComplexContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 12px;
  justify-items: end;
  width: 100%;
  max-width: 500px;
`;

const CardContainer = styled.a`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 0;
  text-decoration: none;
  background-color: var(--blog-card-background);
  border-radius: 12px 40px 12px 12px;
  width: 100%;
  cursor: pointer;
  box-shadow: 0 4px 4px 0 hsla(0, 0%, 0%, 0.3);
  overflow: hidden;
  transition: transform, box-shadow, 300ms ease-in-out;
  &:focus {
    outline-color: var(--accent-2);
    outline-width: 2px;
    outline-offset: 8px;
    outline-style: dotted;
  }
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 7px 18px 2px hsla(0, 0%, 0%, 0.18);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
`;

const ContentContainer = styled.div`
  padding: 12px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 12px;
  justify-items: start;
  width: 100%;
`;

const CardHeadline = styled.h2`
  ${smallHeadline}
  font-size: 2.6rem;
  line-height: 1.4;
  ${sizes.aboveMobile} {
    font-size: 2.6rem;
    line-height: 1.4;
  }
  ${sizes.aboveTablet} {
    font-size: 3.8rem;
  }
`;

const CardDescription = styled.p`
  ${bodyText}
  font-size: 1.4rem;
  line-height: 1.5;
  ${sizes.aboveMobile} {
    font-size: 1.4rem;
    line-height: 1.5;
  }
  ${sizes.aboveTablet} {
    font-size: 1.6rem;
  }
`;

const CategoryContainer = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`;

const TagContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  width: 100%;
`;

export const BlogCard: React.FC<BlogCardProps> = ({
  featureImage,
  altTag,
  titleTag,
  headline,
  description,
  category,
  tags,
  slug,
}) => {
  const handleTagClick = () => {
    console.log("Redirect to page with filtered blog posts for that tag.");
  };

  const postTags = tags.map((tag, i) => {
    return <BlogPostTagButton key={i} tag={tag} handleClick={handleTagClick} />;
  });

  const styles = {
    "--blog-card-background": "hsl(0, 0%, 9%)",
  } as React.CSSProperties;

  return (
    <CardComplexContainer style={styles} aria-label={headline}>
      <Link href={`/blog/${slug}`} passHref={true}>
        <CardContainer>
          <ImageContainer>
            <BlogCardImage
              url={featureImage}
              altTag={altTag}
              titleTag={titleTag}
            />
            <CategoryContainer>
              <CategoryIcon category={category} />
            </CategoryContainer>
          </ImageContainer>
          <ContentContainer>
            <CardHeadline>{headline}</CardHeadline>
            <CardDescription>{description}</CardDescription>
          </ContentContainer>
        </CardContainer>
      </Link>
      <TagContainer>{postTags}</TagContainer>
    </CardComplexContainer>
  );
};
