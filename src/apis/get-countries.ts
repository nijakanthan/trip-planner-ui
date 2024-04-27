import axios, { AxiosResponse } from 'axios'
import { balApiUrl } from './constant'
import { CountriesObject } from './interfaces'

export async function getAppSupportCountries() {
  const options = {
    method: 'GET',
  }

  const response = await axios(`${balApiUrl}/countries`, options)
  return response as AxiosResponse<CountriesObject>
}
