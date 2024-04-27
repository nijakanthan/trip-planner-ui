export interface Version {
  version: string
}

export interface Country {
  code: string
  name: string
}

export interface CountriesObject {
  countries: Array<Country>
}

export interface Holiday {
  summary: string
  date: string
  catagories?: string[]
}

export interface HolidaysObject {
  holidays: Holiday[]
}

export interface Department {
  id: string
  name: string
}
