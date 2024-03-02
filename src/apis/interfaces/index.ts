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
