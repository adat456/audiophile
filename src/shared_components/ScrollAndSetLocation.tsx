import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollAndSetLocation({ setCurLocation }) {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", 
    });

    if (pathname !== "/checkout") setCurLocation(pathname);
  }, [pathname]);

  return null;
};

export default ScrollAndSetLocation;