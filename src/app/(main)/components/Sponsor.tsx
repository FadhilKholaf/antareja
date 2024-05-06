import { H3, P } from "@/app/components/global/Text";
import SectionWrapper from "@/app/components/global/Wrapper";
import Image from "next/image";

export default function Sponsor() {
  return (
    <SectionWrapper id="sponsor">
      <div className="flex w-full flex-col gap-10 justify-center items-center">
        <div className="flex flex-col gap-3 text-center">
          <H3>Sponsorship dan Media Partner</H3>
          <P>Sampai bertemu di hari perlombaan!</P>
        </div>
        <div className="flex gap-6 justify-center items-center">
          <figure className="py-[28px] px-6 bg-white rounded-[20px] justify-center items-center flex flex-col">
            <Image
              src={"https://dummyimage.com/154x34/ff1290/fff&text=sponsor"}
              alt={"waw"}
              width={154}
              height={34}
              unoptimized
            />
          </figure>
          <figure className="py-[28px] px-6 bg-white rounded-[20px] justify-center items-center flex flex-col">
            <Image
              src={"https://dummyimage.com/154x34/ff1290/fff&text=sponsor"}
              alt={"waw"}
              width={154}
              height={34}
              unoptimized
            />
          </figure>
          <figure className="py-[28px] px-6 bg-white rounded-[20px] justify-center items-center flex flex-col">
            <Image
              src={"https://dummyimage.com/154x34/ff1290/fff&text=sponsor"}
              alt={"waw"}
              width={154}
              height={34}
              unoptimized
            />
          </figure>
          <figure className="py-[28px] px-6 bg-white rounded-[20px] justify-center items-center flex flex-col">
            <Image
              src={"https://dummyimage.com/154x34/ff1290/fff&text=sponsor"}
              alt={"waw"}
              width={154}
              height={34}
              unoptimized
            />
          </figure>
          <figure className="py-[28px] px-6 bg-white rounded-[20px] justify-center items-center flex flex-col">
            <Image
              src={"https://dummyimage.com/154x34/ff1290/fff&text=sponsor"}
              alt={"waw"}
              width={154}
              height={34}
              unoptimized
            />
          </figure>
          <figure className="py-[28px] px-6 bg-white rounded-[20px] justify-center items-center flex flex-col">
            <Image
              src={"https://dummyimage.com/154x34/ff1290/fff&text=sponsor"}
              alt={"waw"}
              width={154}
              height={34}
              unoptimized
            />
          </figure>
        </div>
      </div>
    </SectionWrapper>
  );
}