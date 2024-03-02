import axios, { AxiosResponse } from 'axios'
import { apiUrl } from './constant'
import { CountriesObject } from './interfaces'

export async function getAppSupportCountries() {
  const options = {
    method: 'GET',
  }

  const response = await axios(`${apiUrl}/countries`, options)
  return response as AxiosResponse<CountriesObject>
}
