"use client";

import companyDetails from "@/data/company";
import { useEffect, useState } from "react";

/* ---------- helpers ---------- */
const truncateText = (text: string, limit: number) => {
  if (text.length <= limit) return text;
  return text.slice(0, limit) + "...";
};

const useCharLimit = () => {
  const [limit, setLimit] = useState(70);

  useEffect(() => {
    const updateLimit = () => {
      const width = window.innerWidth;

      if (width < 640) setLimit(90);        // mobile
      else if (width < 768) setLimit(128);  // sm
      else if (width < 1024) setLimit(140); // md
      else setLimit(180);                   // lg+
    };

    updateLimit();
    window.addEventListener("resize", updateLimit);

    return () => window.removeEventListener("resize", updateLimit);
  }, []);

  return limit;
};

/* ---------- component ---------- */
const SeeMore = () => {
  const [expanded, setExpanded] = useState(false);
  const charLimit = useCharLimit();

  const text = companyDetails.bannerInfo.description;
  const isLong = text.length > charLimit;

  return (
    <div className="max-w-2xl">
      <p className="text-lg md:text-xl text-foreground/90 mb-2">
        {expanded ? text : truncateText(text, charLimit)}
      </p>

      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-primary text-sm font-medium hover:underline"
        >
          {expanded ? "See less" : "See more"}
        </button>
      )}
    </div>
  );
};

export default SeeMore;
