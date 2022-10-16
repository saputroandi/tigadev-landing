import React from "react";

export default function useOnWindowScroll(callback: (val: number) => void) {
  React.useEffect(() => {
    const onScroll = () => {
      const scrolled = document.documentElement.scrollTop;
      return callback(scrolled);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [callback]);
}
