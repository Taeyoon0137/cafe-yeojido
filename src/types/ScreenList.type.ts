import type * as Screens from '@screens';

export type ScreenList = {
  /**
   * 테스트 스크린
   * 동작 확인용 테스트 화면
   */
  [Screens.TestScreen.Name]: Screens.TestScreen.TestScreenInterface;

  /**
   * 메인 스크린
   * 서비스 메인 화면
   */
  [Screens.MainScreen.Name]: Screens.MainScreen.MainScreenInterface;
};
