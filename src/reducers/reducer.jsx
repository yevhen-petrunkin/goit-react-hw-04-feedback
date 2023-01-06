export function reducer(state, action) {
  return { ...state, [action]: state[action] + 1 };
}
