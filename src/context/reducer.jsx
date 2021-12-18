export let data = {
    allPublicApplications : []
}

export function reducer(state, action) {
    switch (action.type) {
        case "ACTIVE_USER": {
            return {
                ...state,
                activeUser: action.payload
            }
        }
        case "ALL_PUBLIC_APPLICATIONS": {
            let userClone = state.allPublicApplications.slice(0)
            userClone.push(action.payload)
            return {
                ...state,
                allPublicApplications: userClone
            }
        }

        default:
            return state;

    }
}