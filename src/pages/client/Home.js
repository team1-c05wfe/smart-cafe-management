import Header from "../../components/partial/Header";
import Banner from "../../components/partial/Banner";
import { Footer } from "../../components/partial/Footer";
import imgae1 from "../../assets/243-min-1.jpg";
import imgae2 from "../../assets/img-home-12.jpg";
import imgae3 from "../../assets/img-home-13.jpg";
import imgae4 from "../../assets/img-home-11.jpg";
import imgae5 from "../../assets/images-29.jpg";
import imgae6 from "../../assets/images-25-min-1.jpg";
import imgae7 from "../../assets/";
import imgae8 from "../../assets/img-home-11.jpg";
import imgae9 from "../../assets/img-home-11.jpg";

import { BiCoffeeTogo } from "react-icons/bi";
import { MdOutlineCoffeeMaker } from "react-icons/md";

export function Home() {
  return (
    <>
      <Header />
      <Banner />
      <div className="flex flex-col md:flex-row items-center justify-between bg-white py-12 px-6 md:px-36 md:py-32">
        <div className="relative md:w-1/2 mb-8 md:mb-0">
          <div className="w-48 h-48 md:w-96 md:h-auto ">
            <img
              src={imgae1}
              alt="Coffee cup"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-24 left-24 md:top-52 md:left-52 w-40 h-40 md:w-80 md:h-auto">
            <img
              src={imgae2}
              alt="Coffee machine"
              className="w-full h-full object-cover hidden md:block"
            />
          </div>
        </div>

        <div className="md:w-1/2 md:text-left space-y-4">
          <h3 className="text-sm font-semibold text-[#b98d58] uppercase">
            Cửa hàng
          </h3>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#333]">
            Chúng tôi kết hợp giữa cổ điển và hiện đại
          </h2>
          <p className="text-[#888682] text-base">
            Chúng tôi rất trân quý sự tin tưởng của bạn. Khách hàng chọn chúng
            tôi và sản phẩm của chúng tôi vì họ tin tưởng vào chất lượng hàng
            đầu mà chúng tôi mang lại
          </p>
          <div className="flex flex-col space-y-1 text-[#333] text-base">
            <p>
              <span className="font-semibold">Thứ hai - Thứ 6:</span> 9 AM – 22
              PM
            </p>
            <p>
              <span className="font-semibold">Thứ bảy:</span> 9 AM – 20 PM
            </p>
          </div>
          <button className="mt-4 px-8 py-4 bg-[#B4BB6B] text-white font-medium rounded-full hover:bg-[#9FA753] transition duration-300">
            Về chúng tôi
          </button>
        </div>
      </div>


      <div className="bg-[#F9F4EC]">
        <h3 className="text-sm font-semibold text-[#b98d58] uppercase text-center pt-10">
          Thực đơn
        </h3>
        <h2 className="text-3xl md:text-4xl font-semibold text-[#333] text-center pt-5">
          Món đặc biệt
        </h2>
        <div className="flex flex-col md:flex-row pt-12 md:px-36 gap-y-8 md:gap-x-8">
          <div className="w-full md:w-1/2 flex flex-col gap-y-8">
            <div>
              <div className="flex justify-between text-[#333] text-xl">
                <span className="text-start font-semibold">Espresso</span>
                <span className="text-end font-semibold">120,000 VND</span>
              </div>
              <p className="text-[#888682] text-base">
                Một phần nhỏ (30 ml) cà phê nguyên chất, đậm đà, thơm ngon
              </p>
            </div>

            <div>
              <div className="flex justify-between text-[#333] text-xl">
                <span className="text-start font-semibold ">Espresso</span>
                <span className="text-end font-semibold ">120,000 VND</span>
              </div>
              <p className="text-[#888682] text-base">
                Một phần nhỏ (30 ml) cà phê nguyên chất, đậm đà, thơm ngon
              </p>
            </div>

            <div>
              <div className="flex justify-between text-[#333] text-xl">
                <span className="text-start font-semibold ">Espresso</span>
                <span className="text-end font-semibold ">120,000 VND</span>
              </div>
              <p className="text-[#888682] text-base">
                Một phần nhỏ (30 ml) cà phê nguyên chất, đậm đà, thơm ngon
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-y-8">
            <div>
              <div className="flex justify-between text-[#333] text-xl">
                <span className="text-start font-semibold ">Espresso</span>
                <span className="text-end font-semibold ">120,000 VND</span>
              </div>
              <p className="text-[#888682] text-base">
                Một phần nhỏ (30 ml) cà phê nguyên chất, đậm đà, thơm ngon
              </p>
            </div>

            <div>
              <div className="flex justify-between text-[#333] text-xl">
                <span className="text-start font-semibold ">Espresso</span>
                <span className="text-end font-semibold ">120,000 VND</span>
              </div>
              <p className="text-[#888682] text-base">
                Một phần nhỏ (30 ml) cà phê nguyên chất, đậm đà, thơm ngon
              </p>
            </div>

            <div>
              <div className="flex justify-between text-[#333] text-xl">
                <span className="text-start font-semibold ">Espresso</span>
                <span className="text-end font-semibold ">120,000 VND</span>
              </div>
              <p className="text-[#888682] text-base">
                Một phần nhỏ (30 ml) cà phê nguyên chất, đậm đà, thơm ngon
              </p>
            </div>
          </div>
        </div>



      </div>

      <div className="grid grid-cols-5 grid-rows-6 gap-">
    <div className="col-span-3 row-span-6">
      <img src={imgae5}/>
    </div>
    <div className="row-span-3 col-start-4">

    </div>
    <div className="row-span-3 col-start-5">3</div>
    <div className="row-span-3 col-start-4 row-start-4">4</div>
    <div className="row-span-3 col-start-5 row-start-4">5</div>
</div>
    

      <div className="flex flex-col md:flex-row items-center justify-between bg-[#F9F4EE] py-20 md:pt-32 md:pb-52 px-6 md:px-36">
        <div className="relative md:w-1/2 mb-8 md:mb-0">
          <div className="w-48 h-48 md:w-96 md:h-auto ">
            <img
              src={imgae3}
              alt="Coffee cup"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-24 left-24 md:top-52 md:left-52 w-40 h-40 md:w-80 md:h-auto">
            <img
              src={imgae4}
              alt="Coffee machine"
              className="w-full h-full object-cover hidden md:block"
            />
          </div>
        </div>

        <div className="md:w-1/2 md:text-left items-center">
          <h3 className="text-sm font-semibold text-[#b98d58] uppercase pb-3">
            Hãy đến và trải nghiệm cùng chúng tôi
          </h3>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#333]">
            Thưởng thức hương vị cà phê đậm đà nguyên bản
          </h2>
          <p className="text-[#888682] text-base pt-3">
            Mang đến hương vị nguyên bản với từng tách cà phê, được pha chế từ
            những hạt cà phê chất lượng cao, rang xay tỉ mỉ để giữ trọn vẹn
            hương thơm và vị đậm đà tự nhiên. Hãy để mỗi ngụm cà phê là một trải
            nghiệm thư giãn và trọn vẹn dành riêng cho bạn
          </p>
          <div className="flex text-[#333] text-base pt-8">
            <BiCoffeeTogo className="text-[#B4BB6B] text-6xl me-5" />
            <div className="w-5/6 text-[#333]">
              <h3 className="font-semibold mb-2">Thực Đơn Đa Dạng</h3>
              <p className="text-[#888682]">
                Thực đơn của chúng tôi đa dạng với các loại cà phê đặc biệt, từ
                espresso mạnh mẽ đến cappuccino mượt mà, mỗi loại đều mang đến
                hương vị độc đáo, phù hợp với mọi sở thích của bạn
              </p>
            </div>
          </div>

          <div className="flex text-[#333] text-base pt-8">
            <MdOutlineCoffeeMaker className="text-[#B4BB6B] text-6xl me-5" />
            <div className="w-5/6 text-[#333]">
              <h3 className="font-semibold mb-2">Cà Phê Sạch Từ Thiên Nhiên</h3>
              <p className="text-[#888682]">
                Cà phê hữu cơ của chúng tôi được trồng và chăm sóc tự nhiên,
                mang đến hương vị tinh khiết và đậm đà, hoàn hảo cho những ai
                yêu thích sự thuần khiết từ thiên nhiên
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
