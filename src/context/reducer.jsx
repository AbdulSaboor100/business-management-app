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
        case "DESTORYING_DATA_FROM_ALL_PUBLIC_APPLICATIONS": {
            return {
                ...state,
                allPublicApplications: action.payload
            }
        }
        case "DESTORYING_DATA_FROM_ALL_APPROVED_APPLICATIONS": {
            return {
                ...state,
                allApprovedApplications: action.payload
            }
        }

        default:
            return state;

    }
}