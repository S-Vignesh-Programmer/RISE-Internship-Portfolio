import { useState, useEffect } from "react";
import { getActiveSection } from "../utils/helpers";

export const useScrollSpy = (
  sections = ["home", "about", "skills", "projects", "contact"]
) => {
  const [activeSection, setActiveSection] = useState(sections[0]);

  useEffect(() => {
    const handleScroll = () => {
      const active = getActiveSection(sections);
      setActiveSection(active);
    };

    // Set initial active section
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return activeSection;
};
