import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
  variant?: "primary" | "secondary";
  className?: string;
};

export function ButtonLink({ href, children, external = false, variant = "primary", className = "" }: ButtonLinkProps) {
  return (
    <a
      className={`btn btn--${variant} ${className}`}
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      {external && <span className="sr-only"> (เปิดในแท็บใหม่)</span>}
    </a>
  );
}
