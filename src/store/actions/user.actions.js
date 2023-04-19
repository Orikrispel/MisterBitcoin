import { userService } from '../../services/user.service'


export function transferCoins(amount, contact) {
  return async (dispatch) => {
    try {
      const updatedUser = userService.addMove(amount, contact)
      console.log('updatedUser:', updatedUser)
      dispatch({ type: 'SET_USER', user: updatedUser })
    } catch (error) {
      console.log('error:', error)
    }
  }
}

export function signUp(name) {
  return async (dispatch) => {
    try {
      const updatedUser = userService.signup(name)
      dispatch({ type: 'SET_USER', user: updatedUser })
    } catch (error) {
      console.log('error:', error)
    }
  }
}


