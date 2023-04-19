import { userService } from '../../services/user.service'

export function transferCoins(amount, contact) {
  console.log('hello')
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


