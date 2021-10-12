import styled from "styled-components";

interface YouTubeEmbedProps {
  videoId: string;
  videoTitle: string;
}

const IframeContainer = styled.div`
  position: relative;
  margin-bottom: 40px;
  padding-top: calc(1080 / 1920 * 100%);
  border-radius: 20px;
  overflow: hidden;
  width: 100%;
  box-shadow: 0 0 0 6px rgba(0, 0, 0, 0.4);
  overflow: hidden;
`;

const YouTubePlayer = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  videoTitle,
  videoId,
}) => {
  return (
    <IframeContainer>
      <YouTubePlayer
        width="100%"
        height="100%"
        src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
        title={videoTitle}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></YouTubePlayer>
    </IframeContainer>
  );
};
