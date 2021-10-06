import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import styled from "styled-components";

interface NavLinkProps {
  navLabel: string;
  slug: string;
  width: number;
}

const NavLinkContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 2px;
  width: fit-content;
`;

const Label = styled.a`
  font-size: 2rem;
  font-weight: 700;
  color: var(--base-text-color);
  text-decoration: none;
  text-transform: capitalize;
`;

const UnderlineContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

const Pixel = styled.div`
  background-color: var(--pixel-color);
  width: 4px;
  height: 4px;
`;

export const NavLink: React.FC<NavLinkProps> = ({ navLabel, slug, width }) => {
  const [pixelArray, setPixelArray] = useState<number[]>([]);
  const pixelRefArray = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    let pixelArray: number[] = [];
    for (let i = 0; i < width / 4; i++) {
      pixelArray[i] = i;
    }
    setPixelArray(pixelArray);
  }, [width]);

  const pixels = pixelArray.map((pixel, i) => (
    <Pixel
      key={pixel}
      ref={(el: HTMLDivElement) => (pixelRefArray.current[i] = el)}
    />
  ));

  const styles = {
    "--pixel-color": "var(--accent-2)",
  } as React.CSSProperties;

  return (
    <NavLinkContainer>
      <Link href={slug} passHref={true}>
        <Label>{navLabel}</Label>
      </Link>
      <UnderlineContainer style={styles}>{pixels}</UnderlineContainer>
    </NavLinkContainer>
  );
};
