import axios, { AxiosResponse } from 'axios'
import { apiUrl } from './constant'
import { Version } from './interfaces'

export async function getAppVersion() {
  const options = {
    method: 'GET',
  }

  const response = await axios(`${apiUrl}/api/version`, options)
  return response as AxiosResponse<Version>
}
