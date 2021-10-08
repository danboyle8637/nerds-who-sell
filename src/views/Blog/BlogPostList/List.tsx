import styled from "styled-components";

import { BlogCard } from "../../../components/cards/BlogCard";
import { BlogPostCard } from "../../../../src/types/blog";
import { sizes } from "../../../styles/sizes";

interface ListProps {
  posts: BlogPostCard[];
}

const ListContainer = styled.div`
  padding-bottom: 80px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 40px;
  justify-items: center;
  width: 100%;
  ${sizes.aboveMobile} {
    grid-template-columns: 1fr 1fr;
    column-gap: 12px;
    row-gap: 40px;
  }
  ${sizes.aboveIpadPro} {
    column-gap: 40px;
    width: fit-content;
  }
  ${sizes.aboveLaptop} {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
  }
`;

export const List: React.FC<ListProps> = ({ posts }) => {
  const blogPosts = posts.map((post) => {
    const id = post.frontmatter.id;
    const featureImage = post.frontmatter.featureImage;
    const altTag = post.frontmatter.altTag;
    const titleTag = post.frontmatter.titleTag;
    const headline = post.frontmatter.headline;
    const description = post.frontmatter.description;
    const category = post.frontmatter.category;
    const tags = post.frontmatter.tags;
    const slug = post.slug;

    return (
      <BlogCard
        key={id}
        featureImage={featureImage}
        altTag={altTag}
        titleTag={titleTag}
        headline={headline}
        description={description}
        category={category}
        tags={tags}
        slug={slug}
      />
    );
  });

  return <ListContainer>{blogPosts}</ListContainer>;
};
