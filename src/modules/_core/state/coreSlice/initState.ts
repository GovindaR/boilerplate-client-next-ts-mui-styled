// declaring the types for our state
type coreState = {
  value: number;
  currentUser?: any;
};
const initialState: coreState = {
  value: 0,
};
export default initialState;
