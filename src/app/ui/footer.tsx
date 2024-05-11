import { FC } from "react";

interface FooterProps {
  name: string;
}

export const Footer: FC<FooterProps> = ({ name }) => {
  return (
    <footer className="bg-black flex h-14 w-full  items-center justify-center border-t">
      <span className="flex items-center justify-center gap-2 text-white">
        @ {name} | 2022 - today
      </span>
    </footer>
  );
};
