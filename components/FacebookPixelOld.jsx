"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect, useState } from "react";
import * as pixelOld from "/app/lib/fpixel_old";

const FacebookPixelOld = () => {
  const [loaded, setLoaded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!loaded) return;

    pixelOld.OldPageview();
  }, [pathname, loaded]);

  return (
    <div>
      <Script
        id="fb-pixel-old"
        src="/scripts/pixelOld.js"
        strategy="afterInteractive"
        onLoad={() => setLoaded(true)}
        data-pixel-id-old={pixelOld.FB_PIXEL_ID}
      />
    </div>
  );
};

export default FacebookPixelOld;
