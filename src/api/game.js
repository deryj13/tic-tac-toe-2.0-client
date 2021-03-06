import apiUrl from '../apiConfig'
import axios from 'axios'

export const indexGame = (user) => {
  return axios({
    method: 'GET',
    url: `${apiUrl}/games`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${user.token}`
    }
  })
}

export const createGame = (user) => {
  return axios({
    method: 'POST',
    url: `${apiUrl}/games`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${user.token}`
    },
    data: {}
  })
}

export const updateGame = (user, game, index, value, over) => {
  return axios({
    method: 'PATCH',
    url: `${apiUrl}/games/${game._id}`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${user.token}`
    },
    data: {
      'game': {
        'cell': {
          'index': index,
          'value': value
        },
        'over': over
      }
    }
  })
}

export const showGame = (user, gameId) => {
  return axios({
    method: 'GET',
    url: `${apiUrl}/games/${gameId}`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${user.token}`
    }
  })
}
