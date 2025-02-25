import Item from "./components/Item";

export default function Home() {
  return (
    <div className="my-[7rem] flex h-full w-full items-center justify-center">
      <div className="h-min w-full max-w-[1100px]">
        <div className="content flex h-[700px] gap-[1.6rem]">
          <div className="column flex h-full flex-1 flex-col gap-[1.6rem]">
            <Item className="flex-grow-[2]"></Item>
            <Item className="flex-grow-[1]"></Item>
          </div>
          <div className="column flex h-full flex-1 flex-col gap-[1.6rem]">
            <Item className="flex-grow-[1.16]"></Item>
            <div className="flex flex-grow-[2] flex-col gap-[1.6rem]">
              <Item className="flex-grow-[1]"></Item>
              <div className="flex flex-grow-[1.17] flex-col gap-[1.6rem]">
                <Item className="flex-grow-[1]"></Item>
                <Item className="flex-grow-[1]"></Item>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
