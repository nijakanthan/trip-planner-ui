import axios, { AxiosResponse } from 'axios'
import { apiUrl, balApiUrl } from './constant'
import { Version } from './interfaces'

export async function getAppVersion() {
  const options = {
    method: 'GET',
  }

  const response = await axios(`${apiUrl}/version`, options)
  return response as AxiosResponse<Version>
}

export async function getAppVersionBal() {
  const options = {
    method: 'GET',
  }

  const response = await axios(`${balApiUrl}/app_version`, options)
  return response as AxiosResponse<Version>
}
