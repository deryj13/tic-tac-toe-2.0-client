import apiUrl from '../apiConfig'
import axios from 'axios'

export const createGame = (props) => {
  return axios({
    method: 'POST',
    url: `${apiUrl}/games`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${props.user.token}`
    },
    data: {}
  })
}
