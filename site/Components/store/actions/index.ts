import * as UserActionCreators from './user/userActions';
import * as UserAsyncActionCreators from './user/userAsyncAction';

export default {
  ...UserActionCreators,
  ...UserAsyncActionCreators,
};
