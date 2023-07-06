export enum CBUserStackRouteEnum {
  CreateCBUser = 'CreateCBUser',
  EditCBUser = 'EditCBUser',
  EditCBUserRelation = 'EditCBUserRelation',
}

export type CBUserStackParamList = {
  [CBUserStackRouteEnum.CreateCBUser]: undefined;
  [CBUserStackRouteEnum.EditCBUser]: undefined;
  [CBUserStackRouteEnum.EditCBUserRelation]: undefined;
};
