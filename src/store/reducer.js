import {createStore} from "redux";

const initialState = {
    users: [],
    logged: null,
    products: [{
        id: 1,
        name: 'jon',
        surname: 'smith',
        job: 'fullstack'

    },
        {
            id: 2,
            name: 'mike',
            surname: 'smith',
            job: 'softwear',
        },
        {
            id: 3,
            name: 'kevin',
            surname: 'smith',
            job: 'beackend',
        }
    ],
    cart: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "REGISTER":
            return {
                ...state,
                users: [...state.users,action.payload]
            }
        case "LOGIN":
            return {
                ...state,
                user: action.payload
            }
        default :
            return state
    }
}

const store = createStore(reducer)

export default store