"use client";
import Image from "next/image";
import { VirtualizedPhoto } from "./components/carousel/virtualized-photo";

const images = ["/stitch.jpg", "/stitch2.jpg", "/stitch3.jpg"];
console.log(images.length);

export default function Home() {
  return (
    <div className="relative my-24">
      <div className="relative mx-auto w-full px-6 xl:max-w-[110rem]">
        <div className="grid w-full max-w-[120rem] grid-cols-1 gap-[1.2rem] md:grid-flow-col md:grid-cols-2 md:grid-rows-3">
          <div className="row-span-2 flex flex-col gap-[2.4rem] rounded-[.8rem] border border-dashed border-[#3C3C3C] bg-[#141414] px-[2.4rem] py-[3.2rem]">
            <div className="flex w-max items-center gap-[1.2rem]">
              <div className="relative h-[6rem] w-[6rem] flex-shrink-0 overflow-hidden rounded-full">
                <Image fill src="/stitch.jpg" alt="profile" />
              </div>
              <div className="flex flex-col">
                <p className="text-[1.6rem]">Stitch Custom Keyboards</p>
                <p className="text-[1.6rem] text-[#545964]">
                  Keyboard Enthusiast
                </p>
              </div>
            </div>
            <div>
              <p className="">
                Hey, my name is Joshua.{" "}
                <span className="text-gray-500">
                  Ive always had a passion for technology and building keyboards
                  is an extension of that passion. I started building keyboards
                  around August of 2021 and have been really enjoying my time in
                  the community!
                </span>
              </p>
            </div>
            <div>
              <p className="">
                Why mechanical?{" "}
                <span className="text-gray-500">
                  Compared to the retail equivalent, mechanical keyboards have a
                  better sound and feel. There is also almost endless
                  customization when it comes to switches, keycaps, and layouts.
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[1.2rem] rounded-[.8rem] border border-dashed border-[#3C3C3C] bg-[#141414] px-[2.4rem] py-[3.2rem]">
            <h2>Contact</h2>
            <div className="flex items-center justify-between gap-[.8rem]">
              <p className="text-gray-500">Email</p>
              <div className="relative h-[1px] w-[1px] flex-grow overflow-hidden bg-gray-500"></div>
              <p className="text-gray-500">justifiedkeldeo@gmail.com</p>
            </div>
            <div className="flex items-center justify-between gap-[.8rem]">
              <p className="text-gray-500">Phone</p>
              <div className="relative h-[1px] w-[1px] flex-grow overflow-hidden bg-gray-500"></div>
              <p className="text-gray-500">(777) 777-7777</p>
            </div>
          </div>
          <div className="flex flex-col gap-[1.2rem] rounded-[.8rem] border border-dashed border-[#3C3C3C] bg-[#141414] px-[2.4rem] py-[3.2rem]">
            <h2>WHAT I DO BEST</h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur. Nam nunc ac eget fermentum
              fermentum vulputate pellentesque. Aliquam diam gravida volutpat
              risus lorem commodo.
            </p>
          </div>
          <div className="flex flex-col gap-[1.2rem]">
            <div className="flex-grow rounded-[.8rem] border border-dashed border-[#3C3C3C] bg-[#141414] px-[2.4rem] py-[3.2rem]">
              <h2>Twitch Channel</h2>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <div className="flex-grow rounded-[.8rem] border border-dashed border-[#3C3C3C] bg-[#141414] px-[2.4rem] py-[3.2rem]">
              <h2>YouTube Channel</h2>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
          <VirtualizedPhoto>
            {({ index }) => {
              const modulo = index % images.length;
              const imageIndex = modulo < 0 ? images.length + modulo : modulo;
              return (
                <Image
                  draggable={false}
                  src={images[imageIndex]}
                  style={{ width: "100%", height: "100%" }}
                  alt={"photo"}
                  width={10}
                  height={10}
                />
              );
            }}
          </VirtualizedPhoto>
        </div>
      </div>
    </div>
  );
}
