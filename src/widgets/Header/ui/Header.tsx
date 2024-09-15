import {
    FC,
  } from 'react';
  import { classNames } from 'shared/lib/classNames/classNames';
  import cls from './Header.module.scss';
  import Nav from './Nav/Nav';
  import  Burger  from './Burger/Burger';
  import Menu from './Menu/Menu';
  import useToggler from 'shared/lib/hooks/useToggler';
  
  interface HeaderProps {
    className?: string;
  }
  
  export const Header = (props: HeaderProps) => {
    const { className = '' } = props;
  
    const [isOpen, isOpenToggler, setIsOpen] = useToggler(false);
  
    const onCloseMenu = () => {
      setIsOpen(false);
    };
  
    return (
      <header
        className={classNames(cls.Header, {
        
          [cls.open]: isOpen,
        }, [className, 'container'])}
      >
  
        <div className={cls.row}>
          {/* <Logo className={cls.Logo} /> */}
          <Burger
            isOpen={isOpen}
            onClick={isOpenToggler}
            className={cls.burger}
          />
          <Nav className={cls.nav} />
        </div>
        <Menu onClose={onCloseMenu} isOpen={isOpen} />
      </header>
    );
  };
  
  export default Header;