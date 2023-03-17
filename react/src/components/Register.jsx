import React from "react";
import { AiOutlineMail } from "react-icons/ai";

const Register = () => {
  return (
    <section className="bg-[#333333] py-7">
      <div className="cs-container">
        <div className="flex flex-col justify-center xl:flex-row xl:justify-between items-center gap-4">
          <div className="flex gap-3 items-center flex-wrap text-white text-2xl">
            <AiOutlineMail/>
            <h1 className="uppercase  font-bold">Đăng ký nhận code</h1>
          </div>
          <div className="w-full xl:w-[50%]">
            <div className="bg-[#686868] rounded-lg pl-5 py-2 pr-2">
              <form className="flex justify-between" action="##">
                <input className="placeholder:text-gray-200 bg-[#686868]  border-none outline-none" type="text" placeholder="Địa chỉ email của bạn" />
                <button className="text-white uppercase tracking-widest  py-2 px-7 text-xl border rounded-3xl bg-yellow-400 shadow-3xl hover:bg-gray-600 hover:text-yellow-400 transition-all duration-500" type="submit">Đăng ký</button>
              </form>
            </div>
          </div>
          <div>
                <h1 className="flex gap-2 text-white items-center">...Nhận ngay <p className="text-yellow-400 uppercase text-2xl">VOUCHER 100k</p> từ chúng tôi</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
