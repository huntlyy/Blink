import { FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import cls from './Info.module.scss';

interface InfoProps {
  className?: string;
  name: string;
  subName: string;
  children: ReactNode;
}

export const Info = (props: InfoProps) => {
  const {
    className, name, subName, children,
  } = props;

  const mainName = name || subName || 'Имя отсутствует';

  return (
    <div className={classNames(cls.Info, {}, [className])}>
      <Text title={mainName} className={cls.title} />

      {name && subName && (
        <Text title={subName} theme={TextTheme.PRIMARY} className={cls.subtitle} />
      )}

      {children && <div className={cls.info_content}>{children}</div>}
    </div>
  );
};