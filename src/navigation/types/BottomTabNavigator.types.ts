export enum BottomTabRouteEnum {
  CBUserList = 'CBUserList',
  CBUserCalendar = 'CBUserCalendar',
  CBUserExport = 'CBUserExport',
  Setting = 'Setting',
}

export type BottomTabParamList = {
  [BottomTabRouteEnum.CBUserList]: undefined;
  [BottomTabRouteEnum.CBUserCalendar]: undefined;
  [BottomTabRouteEnum.CBUserExport]: undefined;
  [BottomTabRouteEnum.Setting]: undefined;
};
