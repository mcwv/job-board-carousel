export type Region = 'UK' | 'Nigeria' | 'Canada' | 'US' | 'Australia' | 'Philippines' | 'India' | 'South Africa' | 'WFA';

export const REGION_COLORS: Record<Region, string> = {
  'UK': '#3a4fa3',
  'Nigeria': '#6b52a8',
  'Canada': '#d23a32',
  'US': '#5a5a66',
  'Australia': '#1f8f94',
  'Philippines': '#c94c8f',
  'India': '#2a8f2f',
  'South Africa': '#c9a13a',
  'WFA': '#6f86d6',
};

export const REGION_COUNTRY_CODES: Record<Region, string> = {
  'UK': 'GB',
  'Nigeria': 'NG',
  'Canada': 'CA',
  'US': 'US',
  'Australia': 'AU',
  'Philippines': 'PH',
  'India': 'IN',
  'South Africa': 'ZA',
  'WFA': 'WFA', // Globe icon or similar
};

export const REGION_LABELS: Record<Region, string> = {
  'UK': 'United Kingdom',
  'Nigeria': 'Nigeria',
  'Canada': 'Canada',
  'US': 'United States',
  'Australia': 'Australia',
  'Philippines': 'Philippines',
  'India': 'India',
  'South Africa': 'South Africa',
  'WFA': 'Work From Anywhere',
};
