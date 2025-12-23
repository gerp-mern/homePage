"use client";

import companyDetails from "@/data/company";
import { useEffect, useState } from "react";

/* ---------- helpers ---------- */
const truncateText = (text: string, limit: number) => {
  if (text.length <= limit) return text;
  return text.slice(0, limit);
};

const useCharLimit = () => {
  const [limit, setLimit] = useState(70);

  useEffect(() => {
    const updateLimit = () => {
      const width = window.innerWidth;

      if (width < 640) setLimit(90);          // mobile
      else if (width < 768) setLimit(150);    // sm
      else if (width < 1024) setLimit(180);   // md
      else setLimit(200);                     // lg+
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
  const text = companyDetails.bannerInfo?.description ?? "";
  const isLong = text.length > charLimit;

  return (
    <div className="max-w-2xl">
      <p className="text-[14px] sm:text-[16px] md:text-xl text-foreground/80 mb-2">
        {/* text */}
        <span
          style={
            !expanded
              ? {
                  WebkitMaskImage:
                    "linear-gradient(to right, black 0%, black calc(100% - 3ch), transparent 100%)",
                  maskImage:
                    "linear-gradient(to right, black 0%, black calc(100% - 3ch), transparent 100%)",
                }
              : {}
          }
        >
          {expanded ? text : truncateText(text, charLimit)}
        </span>

        {/* see more / less */}
        {isLong && (
          <span
            onClick={() => setExpanded(!expanded)}
            className="ml-1 italic cursor-pointer text-primary text-sm md:text-[15px] font-medium"
          >
            {expanded ? (
              <span className="hover:underline">See less</span>
            ) : (
              <span>
                ...<span className="hover:underline">See More</span>
              </span>
            )}
          </span>
        )}
      </p>
    </div>
  );
};

export default SeeMore;

