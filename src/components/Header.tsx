import { Logo, Profile } from "../assets";

export const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-white flex justify-center">
      <div className="w-full max-w-[500px] flex justify-between items-center p-4">
        <img src={Logo} alt="로고" />
        <img src={Profile} alt="프로필" width={24} height={24} />
      </div>
    </div>
  );
};
