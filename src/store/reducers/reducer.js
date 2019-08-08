
const INITIAL_STATES = {
    allUsers:[],
    loader: false,
    username: '',
    email: '',
    uid:'',
    oppositionUid : '',
    oppositionName : '',
    messages : []
}

export default (state = INITIAL_STATES, action) => {

    switch (action.type) {
        case "CHANGE_USERNAME":
            return ({
                ...state,
                username: action.payload,
                pakInSemifinal: !state.pakInSemifinal
            })

        case "CHANGE_LOADER":
            return ({
                ...state,
                loader: !state.loader
            })

        case "LOGGEDIN_USER":
            return ({
                ...state,
                email: action.payload.email,
                username: action.payload.name,
                uid: action.payload.uid
            })
        case "LIST_USERS":
            
            return ({
                ...state,
                allUsers : action.payload,
            })
        case "CHAT":
            
            return ({
                ...state,
                oppositionUid : action.payload.uid,
                oppositionName : action.payload.userName
            })
        case "GET_MESSAGES":
            // console.log("reducer me" + action.payload)
            var saray = action.payload;
            saray.sort((a, b) => (a.timestamp > b.timestamp) ? 1 : -1)
            console.log(saray, "after sort bruh")
            return ({
                ...state,
               messages : saray
            })

        default:
            return state;

    }

}