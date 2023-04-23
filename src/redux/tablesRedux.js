import { API_URL } from "../config";

/* SELECTORS */
export const selectTables = ({ tables }) => tables;
export const selectTableById = ({ tables }, id) =>
  tables.find((table) => table.id === id);

/* ACTIONS NAMES */
const createActionName = (actionName) => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName("UPDATE_TABLES");
const ADD_TABLE = createActionName("ADD_TABLE");
const REMOVE_TABLE = createActionName("REMOVE_TABLE");
const EDIT_TABLE = createActionName("EDIT_TABLE");

/* ACTION CREATORS */
export const updateTables = (payload) => ({ type: UPDATE_TABLES, payload });
export const fetchTables = () => {
  return (dispatch) => {
    fetch(API_URL + "/tables")
      .then((res) => res.json())
      .then((data) => dispatch(updateTables(data)));
  };
};

export const addTable = (payload) => ({ type: ADD_TABLE, payload });
export const addTableRequest = (newTable) => {
  return (dispatch) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTable),
    };

    fetch(API_URL + "/tables", options).then(() =>
      dispatch(addTable(newTable))
    );
  };
};

export const removeTable = (payload) => ({ type: REMOVE_TABLE, payload });
export const removeTableRequest = (id) => {
  return (dispatch) => {
    const options = {
      method: "DELETE",
    };

    fetch(API_URL + `/tables/${id}`, options).then(() =>
      dispatch(removeTable(id))
    );
  };
};

export const editTable = (payload) => ({
  type: EDIT_TABLE,
  payload,
});

export const editTableRequest = (tableDitails, id) => {
  return (dispatch) => {
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...tableDitails }),
    };

    fetch(API_URL + `/tables/${id}`, options).then(() =>
      dispatch(editTable({ ...tableDitails, id }))
    );
  };
};

export const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      return [...action.payload];

    case ADD_TABLE:
      return [...statePart, action.payload];

    case REMOVE_TABLE:
      return [...statePart.filter((post) => post.id !== action.payload)];

    case EDIT_TABLE:
      return statePart.map((table) =>
        table.id === action.payload.id ? { ...table, ...action.payload } : table
      );

    default:
      return statePart;
  }
};
