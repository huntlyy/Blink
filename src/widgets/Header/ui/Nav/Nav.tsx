import { AppLink } from 'shared/ui/AppLink/AppLink';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Nav.module.scss';
import { navItems } from './config';

interface NavProps {
  className?: string;
}

export const Nav = (props: NavProps) => {
  const { className = '' } = props;

  return (
    <nav className={className}>
      <ul className={cls.list}>

        {navItems.map((navItem) => (
          <li key={navItem.path} className={cls.item}>
            <AppLink theme={AppLinkTheme.CLEAR} to={navItem.path}>
              {navItem.text}
            </AppLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
