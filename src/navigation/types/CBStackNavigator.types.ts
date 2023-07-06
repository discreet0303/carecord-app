export enum CBStackRouteEnum {
  CBRecords = 'CBRecords',
  CBQuestionGroup = 'CBQuestionGroup',
  CBQuestion = 'CBQuestion',
  CreateCBRecord = 'CreateCBRecord',
  EditCBOption = 'EditCBOption',
}

export type CBStackParamList = {
  [CBStackRouteEnum.CBRecords]: undefined;
  [CBStackRouteEnum.CBQuestionGroup]: undefined;
  [CBStackRouteEnum.CBQuestion]: undefined;
  [CBStackRouteEnum.CreateCBRecord]: undefined;
  [CBStackRouteEnum.EditCBOption]: undefined;
};
