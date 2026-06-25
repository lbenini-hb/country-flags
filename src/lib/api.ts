import ALL_COUNTRIES from "../data/countries";
interface CountryData {
	flag: string;
	iso2: string;
}

const countries_to_search = ALL_COUNTRIES as unknown as CountryData[];

function isEqual(str1: string, str2: string) {
	return str1.toUpperCase() === str2.toUpperCase();
}

function findFlagUrlByPredicate(countries: CountryData[], predicate: (c: CountryData) => boolean) {
	const country = countries.find(predicate);
	return country ? country.flag : "";
}

export function findFlagUrlByIso2Code(iso2Code: string) {
	return findFlagUrlByPredicate(countries_to_search, ({ iso2 }) => isEqual(iso2, iso2Code));
}