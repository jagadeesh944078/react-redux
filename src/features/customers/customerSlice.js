const initialStateCustomer = {
  fullName: "",
  nationality: "",
  createdAt: "",
};

export default function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "account/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationality: action.payload.nationality,
        createdAt: action.payload.createdAt,
      };
    case "account/updateCustomer":
      return { ...state, fullName: action.payload };

    default:
      return state;
  }
}

export function createCustomer(fullName, nationality) {
  return {
    type: "account/createCustomer",
    payload: { fullName, nationality, createdAt: new Date().toISOString() },
  };
}

export function updateCustomer(fullName) {
  return {
    type: "account/createCustomer",
    payload: fullName,
  };
}
