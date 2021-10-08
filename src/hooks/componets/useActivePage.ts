import { useMemo } from "react";
import { useRouter } from "next/router";

export const useActivePage = () => {
  const { asPath } = useRouter();

  const currentPage = useMemo(() => {
    const page = asPath.split("/")[1];
    return page;
  }, [asPath]);

  return currentPage;
};
