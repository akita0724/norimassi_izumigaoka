"use client";
import { useRouter } from "next/navigation";

export const LinkButton = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const { push } = useRouter();
  return (
    <button
      className="inp bg-gray-300 m-auto"
      type="button"
      onClick={() => push(href)}
    >
      {children}
    </button>
  );
};

export const SearchButton = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const { push } = useRouter();
  return (
    <button
      className="inp-search bg-gray-300"
      type="button"
      onClick={() => push(href)}
    >
      {children}
    </button>
  );
};
