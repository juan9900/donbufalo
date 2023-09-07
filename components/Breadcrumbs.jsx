"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Link } from "@nextui-org/react";

const invalidLinks = ["bufalo"];
export default function BreadCrumbs() {
  const router = useRouter();
  const pathname = usePathname();
  const [breadcrumbs, setBreadcrumbs] = useState(null);

  useEffect(() => {
    const pathArray = pathname.split("/");
    setBreadcrumbs(pathArray);
    // Filter the pathArray checking if any of the paths is included in the invalidLinks array
  }, []);

  if (breadcrumbs === null) {
    return null;
  }
  return (
    <div className="flex flex-row py-5 bg-gray-200 w-fit rounded-lg px-5 ml-10">
      <Link
        className="text-secondary font-semibold"
        href="/#catalogo-container"
      >
        Inicio
      </Link>
      {breadcrumbs.map((path, index) => {
        // Create breadcrumb links like this: Inicio > Bufalo > 1, if any link is invalid, disable the link
        return (
          <Link
            className="text-secondary font-semibold"
            isDisabled={invalidLinks.includes(path)}
            href={path}
            key={index}
          >
            {path}
            {index !== breadcrumbs.length - 1 && <p className="px-3">{">"}</p>}
          </Link>
        );
      })}
    </div>
  );
}
