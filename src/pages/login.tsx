import { Button } from "../components/Button";
import { Input } from "../components/Input";

export const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <div className="max-w-[500px] p-4 w-full flex flex-col gap-[48px]">
        <p className="text-[28px] font-bold">로그인</p>
        <div className="flex flex-col gap-[18px]">
          <Input type="text" placeholder="아이디를 입력하세요" label="아이디" />
          <Input
            type="password"
            placeholder="비밀번호를 입력하세요"
            label="비밀번호"
          />
        </div>
        <Button onClick={() => {}}>로그인</Button>
      </div>
    </div>
  );
};
