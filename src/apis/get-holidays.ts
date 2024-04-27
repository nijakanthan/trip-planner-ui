import axios, { AxiosResponse } from 'axios'
import { balApiUrl } from './constant'
import { HolidaysObject } from './interfaces'

export async function getHolidays(countryCode: string, year: string) {
  const options = {
    method: 'GET',
  }

  const response = await axios(`${balApiUrl}/holidays/${countryCode}/${year}`, options)
  return response as AxiosResponse<HolidaysObject>
}
