import { useState, useEffect, CSSProperties } from "react";
import styled from "styled-components";

interface CharacterCountChipProps {
  value: string;
  maxCount: number;
}

const ChipContainer = styled.div`
  padding: 6px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--chip-container-background, var(--primary-background));
  border-radius: 60px;
  box-shadow: 0 0 0 4px var(--chip-box-shadow, var(--section-background-2));
  width: fit-content;
  height: 30px;
`;

const CountContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 4px;
`;

const CountLabel = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--count-label-color, var(--accent-2));
  letter-spacing: 0.18rem;
`;

export const CharacterCountChip: React.FC<CharacterCountChipProps> = ({
  value,
  maxCount,
}) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const currentCount = value.length;
    setCount(currentCount);
  }, [value]);

  const styles = {
    "--count-label-color":
      count < 300
        ? "var(--color-accent-blue-1)"
        : count > 300 && count < 350
        ? "hsl(30, 71%, 56%)"
        : "hsl(345, 64%, 56%)",
  } as CSSProperties;

  return (
    <ChipContainer>
      <CountContainer>
        <CountLabel style={styles}>{count}</CountLabel>
        <CountLabel>/</CountLabel>
        <CountLabel>{maxCount}</CountLabel>
      </CountContainer>
    </ChipContainer>
  );
};
