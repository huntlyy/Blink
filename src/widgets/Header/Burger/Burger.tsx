import { Mods, classNames} from 'shared/lib/classNames/classNames';
import { memo } from 'react'
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import * as cls from './Burger.module.scss'

interface BurgerProps {
   className?: string;
   isOpen: boolean;
   onClick: () => void;
}

export const Burger = memo((props: BurgerProps ) => {

    const {className, isOpen = false, onClick} = props

    const mods: Mods = {
        [cls.open]: isOpen
    }

  return <div className={classNames(cls.Burger, mods, [className])}>
    <Button theme={ThemeButton.CLEAR}
        className={cls.burger}
        onClick={onClick}>
      <span className={cls.line1} />
      <span className={cls.line2} />
      <span className={cls.line3} />
      <span className={cls.line4} />
    </Button>
  </div>
});