export let data = {

}

export function reducer(state, action) {
    switch (action.type) {
        case "ACTIVE_USER": {
            return {
                ...state,
                activeUser: action.payload
            }
        }

        default:
            return state;

    }
}