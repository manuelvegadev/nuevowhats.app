export type IPRegistry = {
  callingCode: string;
  city: string;
  countryCapital: string;
  country_code: string;
  country_name: string;
  currency: string;
  currencySymbol: string;
  emojiFlag: string;
  flagUrl: string;
  ip: string;
  is_in_european_union: boolean;
  latitude: number;
  longitude: number;
  metro_code: number;
  organisation: string;
  region_code: string;
  region_name: string;
  suspiciousFactors: SuspiciousFactors;
  time_zone: string;
  zip_code: string;
};

export type SuspiciousFactors = {
  isProxy: boolean;
  isSpam: boolean;
  isSuspicious: boolean;
  isTorNode: boolean;
};
