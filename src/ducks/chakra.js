import { createAction, handleActions, combineActions } from 'redux-actions';
import { combineLogic } from 'react-native-hydro-kit/lib';
// import { createSelector } from 'reselect';

// ACTION CREATORS

export const openMenuOverlay = createAction('CHAKRA/MENU_OVERLAY/OPEN');
export const closeMenuOverlay = createAction('CHAKRA/MENU_OVERLAY/CLOSE');

export const openProgressOverlay = createAction('CHAKRA/PROGRESS_OVERLAY/OPEN');
export const closeProgressOverlay = createAction('CHAKRA/PROGRESS_OVERLAY/CLOSE');

export const rotatorDidStart = createAction('CHAKRA/ROTATOR/DID_START');
export const frontArrowDidMount = createAction('CHAKRA/FRONT_ARROW/DID_MOUNT');
export const frontArrowDidUnmount = createAction('CHAKRA/FRONT_ARROW/DID_UNMOUNT');
export const clockDidRotate = createAction('CHAKRA/CLOCK/DID_ROTATE');

// export const incrementHour = createAction('CHANGE_HOUR/INIT');

// LOGIC

export const logic = combineLogic({
  // 'ACTION': async ({ getState, action }, dispatch, done) => {
  //   done();
  // },
});

// INITIAL STATE

const initialState = {
  arrows: true,
  frontHour: 6,
  backHour: 0,
  menuOverlay: false,
  progress: 0,
  progressOverlay: false,
  rotating: false,
};

// REDUCER

export default handleActions(
  {
    // menu overlay
    'CHAKRA/MENU_OVERLAY/OPEN': state => ({ ...state, menuOverlay: true }),
    'CHAKRA/MENU_OVERLAY/CLOSE': state => ({ ...state, menuOverlay: false }),

    // progress overlay
    'CHAKRA/PROGRESS_OVERLAY/OPEN': state => ({ ...state, progressOverlay: true }),
    'CHAKRA/PROGRESS_OVERLAY/CLOSE': state => ({ ...state, progressOverlay: false }),

    // clock rotation
    'CHAKRA/ROTATOR/DID_START': state => ({ ...state, rotating: true, arrows: false }),
    'CHAKRA/FRONT_ARROW/DID_UNMOUNT': state => {
      if (!state.rotating) return state;

      let frontHour = state.frontHour + 3;
      if (frontHour > 9) {
        frontHour = 0;
      }
      return { ...state, frontHour };
    },
    'CHAKRA/CLOCK/DID_ROTATE': state => ({ ...state, arrows: true }),
    'CHAKRA/FRONT_ARROW/DID_MOUNT': state => ({ ...state, rotating: false }),
  },
  initialState
);
