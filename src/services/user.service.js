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

function addMove(contact, amount) {
  let user = getLoggedinUser()
  const userNewAmount = user.coins - amount
  if (userNewAmount < 0) return
  const move = _createMove(contact, amount)
  user.moves.push(move)
  user.coins = userNewAmount
  storageService.save(USER_KEY, user)
}

function getEmptyUser(name = '') {
  return {
    name: '',
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

