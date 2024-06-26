import { Link } from "@tanstack/react-router";

type NavLinkProps = {
  children: React.ReactNode,
  to: string
}

export default function NavLink({ children, to }: NavLinkProps) {
  return (
    <Link
      activeProps={{
        className: "bg-accent transition-all duration-300 shadow"
      }}
      className="btn btn-ghost text-xl"
      to={to}>{children}</Link>
  )
}
