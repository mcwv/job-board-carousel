import { NextResponse } from 'next/server';

const WP_BASE = 'https://www.samssocialmediaclub.com/wp-json/wp/v2';

async function fetchJSON(url: string) {
  const res = await fetch(url, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error(`WP fetch failed: ${res.status} ${url}`);
  }

  return res.json();
}

export async function GET() {
  try {
    // 1️⃣ Fetch jobs
    const jobs = await fetchJSON(
      `${WP_BASE}/job-listings?per_page=10`
    );

    // 2️⃣ Collect unique company manager IDs
    const companyIds = [
      ...new Set(
        jobs
          .map((j: any) => j?.meta?._company_manager_id)
          .filter(Boolean)
      ),
    ];

    let companyMap: Record<number, string> = {};

    // 3️⃣ Fetch companies (CORRECT ENDPOINT)
    if (companyIds.length > 0) {
      const companies = await fetchJSON(
        `${WP_BASE}/companies?include=${companyIds.join(',')}`
      );

      companyMap = Object.fromEntries(
        companies.map((c: any) => [
          c.id,
          c?.title?.rendered ?? null,
        ])
      );
    }

    // 4️⃣ Attach company_name to each job
    const hydratedJobs = jobs.map((job: any) => ({
      ...job,
      company_name:
        companyMap[job?.meta?._company_manager_id] ?? null,
    }));

    return NextResponse.json(hydratedJobs);
  } catch (err: any) {
    console.error('[API /jobs ERROR]', err);

    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}
