import { useState } from "react";
import { useSignUp } from "../apis/users";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { SignUpRequestType } from "../apis/users/type";

export const Signin = () => {
  const [data, setData] = useState<SignUpRequestType>({
    email: "",
    password: "",
    name: "",
  });

  const { mutate: signUp } = useSignUp();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("qwer");
    signUp(data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <div className="max-w-[500px] p-4 w-full flex flex-col gap-[48px]">
        <p className="text-[28px] font-bold">회원가입</p>
        <div className="flex flex-col gap-[18px]">
          <Input
            type="text"
            placeholder="이메일을 입력하세요"
            label="이메일"
            name="email"
            onChange={handleChange}
          />
          <Input
            type="text"
            placeholder="아이디를 입력하세요"
            label="아이디"
            name="name"
            onChange={handleChange}
          />
          <Input
            type="password"
            placeholder="비밀번호를 입력하세요"
            label="비밀번호"
            name="password"
            onChange={handleChange}
          />
          <Input
            type="password"
            placeholder="비밀번호를 입력하세요"
            label="비밀번호 확인"
          />
        </div>
        <Button onClick={handleSubmit}>회원가입</Button>
      </div>
    </div>
  );
};
