import Link from "next/link";
import styled from "styled-components";

import { BlogCardImage } from "../../images/BlogCardImage";
import { CategoryIcon } from "./CategoryIcon";
import { BlogPostTagButton } from "../../buttons/BlogPostTagButton";
import { bodyText, smallHeadline } from "../../../styles/typography";
import { BlogCategory, BlogTag } from "../../../types/blog";

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
  &:focus {
    outline-color: var(--accent-2);
    outline-width: 2px;
    outline-offset: 8px;
    outline-style: dotted;
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
  font-size: 3.8rem;
`;

const CardDescription = styled.p`
  ${bodyText}
  line-height: 1.5;
`;

const CategoryContainer = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`;

const TagContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 1fr;
  gap: 10px;
  justify-items: end;
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

  return (
    <Link href={slug} passHref={true}>
      <CardComplexContainer aria-label={headline}>
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
        <TagContainer>{postTags}</TagContainer>
      </CardComplexContainer>
    </Link>
  );
};
