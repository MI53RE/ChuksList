// Actions

export const SET_FILTERS = 'my-todo/FILTERS/SET_FILTERS';

// Initial

const initial = {
    active: "SHOW_ALL",
    values: [
      "SHOW_ALL",
      "SHOW_COMPLETED",
      "SHOW_PENDING"
    ]
};


export default function reducer(state = initial, action = {}) {
  switch (action.type) {
    case SET_FILTERS:
      return {
        ...state,
        active: action.filter
      };
    default:
      return state;
  }
}

// Actions creator 

export const setFilters = (filter = 'SHOW_ALL') => ({
  type: SET_FILTERS,
  filter: filter
});