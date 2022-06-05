import { StyleSheet } from 'react-native';

/**
 * 스타일 시트 생성
 * 다크모드 대응을 위해, 컴포넌트 내에서 스타일 시트 선언을 위한
 * 래핑 함수입니다. 우선은 StyleSheet.create를 그대로 이용하나,
 * 이후 렌더링 문제가 있는 경우 이를 교체합니다.
 */
export const createStyleSheet = StyleSheet.create;
