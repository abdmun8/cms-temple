const INITIAL_STATE = null;

export default function tokenReducer(token = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case 'SET_TOKEN':
      return payload;
    default:
      return token;
  }
}
