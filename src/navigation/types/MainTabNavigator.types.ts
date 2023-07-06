export enum MainTabRouteEnum {
  CBUserList = 'CBUserList',
  CBUserCalendar = 'CBUserCalendar',
  CBUserExport = 'CBUserExport',
  Setting = 'Setting',
}

export type MainTabParamList = {
  [MainTabRouteEnum.CBUserList]: undefined;
  [MainTabRouteEnum.CBUserCalendar]: undefined;
  [MainTabRouteEnum.CBUserExport]: undefined;
  [MainTabRouteEnum.Setting]: undefined;
};
