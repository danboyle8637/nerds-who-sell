import { useRouter } from "next/router";
import styled from "styled-components";

import Global from "../styles/Global";
import { MenuDrawer } from "../components/overlays/MenuDrawer";

const BaseContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  overflow: hidden;
`;

export const BaseLayout: React.FC = ({ children }) => {
  const { pathname } = useRouter();

  return (
    <>
      <BaseContainer>
        <Global />
        <ContentContainer>{children}</ContentContainer>
      </BaseContainer>
    </>
  );
};
