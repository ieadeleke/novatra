// import Image from "next/image";

// import _1 from "@/assets/images/_1.jpg";
// import _2 from "@/assets/images/_2.jpg";

// import { BsArrowUpRightCircle } from "react-icons/bs";
// import { HiArrowTrendingUp } from "react-icons/hi2";
// import { ImArrowUpRight2 } from "react-icons/im";
// import DisplayLayout from "@/components/layout";


export function Homepage() {
  return (
    <div>
      {/* <DisplayLayout>
        <>
          <div className="hero h-screen bg-black"></div>
          <div className="px-20 mt-24">
            <ul className="flex gap-10">
              <li className="bg-[#CDF350] text-black py-3 px-6 rounded-full text-base font-medium">About Us</li>
              <li className="border-2 border-solid border-black text-black py-3 px-6 rounded-full text-base">About Us</li>
              <li className="border-2 border-solid border-black text-black py-3 px-6 rounded-full text-base">About Us</li>
              <li className="border-2 border-solid border-black text-black py-3 px-6 rounded-full text-base">About Us</li>
            </ul>
            <div className="grid grid-cols-1/2 mt-14 gap-20 items-start">
              <div className="flex gap-2 items-center">
                <div className="size-2 bg-black rounded-full"></div>
                <p className="md:leading-relaxed leading-relaxed text-xl">Who are we at NovaTraders?</p>
              </div>
              <div>
                <p className="text-3xl font-medium mb-3 md:leading-relaxed leading-relaxed">
                  With years of experience in both farming and tech, we are committed to helping farmers grow smarter and achieve better yields. Together, we are shaping the future of farming for a more sustainable world.</p>
                <p className="text-base md:leading-loose leading-loose">
                  Sura Vision - is a trailblazing investment firm that envisions a future of innovation and transformative impact. Our journey began with a passionate group of visionary investors who saw the immense potential in supporting startups that challenge the status quo and drive positive change in various industries.
                </p>
                <button className="mt-10 border-2 border-solid border-black text-black py-4 px-8 rounded-full text-base gap-3 flex items-center">Click here to learn more <HiArrowTrendingUp className="text-3xl" /></button>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-5 mt-20">
              <Image src={_1} alt="nkwn" className="rounded-xl h-full object-fit" />
              <div className="p-6 pb-3 px-3 bg-[#F1F1F1] rounded-xl">
                <div className="flex justify-between">
                  <div>
                    <h4 className="font-bold text-5xl mb-3">10+</h4>
                  </div>
                  <div>
                    <div className="size-10 bg-black flex items-center justify-center rounded-full">
                      <ImArrowUpRight2 className="text-white text-xl" />
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="font-medium mb-2">Years of Agricultural Innovation</p>
                  <p className="text-sm md:leading-loose leading-loose">
                    Our journey began with a passionate group of visionary investors who saw the immense potential in supporting startups.
                  </p>
                </div>
              </div>
              <Image src={_2} alt="nkwn" className="rounded-xl" />
              <div className="p-6 pb-3 px-3 bg-[#CFF34E] rounded-xl">
                <div className="flex justify-between">
                  <div>
                    <h4 className="font-bold text-5xl mb-3">10+</h4>
                  </div>
                  <div>
                    <div className="size-10 bg-black flex items-center justify-center rounded-full">
                      <ImArrowUpRight2 className="text-white text-xl" />
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="font-medium mb-2">Years of Agricultural Innovation</p>
                  <p className="text-sm md:leading-loose leading-loose">
                    Our journey began with a passionate group of visionary investors who saw the immense potential in supporting startups.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black mt-32 px-20 py-32">
            <div className="w-[75%]">
              <div className="px-5 py-3 mb-5 font-medium text-sm bg-primary rounded-full w-max">See How We Impact</div>
              <h3 className="text-white text-5xl font-medium leading-snug mb-5">Find A Variety Of The Latest Information About Agriculture With Novatraders.</h3>
              <p className="text-lg md:leading-loose leading-loose text-white opacity-80">
                Sura Vision - is a trailblazing investment firm that envisions a future of innovation and transformative impact. Our journey began with a passionate group of visionary investors who saw the immense potential in supporting startups. Sura Vision - is a trailblazing investment firm that envisions a future of innovation.
              </p>
            </div>
            <div className="mt-20 grid grid-cols-3 gap-10">
              <div>
                <div className="h-[25rem] bg-white opacity-60 mb-5"></div>
                <p className="text-white opacity-80 mb-4">Our Story</p>
                <h4 className="text-2xl text-white mb-4 font-medium">How We Impact</h4>
                <p className="text-white opacity-80 leading-loose md:leading-loose text-sm">
                  Sura Vision - is a trailblazing investment firm that envisions a future of innovation and transformative impact. Our journey began with a passionate group of visionary investors.
                </p>
                <button className="mt-5 rounded-full bg-white text-sm py-4 px-8 flex items-center gap-3">View More <BsArrowUpRightCircle className="text-xl" /></button>
              </div>
              <div>
                <div className="h-[25rem] bg-white opacity-60 mb-5"></div>
                <p className="text-white opacity-80 mb-4">Our Story</p>
                <h4 className="text-2xl text-white mb-4 font-medium">How We Impact</h4>
                <p className="text-white opacity-80 leading-loose md:leading-loose text-sm">
                  Sura Vision - is a trailblazing investment firm that envisions a future of innovation and transformative impact. Our journey began with a passionate group of visionary investors.
                </p>
                <button className="mt-5 rounded-full bg-white text-sm py-4 px-8 flex items-center gap-3">View More <BsArrowUpRightCircle className="text-xl" /></button>
              </div>
              <div>
                <div className="h-[25rem] bg-white opacity-60 mb-5"></div>
                <p className="text-white opacity-80 mb-4">Our Story</p>
                <h4 className="text-2xl text-white mb-4 font-medium">How We Impact</h4>
                <p className="text-white opacity-80 leading-loose md:leading-loose text-sm">
                  Sura Vision - is a trailblazing investment firm that envisions a future of innovation and transformative impact. Our journey began with a passionate group of visionary investors.
                </p>
                <button className="mt-5 rounded-full bg-white text-sm py-4 px-8 flex items-center gap-3">View More <BsArrowUpRightCircle className="text-xl" /></button>
              </div>
            </div>
          </div>
          <div className="mt-32 px-20 grid gap-14 grid-cols-2">
            <div>
              <div>
                <h3 className="text-5xl w-[90%] font-bold mb-3 md:leading-tight leading-tight capitalise">Improving Farming With Innovative Ideas For The Future.</h3>
                <p className="text-base md:leading-loose leading-loose">
                  Sura Vision - is a trailblazing investment firm that envisions a future of innovation and transformative impact. Our journey began with a passionate group of visionary investors who saw the immense potential in supporting startups.
                </p>
                <div className="mt-12 grid grid-cols-2 gap-10">
                  <div>
                    <div className="size-20 mb-4 rounded-full bg-[#CFF34E]"></div>
                    <h4 className="text-3xl font-worksans font-medium mb-2">50%</h4>
                    <p className="text-sm md:leading-loose leading-loose">
                      Sura Vision - is a trailblazing investment firm that envisions a future of innovation and transformative impact.
                    </p>
                  </div>
                  <div>
                    <div className="size-20 mb-4 rounded-full bg-[#CFF34E]"></div>
                    <h4 className="text-3xl font-worksans font-medium mb-2">50%</h4>
                    <p className="text-sm md:leading-loose leading-loose">
                      Sura Vision - is a trailblazing investment firm that envisions a future of innovation and transformative impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full w-full br-img"></div>
          </div>
          <div className="py-32 bg-[#0B1416] mt-32 flex items-center justify-center text-center">
            <div className="w-[60%] mx-auto">
              <h3 className="text-5xl font-bold text-white mb-8 leading-relaxed md:leading-relaxed">Get The Latest NovaTraders Updates By Subscribing To Our Newsletter.</h3>
              <div className="form-input bg-white rounded-full flex px-1 w-[70%] mx-auto py-1">
                <input type="text" className="px-2 bg-white border w-full border-2 py-4 rounded-full border-white" />
                <button className="py-4 px-8 font-medium flex gap-2 items-center bg-primary rounded-full">Subscribe <HiArrowTrendingUp className="text-xl" /></button>
              </div>
            </div>
          </div>
        </>
      </DisplayLayout> */}
    </div>
  );
}
