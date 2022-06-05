import type * as Screens from '@screens';

export type ScreenList = {
  /**
   * 테스트 스크린
   * 동작 확인용 테스트 화면
   */
  TestScreen: Screens.TestScreenInterface;

  /**
   * 네이버 지도 테스트 스크린
   * 네이버 지도 동작 확인용 테스트 화면
   */
  NMapTestScreen: Screens.NMapTestScreenInterface;
};
