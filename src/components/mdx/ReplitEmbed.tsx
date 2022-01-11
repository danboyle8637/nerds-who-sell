import styled from "styled-components";

interface EmbedProps {
  replitUrl: string;
}

const EmbedFrame = styled.iframe`
  box-shadow: 0 6px 12px hsla(0, 0%, 0%, 0.6);
`;

export const ReplitEmbed: React.FC<EmbedProps> = ({ replitUrl }) => {
  return (
    <EmbedFrame
      frameBorder="0"
      width="100%"
      height="680px"
      src={replitUrl}
    ></EmbedFrame>
  );
};
