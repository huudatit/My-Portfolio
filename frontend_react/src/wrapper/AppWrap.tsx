import { NavigationDots, SocialMedia } from '../components';
import type { ComponentType } from 'react';

const AppWrap = (
  Component: ComponentType,
  idName: string,
  classNames: string
) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia />
      <div className="app__wrapper app_flex">
        <Component />

        <div className="copyright">
          <p className="p-text">@2026 HUU DAT</p>
          <p className="p-text">All rights reserved</p>
        </div>
      </div>
      <NavigationDots active={idName} />
    </div>
  );
}

export default AppWrap;