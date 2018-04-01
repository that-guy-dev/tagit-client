import { handleActions } from 'redux-actions';

import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_SET_STEP,
} from './constants';

const initialState = {
  isFetching: false,
  error: '',
  step: '',
};

export default handleActions(
  {
    [REGISTER_REQUEST]: (state, request) => ({ ...state, request, isFetching: true }),
    [REGISTER_SUCCESS]: (state, { shopper }) => ({ ...state, shopper, step: 'success' }),
    [REGISTER_FAILURE]: (state, { error }) => ({ ...state, error }),
    [REGISTER_SET_STEP]: (state, { step }) => ({ ...state, step }),
  },
  initialState,
);
