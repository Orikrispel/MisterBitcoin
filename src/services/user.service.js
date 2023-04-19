import { storageService } from "./storage.service"

export const userService = {
  signup,
  login,
  addMove,
  getEmptyUser,
  getLoggedinUser
}

const STORAGE_KEY = 'userDB'
const USER_KEY = 'loggedinUser'

let users = [
  {
    name: "Ochoa Hyde",
    coins: 100,
    moves: []
  }
]

function login(name = '') {
  const user = { name: name || 'Ochoa Hyde', coins: 100, moves: [] }
  storageService.save(USER_KEY, user)
  return user
}

function getLoggedinUser() {
  return storageService.load(USER_KEY) || login()
}

function signup(name) {
  users.push(getEmptyUser(name))
  storageService.save(STORAGE_KEY, users)
  login(name)
}



function addMove(amount, contact) {
  let user = getLoggedinUser()

  const userNewAmount = user.coins - amount
  if (userNewAmount < 0) {
    console.log('Not enough coins!')
    return
  }
  user.coins = userNewAmount
  const move = _createMove(contact, amount)
  user.moves.push(move)
  storageService.save(USER_KEY, user)
  return user
}

function getEmptyUser(name = '') {
  return {
    name,
    coins: 100,
    moves: []
  }
}

function _createMove(contact, amount) {
  return {
    toId: contact._id,
    to: contact.name,
    at: Date.now(),
    amount
  }
}

