import styled from "styled-components";

interface CodeSandboxEmbedProps {
  title: string;
  url: string;
}

const Embed = styled.iframe`
  border: 0;
  border-radius: 12px;
  width: 100%;
  height: 700px;
  overflow: hidden;
`;

export const CodeSandboxEmbed: React.FC<CodeSandboxEmbedProps> = ({
  title,
  url,
}) => {
  return (
    <Embed
      src={url}
      title={title}
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></Embed>
  );
};
