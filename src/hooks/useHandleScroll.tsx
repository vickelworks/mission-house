import { useState } from "react";
const useHandleScroll = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    offset > 400 ? setScrolled(true) : setScrolled(false);
  }
  return {
    scrolled,
    handleScroll
  }
}

export default useHandleScroll;