import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './Menu.module.scss';
import { menuLinks } from './config';

interface MenuProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

const Menu: FC<MenuProps> = (props) => {
  const { className, isOpen, onClose } = props;

  return (
    <div className={classNames(cls.Menu, { [cls.open]: isOpen }, [className])}>
      <nav className={cls.nav}>
        <ul className={cls.list}>
          {menuLinks.map((link, index) => (
            <li
              key={index}
              className={cls.item}
            >
              <AppLink
                onClick={onClose}
                className={cls.link}
                to={link.to}
              >
                {link.text}
              </AppLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;