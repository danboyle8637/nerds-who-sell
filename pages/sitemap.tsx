import { GetServerSideProps } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const SiteMap = () => {};

const createSiteMap = (
  posts: string[]
) => `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
    <url>
      <loc>https://nerdswhosell.com</loc>
    </url>
    <url>
      <loc>https://nerdswhosell.com/about</loc>
    </url>
    <url>
      <loc>https://nerdswhosell.com/blog</loc>
    </url>
    <url>
      <loc>https://nerdswhosell.com/contact</loc>
    </url>
    <url>
      <loc>https://nerdswhosell.com/portfolio</loc>
    </url>
    <url>
      <loc>https://nerdswhosell.com/blog/tag?tag=typescript</loc>
    </url>
    <url>
      <loc>https://nerdswhosell.com/blog/tag?tag=javascript</loc>
    </url>
    <url>
      <loc>https://nerdswhosell.com/blog/tag?tag=react</loc>
    </url>
    <url>
      <loc>https://nerdswhosell.com/blog/tag?tag=faunadb</loc>
    </url>
    <url>
      <loc>https://nerdswhosell.com/blog/tag?tag=cloudflare-workers</loc>
    </url>
    <url>
      <loc>https://nerdswhosell.com/blog/tag?tag=durable-objects</loc>
    </url>
    <url>
      <loc>https://nerdswhosell.com/blog/tag?tag=images</loc>
    </url>
    <url>
      <loc>https://nerdswhosell.com/blog/tag?tag=node</loc>
    </url>
    <url>
      <loc>https://nerdswhosell.com/blog/tag?tag=go</loc>
    </url>
    <url>
      <loc>https://nerdswhosell.com/blog/tag?tag=swift</loc>
    </url>
    <url>
      <loc>https://nerdswhosell.com/blog/tag?tag=dates</loc>
    </url>
    <url>
      <loc>https://nerdswhosell.com/blog/tag?tag=marketing-book-review</loc>
    </url>
    <url>
      <loc>https://nerdswhosell.com/blog/tag?tag=coding-book-review</loc>
    </url>
    <url>
      <loc>https://nerdswhosell.com/blog/tag?tag=media-buying</loc>
    </url>
    <url>
      <loc>https://nerdswhosell.com/blog/tag?tag=copywriting</loc>
    </url>
    <url>
      <loc>https://nerdswhosell.com/blog/tag?tag=email-copy</loc>
    </url>
    <url>
      <loc>https://nerdswhosell.com/blog/tag?tag=conversion</loc>
    </url>
    <url>
      <loc>https://nerdswhosell.com/blog/tag?tag=portfolio</loc>
    </url>
    <url>
      <loc>https://nerdswhosell.com/blog/tag?tag=web-dev</loc>
    </url>
   
		${posts}
  </urlset>
`;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { res } = ctx;

  const POSTS_PATH_2021 = path.join(process.cwd(), "data/blog/2021");

  const getSourceOfFile = (postsPath: string, filename: string) => {
    return fs.readFileSync(path.join(postsPath, filename), "utf8");
  };

  const getAllSlugs = (postsPath: string) => {
    return fs
      .readdirSync(postsPath)
      .filter((path) => /\.mdx?$/.test(path))
      .map((post) => {
        const source = getSourceOfFile(postsPath, post);
        const { data } = matter(source);
        const slug = post.replace(/\.mdx?$/, "");

        return {
          slug: slug,
          frontmatter: data,
        };
      });
  };

  const publishedPosts = getAllSlugs(POSTS_PATH_2021).filter(
    (post) => post.frontmatter.draft === false
  );

  const blogSiteMap = publishedPosts.map((slug) => {
    return `
			<url>
				<loc>https://nerdswhosell.com/blog/${slug.slug}</loc>
			</url>
		`;
  });

  const siteMap = createSiteMap(blogSiteMap);

  res.setHeader("Content-Type", "text/xml");
  res.write(siteMap);
  res.end();

  return { props: {} };
};

export default SiteMap;
