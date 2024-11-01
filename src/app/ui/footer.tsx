import { FC } from "react";

interface FooterProps {
  name: string;
}

export const Footer: FC<FooterProps> = ({ name }) => {
  return (
    <footer className="flex h-14 border-t">
      <span className="flex gap-2 items-center text-black">
        © {name} | 2022 - today
      </span>
    </footer>
  );
};
