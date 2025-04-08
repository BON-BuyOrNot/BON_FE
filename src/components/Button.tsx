interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className="w-full text-white text-xs p-3 border rounded-lg bg-[#000]"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
