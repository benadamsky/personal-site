import Link from 'next/link';
import { useRouter } from 'next/router';

const navItems = [
  {
    title: 'home',
    to: '/'
  },
  {
    title: 'work',
    to: '/work'
  },
  {
    title: 'connect',
    to: '/connect'
  }
];

interface NavItemProps {
  title: string;
  to: string;
  path: string;
}

interface NavProps {
  className?: string;
}

const defaultProps: NavProps = {
  className: 'absolute bottom-12'
}

const NavItem = ({ title, to, path }: NavItemProps) => {
  const isActive = path === to;

  return (
    <li className={isActive ? '' : 'inactive'}>
      <Link href={isActive ? '' : to}>{title}</Link>
    </li>
  );
};

const Nav = ({ className }: NavProps) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <nav className={className}>
      <ul className="ben-nav">
        {navItems.map((item) => (
          <NavItem
            key={item.title}
            title={item.title}
            to={item.to}
            path={pathname}
          />
        ))}
      </ul>
    </nav>
  );
};

Nav.defaultProps = defaultProps;

export default Nav;
