export let data = {
    allPublicApplications : [],
    allApprovedApplications : [],
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

        case "ALL_APPROVED_APPLICATIONS": {
            let userClone = state.allApprovedApplications.slice(0)
            userClone.push(action.payload)
            return {
                ...state,
                allApprovedApplications: userClone
            }
        }

        default:
            return state;

    }
}