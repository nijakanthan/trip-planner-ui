import axios, { AxiosResponse } from 'axios'
import { externalApiUrl } from './constant'
import { Department } from './interfaces'

export async function getDepartment(id: string) {
  const options = {
    method: 'GET',
  }

  const response = await axios(`${externalApiUrl}/department/${id}`, options)
  return response as AxiosResponse<Department>
}
