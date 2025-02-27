import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <div className="relative mx-auto w-full bg-slate-500 px-6 xl:max-w-[120rem]">
        <div className="mt-16 grid grid-cols-1 grid-rows-[repeat(3,minmax(0,1fr))] gap-[1.6rem] md:grid-cols-2 md:grid-rows-6 xl:grid-flow-col">
          <div className="row-span-2 h-full w-full bg-slate-700"></div>
        </div>
      </div>
    </div>
  );
}
