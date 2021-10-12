import styled, { css } from "styled-components";

import { ListType } from "../../types/components";

interface ListProps {
  type: ListType;
}

const list = css`
  margin: 0;
  padding: 0 0 40px 40px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 30px;
  width: 100%;
`;

const UnorderedList = styled.ul`
  ${list}
`;

const OrderedList = styled.ol`
  ${list}
`;

export const List: React.FC<ListProps> = ({ type, children }) => {
  return (
    <>
      {type === "ol" ? (
        <OrderedList>{children}</OrderedList>
      ) : (
        <UnorderedList>{children}</UnorderedList>
      )}
    </>
  );
};
