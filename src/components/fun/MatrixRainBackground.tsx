import styled from "styled-components";

import { RainColumn } from "./MatrixRain/RainColumn";
import {
  column1Array,
  column2Array,
  column3Array,
} from "../svgs/matrixLetters";
import { sizes } from "../../styles/sizes";

interface MatrixBackgroundProps {
  shouldRainHalf: boolean;
  runAction: boolean;
  resetRain?: () => void;
}

const RainContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  z-index: -1;
`;

export const MatrixRainBackground: React.FC<MatrixBackgroundProps> = ({
  shouldRainHalf,
  runAction,
  resetRain,
}) => {
  const fullWidth = (
    <>
      <RainColumn charArray={column1Array} runAction={runAction} delay={300} />
      <RainColumn charArray={column2Array} runAction={runAction} delay={700} />
      <RainColumn charArray={column3Array} runAction={runAction} delay={100} />
      <RainColumn charArray={column1Array} runAction={runAction} delay={1100} />
      <RainColumn charArray={column2Array} runAction={runAction} delay={1300} />
      <RainColumn charArray={column3Array} runAction={runAction} delay={500} />
      <RainColumn charArray={column1Array} runAction={runAction} delay={1100} />
      <RainColumn charArray={column2Array} runAction={runAction} delay={0} />
      <RainColumn charArray={column3Array} runAction={runAction} delay={1600} />
      <RainColumn charArray={column1Array} runAction={runAction} delay={1300} />
      <RainColumn charArray={column2Array} runAction={runAction} delay={1600} />
      <RainColumn charArray={column3Array} runAction={runAction} delay={100} />
      <RainColumn charArray={column1Array} runAction={runAction} delay={700} />
      <RainColumn charArray={column2Array} runAction={runAction} delay={1600} />
      <RainColumn charArray={column3Array} runAction={runAction} delay={800} />
      <RainColumn charArray={column1Array} runAction={runAction} delay={300} />
      <RainColumn charArray={column2Array} runAction={runAction} delay={1300} />
      <RainColumn charArray={column3Array} runAction={runAction} delay={500} />
    </>
  );

  const halfWidth = (
    <>
      <RainColumn charArray={column1Array} runAction={runAction} delay={300} />
      <RainColumn charArray={column2Array} runAction={runAction} delay={700} />
      <RainColumn charArray={column3Array} runAction={runAction} delay={100} />
      <RainColumn charArray={column1Array} runAction={runAction} delay={1000} />
      <RainColumn charArray={column2Array} runAction={runAction} delay={1300} />
      <RainColumn charArray={column3Array} runAction={runAction} delay={500} />
      <RainColumn charArray={column1Array} runAction={runAction} delay={1100} />
      <RainColumn charArray={column2Array} runAction={runAction} delay={0} />
      <RainColumn charArray={column3Array} runAction={runAction} delay={900} />
    </>
  );

  return (
    <RainContainer>{shouldRainHalf ? halfWidth : fullWidth}</RainContainer>
  );
};
