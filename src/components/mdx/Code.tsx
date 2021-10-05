import styled from "styled-components";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/shadesOfPurple";

interface CodeProps {
  language: Language;
}

const CodeContainer = styled.div`
  width: 100%;
`;

const Pre = styled.pre`
  padding: 0.5em;
  border-radius: 12px;
  box-shadow: 0 0 0 5px hsla(0, 0%, 0%, 0.4);
  border: 1px solid red;
  width: 100%;
  overflow-x: scroll;
`;

const Line = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  justify-items: start;
  align-items: center;
  gap: 6px;
`;

const LineNo = styled.span`
  font-size: 1.6rem;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

const LineContent = styled.span`
  font-size: 1.6rem;
  line-height: 1.4;
`;

export const Code: React.FC<CodeProps> = ({ language, children }) => {
  return (
    <Highlight
      {...defaultProps}
      // @ts-ignore
      code={children}
      theme={theme}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <CodeContainer>
          <Pre className={className} style={{ ...style, padding: "20px" }}>
            {tokens.map((line, i) => (
              <Line key={i} {...getLineProps({ line, key: i })}>
                <LineNo>{i + 1}</LineNo>
                <LineContent>
                  {line.map((token, key, index) => (
                    <span key={key} {...getTokenProps({ token, key, index })} />
                  ))}
                </LineContent>
              </Line>
            ))}
          </Pre>
        </CodeContainer>
      )}
    </Highlight>
  );
};
