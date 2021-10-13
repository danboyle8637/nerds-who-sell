import styled from "styled-components";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import { Header } from "./Header";
import { ContactInfoChip } from "../../../components/chips/ContactInfoChip";
import {
  Paragraph,
  InternalLink,
  Strong,
  List,
  ListItem,
} from "../../../components/mdx";
import { sizes } from "../../../styles/sizes";

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
  display: grid;
  grid-template-columns: 1fr;
`;

export const BasicThankYou = () => {};
