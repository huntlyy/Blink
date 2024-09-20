import { classNames } from 'shared/lib/classNames/classNames'
import useToggler from 'shared/lib/hooks/useToggler'
import { memo } from 'react'
import { Logo } from 'shared/ui/Logo/Logo'
import cls from './Header.module.scss'
import { Burger } from './Burger/Burger'
import { Menu } from './Menu/Menu'
import {Nav} from './Nav/Nav'
import { HeaderProfile } from './Profile/HeaderProfile'


interface HeaderProps {
    className?: string
}

export const Header = memo((props: HeaderProps) => {

    const [isOpen, isOpenToggler, setIsOpen] = useToggler(false);
    
    const onCLoseMenu = () => {
        setIsOpen(false)
    }
    const {className} = props

    return <header
    className={classNames(cls.Header, {
      [cls.open]: isOpen,
    }, [className, 'container'])}
  >

      <div className={cls.row}>
        <Logo />
        <Burger
        isOpen={isOpen}
        onClick={isOpenToggler}
        className={cls.burger}
      />
        <Nav className={cls.nav} />
        <HeaderProfile className={cls.profile}/>
      </div>
      <Menu onClose={onCLoseMenu} isOpen={isOpen} />
    </header>
})