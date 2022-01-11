import Link from "next/link";
import styled from "styled-components";

import { ExternalLinkIcon } from "../svgs/ExternalLinkIcon";
import { InternalLinkIcon } from "../svgs/InternalLinkIcon";

interface PostLinkProps {
  slug?: string;
  url?: string;
}

const LinkContainer = styled.span`
  padding-right: 8px;
  display: inline-grid;
  grid-template-columns: 1fr min-content;
  gap: 6px;
  align-items: center;
  width: fit-content;
`;

const A = styled.a`
  position: relative;
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--accent-2);
  text-decoration: none;
  &:before {
    position: absolute;
    bottom: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 3px;
    border-radius: 20px;
    background-color: var(--accent-2);
  }
  &:visited {
    color: var(--accent-1);
  }
`;

const InternalIcon = styled(InternalLinkIcon)`
  width: 14px;
`;

const ExternalIcon = styled(ExternalLinkIcon)`
  width: 14px;
`;

export const PostLink: React.FC<PostLinkProps> = ({ slug, url, children }) => {
  return (
    <>
      {slug ? (
        <LinkContainer>
          <Link href={slug} passHref={true}>
            <A>{children}</A>
          </Link>
          <InternalIcon />
        </LinkContainer>
      ) : null}
      {url ? (
        <LinkContainer>
          <A href={url} target="_blank" rel="noopener noreferrer">
            {children}
          </A>
          <ExternalIcon />
        </LinkContainer>
      ) : null}
    </>
  );
};
