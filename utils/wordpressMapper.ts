import { Job } from '../types/job';
import { Region, REGION_COLORS, REGION_COUNTRY_CODES } from '../types/regions';

// WordPress job listing response type
interface WordPressJob {
  id: number;
  title?: {
    rendered?: string;
  };
  content?: {
    rendered?: string;
  };
  acf?: any;
  meta?: any;
  company_name?: string;
  [key: string]: any;
}

// Fallback color palette (used only if region missing)
const backgroundColors = [
  '#2f3e73', '#5e4b8b', '#b80f2e', '#16a34a', '#dc2626',
  '#0891b2', '#db2777', '#059669', '#ea580c', '#6366f1'
];

// Strip HTML safely
function stripHtml(html: string): string {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
}

// Country → ISO fallback
function getCountryCode(country: string): string {
  const map: Record<string, string> = {
    'united kingdom': 'GB',
    'england': 'GB',
    'scotland': 'GB',
    'wales': 'GB',
    'northern ireland': 'GB',
    'united states': 'US',
    'usa': 'US',
    'canada': 'CA',
    'australia': 'AU',
    'india': 'IN',
    'philippines': 'PH',
    'south africa': 'ZA',
  };

  return map[country.toLowerCase().trim()] || 'GB';
}

// Region detection
function detectRegion(country: string, location: string): Region | undefined {
  const text = `${country} ${location}`.toLowerCase();

  if (text.includes('united kingdom') || text.includes('uk') || text.includes('london')) return 'UK';
  if (text.includes('nigeria')) return 'Nigeria';
  if (text.includes('canada')) return 'Canada';
  if (text.includes('united states') || text.includes('usa')) return 'US';
  if (text.includes('australia')) return 'Australia';
  if (text.includes('philippines')) return 'Philippines';
  if (text.includes('india')) return 'India';
  if (text.includes('south africa')) return 'South Africa';
  if (text.includes('remote') || text.includes('anywhere') || text.includes('global')) return 'WFA';

  return undefined;
}

// MAIN MAPPER
export function mapWordPressJobsToJobs(
  wpJobs: WordPressJob[],
  selectedRegion?: Region
): Job[] {
  return wpJobs.slice(0, 10).map((wpJob, index) => {
    // ACF can be an empty array
    const acf = Array.isArray(wpJob.acf) ? {} : wpJob.acf ?? {};
    const meta = wpJob.meta ?? {};

    // ✅ FIX 3: defensive guard
    const title = stripHtml(wpJob.title?.rendered ?? '').toUpperCase();

    // Company (server-hydrated, authoritative)
    const company = stripHtml(
      wpJob.company_name ?? 'COMPANY NAME'
    ).toUpperCase();

    // Tagline / industry (optional, weak signal)
    const companyTagline = stripHtml(
      acf.company_tagline ||
      acf.industry ||
      meta.industry ||
      'Professional services'
    );

    // ✅ FIX 2: real meta salary field
    const salary = stripHtml(
      meta._salary_min ||
      meta._job_salary ||
      'Competitive'
    );

    // ✅ FIX 2: real meta location field
    const location = stripHtml(
      meta._job_location || 'Remote'
    );

    // ✅ FIX 2: real meta country field
    const country = stripHtml(
      meta._job_country || 'United Kingdom'
    );

    // Work type from job-types taxonomy
    const jobTypes = wpJob['job-types'] || [];

    const hasType = (key: string) =>
      jobTypes.some((t: any) =>
        typeof t === 'string'
          ? t.toLowerCase() === key
          : t?.slug?.toLowerCase() === key
      );

    const workType =
      hasType('remote') ? 'REMOTE'
      : hasType('hybrid') ? 'HYBRID'
      : 'OFFICE';

    // Region
    const detectedRegion = detectRegion(country, location);
    const region = selectedRegion || detectedRegion;

    // Color
    const backgroundColor = region
      ? REGION_COLORS[region]
      : backgroundColors[index % backgroundColors.length];

    // Country code
    const countryCode = region
      ? REGION_COUNTRY_CODES[region]
      : getCountryCode(country);

    return {
      id: wpJob.id,
      title,
      company,
      companyTagline,
      salary,
      location,
      country,
      workType,
      backgroundColor,
      countryCode,
      region,
    };
  });
}

// API fetch (correct as-is)
export async function fetchWordPressJobs(
  _endpoint: string,
  selectedRegion?: Region
): Promise<Job[]> {
  const response = await fetch(`/api/jobs?region=${selectedRegion}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch jobs: ${response.status}`);
  }

  const data = await response.json();

  if (!Array.isArray(data)) {
    throw new Error('WordPress API did not return an array');
  }

  return mapWordPressJobsToJobs(data, selectedRegion);
}
