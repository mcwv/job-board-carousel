import { useState } from 'react';
import { Job } from '../types/job';
import { Region } from '../types/regions';
import { Button } from './button';
import { Textarea } from './textarea';
import { Input } from './input';
import { fetchWordPressJobs } from '../utils/wordpressMapper';
import { Loader2, Globe } from 'lucide-react';
import { WordPressDebugger } from './WordPressDebugger';

interface DataInputProps {
  onDataLoaded: (jobs: Job[]) => void;
  selectedRegion: Region | null;
}

export function DataInput({ onDataLoaded, selectedRegion }: DataInputProps) {
  const [jsonInput, setJsonInput] = useState('');
  const [error, setError] = useState('');
  const [wordpressEndpoint, setWordpressEndpoint] = useState('/api/jobs');
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadSampleData = () => {
    const sampleJobs: Job[] = [
      {
        id: 1,
        title: 'SOCIAL MEDIA OFFICER',
        company: 'BATTERSEA DOGS & CATS HOME',
        companyTagline: 'Animal welfare charity',
        salary: '£30,255 – £37,732',
        location: 'London, Greater London',
        country: 'United Kingdom',
        workType: 'OFFICE',
        backgroundColor: '#2f3e73',
        countryCode: 'GB',
      },
      {
        id: 2,
        title: 'DIGITAL MARKETING MANAGER',
        company: 'BREWDOG',
        companyTagline: 'Craft beer revolution',
        salary: '£35,000 - £42,000',
        location: 'Edinburgh',
        country: 'Scotland',
        workType: 'HYBRID',
        backgroundColor: '#5e4b8b',
        countryCode: 'GB',
      },
      {
        id: 3,
        title: 'MARKETING EXECUTIVE',
        company: 'BBC CYMRU WALES',
        companyTagline: 'Broadcasting',
        salary: '£28,000 - £35,000',
        location: 'Cardiff',
        country: 'Wales',
        workType: 'REMOTE',
        backgroundColor: '#b80f2e',
        countryCode: 'GB',
      },
      {
        id: 4,
        title: 'SOCIAL MEDIA & DIGITAL CONTENT CREATOR',
        company: 'CLIMATE CENTRAL',
        companyTagline: 'Science-based climate news',
        salary: '$70,000 - $75,000',
        location: 'United States',
        country: 'United States',
        workType: 'REMOTE',
        backgroundColor: '#16a34a',
        countryCode: 'US',
      },
      {
        id: 5,
        title: 'DIR OF MARKETING & COMMS',
        company: 'SCOUTS CANADA',
        companyTagline: 'Youth movement & camping',
        salary: 'CAD 90,000 - 110,000',
        location: 'Ontario',
        country: 'Canada',
        workType: 'HYBRID',
        backgroundColor: '#dc2626',
        countryCode: 'CA',
      },
      {
        id: 6,
        title: 'ECOMMERCE & SOCIAL COORDINATOR',
        company: 'LACOSMETIQUE',
        companyTagline: 'Cosmetics and beauty supply',
        salary: '€40,000 - €50,000',
        location: 'Paris',
        country: 'France',
        workType: 'OFFICE',
        backgroundColor: '#0891b2',
        countryCode: 'FR',
      },
      {
        id: 7,
        title: 'BRAND MANAGER',
        company: 'MARIE FRANCE',
        companyTagline: 'Weight loss & body treatments',
        salary: '₱350,000 - ₱450,000',
        location: 'Manila',
        country: 'Philippines',
        workType: 'OFFICE',
        backgroundColor: '#db2777',
        countryCode: 'PH',
      },
      {
        id: 8,
        title: 'DIGITAL MARKETING MANAGER',
        company: 'TECH SOLUTIONS INDIA',
        companyTagline: 'IT services & consulting',
        salary: '₹12,00,000 - ₹16,00,000',
        location: 'Bangalore',
        country: 'India',
        workType: 'HYBRID',
        backgroundColor: '#059669',
        countryCode: 'IN',
      },
      {
        id: 9,
        title: 'SOCIAL MEDIA MANAGER',
        company: 'ZOMBIE WALK',
        companyTagline: 'Creative events & entertainment',
        salary: 'R$5,000 - R$8,000/mo',
        location: 'São Paulo',
        country: 'Brazil',
        workType: 'REMOTE',
        backgroundColor: '#ea580c',
        countryCode: 'BR',
      },
      {
        id: 10,
        title: 'SR GROWTH MARKETING MANAGER',
        company: 'HEARD',
        companyTagline: 'Financial platform for therapists',
        salary: '$110,000 - $130,000',
        location: 'Remote',
        country: 'United States',
        workType: 'REMOTE',
        backgroundColor: '#6366f1',
        countryCode: 'US',
      },
    ];

    onDataLoaded(sampleJobs);
    setJsonInput(JSON.stringify(sampleJobs, null, 2));
    setError('');
  };

  const handleLoadCustomData = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      
      // Validate the data structure
      if (!Array.isArray(parsed)) {
        throw new Error('Data must be an array of jobs');
      }

      // Basic validation for each job
      const validatedJobs = parsed.map((job: any, index: number) => {
        if (!job.title || !job.company) {
          throw new Error(`Job at index ${index} is missing required fields (title, company)`);
        }
        
        return {
          id: job.id || index + 1,
          title: job.title,
          company: job.company,
          companyTagline: job.companyTagline || '',
          salary: job.salary || 'Competitive',
          location: job.location || '',
          country: job.country || '',
          workType: job.workType || 'OFFICE',
          backgroundColor: job.backgroundColor || '#2f3e73',
          countryCode: job.countryCode || 'GB',
        };
      });

      onDataLoaded(validatedJobs);
      setError('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid JSON format');
    }
  };

  const handleFetchFromWordPress = async () => {
    if (!selectedRegion) {
      setError('Please select a region first');
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    try {
      const jobs = await fetchWordPressJobs(wordpressEndpoint, selectedRegion);
      
      if (jobs.length === 0) {
        setError('No jobs found at this endpoint');
        return;
      }
      
      onDataLoaded(jobs);
      setJsonInput(JSON.stringify(jobs, null, 2));
      setError('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch jobs from WordPress');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Job Data Input</h2>
        <p className="text-sm text-gray-600">
          Fetch jobs directly from WordPress or paste JSON data manually.
        </p>
      </div>

      {!selectedRegion && (
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded">
          <p className="text-sm font-semibold">⚠️ Please select a region first</p>
          <p className="text-xs mt-1">The region color theme will be applied to all jobs.</p>
        </div>
      )}

      {/* WordPress API Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
        <div className="flex items-center gap-2 mb-3">
          <Globe className="w-5 h-5 text-blue-600" />
          <h3 className="font-semibold text-gray-900">Fetch from WordPress</h3>
        </div>
        
        <div className="space-y-3">
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              WordPress REST API Endpoint
            </label>
            <Input
              value={wordpressEndpoint}
              onChange={(e) => setWordpressEndpoint(e.target.value)}
              placeholder="https://yoursite.com/wp-json/wp/v2/job-listings"
              className="font-mono text-sm"
            />
          </div>
          
          <Button 
            onClick={handleFetchFromWordPress}
            disabled={isLoading || !wordpressEndpoint || !selectedRegion}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Fetching Jobs...
              </>
            ) : (
              <>
                <Globe className="w-4 h-4 mr-2" />
                Fetch Jobs from WordPress
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Manual JSON Input Section */}
      <div className="pt-4 border-t border-gray-200">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Or Paste Job Data (JSON)</label>
          <Textarea
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
            placeholder='[{"title": "Social Media Officer", "company": "Example Corp", ...}]'
            className="font-mono text-sm h-64"
          />
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mt-3">
            <p className="text-sm font-semibold">Error:</p>
            <p className="text-sm">{error}</p>
          </div>
        )}

        <div className="flex gap-3 mt-3">
          <Button onClick={handleLoadCustomData} className="flex-1">
            Load Custom Data
          </Button>
          <Button onClick={handleLoadSampleData} variant="outline" className="flex-1">
            Load Sample Data
          </Button>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-semibold text-sm text-blue-900 mb-2">WordPress Field Mapping:</h3>
        <p className="text-xs text-blue-800 mb-2">
          The system will automatically look for these field names in your WordPress data (ACF or meta fields):
        </p>
        <ul className="text-xs text-blue-800 space-y-1 list-disc list-inside">
          <li><code className="bg-blue-100 px-1 rounded">company_name</code>, <code className="bg-blue-100 px-1 rounded">company</code>, or <code className="bg-blue-100 px-1 rounded">employer</code></li>
          <li><code className="bg-blue-100 px-1 rounded">company_tagline</code>, <code className="bg-blue-100 px-1 rounded">industry</code></li>
          <li><code className="bg-blue-100 px-1 rounded">salary</code>, <code className="bg-blue-100 px-1 rounded">salary_range</code></li>
          <li><code className="bg-blue-100 px-1 rounded">location</code>, <code className="bg-blue-100 px-1 rounded">city</code></li>
          <li><code className="bg-blue-100 px-1 rounded">work_type</code>, <code className="bg-blue-100 px-1 rounded">job_type</code> (Office/Hybrid/Remote)</li>
          <li><code className="bg-blue-100 px-1 rounded">country</code>, <code className="bg-blue-100 px-1 rounded">country_code</code></li>
        </ul>
      </div>

      {/* WordPress API Debugger */}
      <WordPressDebugger endpoint={wordpressEndpoint} />
    </div>
  );
}