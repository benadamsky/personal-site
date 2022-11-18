interface HyperLinkProps {
  href: string;
  children: React.ReactNode;
}

const HyperLink = ({ href, children }: HyperLinkProps) => (
  <a
    href={href}
    className="ben-gradient font-semibold underline underline-offset-4 decoration-2 decoration-blue-400"
    target="_blank"
    rel="noreferrer"
  >
    {children}
  </a>
);

export default HyperLink;
