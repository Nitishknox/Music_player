export const initialState ={
    user:null,
    playlists:[],
    playing:false,
    item:null,
 // token:"BQDc5MgAKlSsq6KUQxasVJyz2DyruD9mnZS_4wvWAzNt9mYcLgRdISFN7mTWads-ugP3PgQnkrczSnoa-GBnSunHX1ruwGzUY7oYQY5f3lHbyzEkoAqEglSbrOOepwfFZJkMgSwN5R7QOSPy6LOeFFVIlyhoCJE3Smv49AyNI1BJ66b1NW0O",
   // BQDc5MgAKlSsq6KUQxasVJyz2DyruD9mnZS_4wvWAzNt9mYcLgRdISFN7mTWads-ugP3PgQnkrczSnoa-GBnSunHX1ruwGzUY7oYQY5f3lHbyzEkoAqEglSbrOOepwfFZJkMgSwN5R7QOSPy6LOeFFVIlyhoCJE3Smv49AyNI1BJ66b1NW0O
};

const reducer= (state,action)=>{


switch(action.type){
    case "SET_USER":
        return{
            ...state,
            user:action.user,
        };
        case"SET_TOKEN":
        return{
            ...state,
            token:action.token,
        }
        case "USER_PLAYLISTS":
        return{
                ...state,
                playlists:action.playlists,
            } 
        case'SET_PLAYLIST':
        return{
            ...state,
            currentplaylist:action.currentplaylist,
        }  
    default:
        return state;
}
}
export default reducer;