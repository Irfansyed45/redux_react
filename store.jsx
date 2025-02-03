import {createStore} from 'redux'

const intialState = {
    user : {
        wallet: 5000
    }
}

const UPDATE_WALLET = 'UPDATE_WALLET'
export const upadteWallet = (amount) => ({
    type : UPDATE_WALLET,
    payload : amount
})

function reducer(state = intialState, action){
    switch(action.type)
    {
        case UPDATE_WALLET:
            return {
                user : {
                    wallet: state.user.wallet - action.payload
                }
            }
        default:
            return state
    }
}

const store = createStore(reducer)

export default store;