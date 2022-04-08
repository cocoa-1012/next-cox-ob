import { default as NextLink } from "next/link";
import { ReactNode } from "react";

type LinkProps = {
  to: string;
  children: ReactNode;
  className?: string;
};
const Link = ({ className, children, to }: LinkProps) => {
  return (
    <NextLink href={to}>
      <a className={className}>{children}</a>
    </NextLink>
  );
};

export default Link;
