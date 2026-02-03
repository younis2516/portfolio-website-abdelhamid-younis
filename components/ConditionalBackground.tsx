"use client";
import { usePathname } from "next/navigation";

export default function ConditionalBackground() {
  const pathname = usePathname();
  // Hide gradient on all project pages
  if (pathname && pathname.startsWith("/projects")) {
    return null;
  }
  return (
    <>
      {/* <div className={`bg-[#fbe2e3] -z-10 absolute top-[-6rem] right-[-11rem] h-[32.25rem] w-[32.25rem] rounded-full blur-[10rem]
          sm:w-[68.75rem] dark:bg-[#946263]`}></div>
      <div className={`bg-[#dbd7fb] -z-10  absolute top-[-1rem] left-[-35rem] h-[32.25rem] w-[50rem] rounded-full blur-[10rem]
          sm:w-[68.75rem]
          md:left-[-33rem]
          lg:left-[-28rem]
          xl:left-[-15rem]
          2xl:left-[-5rem]
          dark:bg-[#676394]`}></div> */}
    </>
  );
}
