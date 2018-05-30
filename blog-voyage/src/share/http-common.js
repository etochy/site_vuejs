import axios from 'axios'

export const HTTP = axios.create({
  baseURL: 'https://sheets.googleapis.com/v4/spreadsheets/10deKDNcIkzjqp1jUdBEwBfC-ykKaCDxuGDOyyDViC_8/values/',
  params: {
    key: 'AIzaSyAHsg8sK46DfPSTa1WZETcB0nLUCqmXLxw'
  }
})
