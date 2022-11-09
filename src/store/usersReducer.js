const initialState = {
    users: [
        { name: "Ahmed Zak", email: "cac@gmail.com", gen: 12, id: "hehe9" },
        {
          name: "Rekado Bandt",
          email: "ssscac@gmail.com",
          gen: 13,
          id: "938jr",
        },
        { name: "Adjoa C", email: "casc@gmail.com", gen: 2, id: "hee78" },
      ],
}

const usersReducer = (state = initialState, action) => {

    switch (action.type){
        case "ADD_USER":

           const newUser = {
            name:action.payload.name,
            email:action.payload.email,
            gen:action.payload.gen
           }
            return {...state, users:[...state, newUser]}

            default:
                return state;
    }

}

export default usersReducer;