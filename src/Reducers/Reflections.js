import {
  FETCH_ALL_REFLECTIONS_PENDING,
  FETCH_ALL_REFLECTIONS_SUCCESS,
  FETCH_ALL_REFLECTIONS_FAILED,
  UPDATE_REFLECTION_PENDING,
  UPDATE_REFLECTION_SUCCESS,
  UPDATE_REFLECTION_FAILED
} from '../Utils/ActionTypes';
import {
  calculateTotalsFromRange,
  findNonRatedReflections,
  findTransactionsFromType
} from "./Helpers";

const defaultState = {
  reflectionList: [],
  pendingReflectionList: [],
  negativeReflectionList: [],
  positiveReflectionList: [],
  neutralReflectionList: [],
  pendingReflections: null,
  spending: {
    week: {total: null, transactions: null},
    twoWeeks: {total: null, transactions: null},
    month: {total: null, transactions: null}
  },
  totalReflections: null,
  loading: false,
  appError: false
};

const reflections = (state = defaultState, action) => {
  switch (action.type) {
    /* --
    -- PENDING ACTIONS --
    -- */
    case FETCH_ALL_REFLECTIONS_PENDING: {
      return {
        ...state,
        loading: true
      };
    }
    case UPDATE_REFLECTION_PENDING: {
      return {
        ...state,
        loading: true
      };
    }

    /* --
    -- FETCH ACTIONS --
    -- */

    case FETCH_ALL_REFLECTIONS_SUCCESS: {
      const {data} = action;
      const nonRated = findNonRatedReflections(data);
      const week = calculateTotalsFromRange(data, 7);
      const twoWeeks = calculateTotalsFromRange(data, 15);
      const month = calculateTotalsFromRange(data, 30);
      const positive = findTransactionsFromType(data, 'POSITIVE');
      const negative = findTransactionsFromType(data, 'NEGATIVE');
      const neutral = findTransactionsFromType(data, 'NEUTRAL');
      return {
        ...state,
        reflectionList: data,
        pendingReflectionList: nonRated,
        totalReflections: data.length,
        pendingReflections: nonRated.length,
        negativeReflectionList: negative,
        positiveReflectionList: positive,
        neutralReflectionList: neutral,
        loading: false,
        spending: {
          week,
          twoWeeks,
          month
        }
      };
    }

    /* --
    -- UPDATE ACTIONS --
    -- */

    case UPDATE_REFLECTION_SUCCESS: {
      return {
        ...state,
        loading: false
      };
    }

    /* --
    -- FAILED ACTIONS --
    -- */

    case FETCH_ALL_REFLECTIONS_FAILED: {
      return {
        ...state,
        loading: false,
        appError: true
      };
    }

    case UPDATE_REFLECTION_FAILED: {
      return {
        ...state,
        loading: false,
        appError: true
      };
    }

    default:
      return state;
  }
};

export default reflections;
