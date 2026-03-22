import React from 'react';

// Defining interfaces locally for the preview
interface Job {
  title: string;
  company: string;
  companyTagline: string;
  salary: string;
  location: string;
  countryCode: string;
  workType: 'OFFICE' | 'HYBRID' | 'REMOTE';
  backgroundColor: string;
}

interface JobCardProps {
  job: Job;
}

const CountryFlag = ({ countryCode }: { countryCode: string }) => {
  const flags: Record<string, string> = {
    US: "🇺🇸", GB: "🇬🇧", CA: "🇨🇦", AU: "🇦🇺",
    NG: "🇳🇬", PH: "🇵🇭", IN: "🇮🇳", ZA: "🇿🇦",
  };

  return (
    <div className="w-6 h-4 flex items-center justify-center text-[18px] leading-none shrink-0">
      {flags[countryCode] || countryCode}
    </div>
  );
};

export default function App() {
  const job: Job = {
    title: "Senior Global Product & Strategic Marketing Manager", 
    company: "Design Studio Co.", 
    companyTagline: "Crafting contemporary international experiences",
    salary: "$120,000 - $150,000",
    location: "New York, USA",
    countryCode: "US",
    workType: "HYBRID",
    backgroundColor: "#6366f1"
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10 flex justify-center items-center font-sans">
      <JobCard job={job} />
    </div>
  );
}

export function JobCard({ job }: JobCardProps) {
  const workTypeColors = {
    OFFICE: "#42424c",
    HYBRID: "#9ca3af",
    REMOTE: "#e5e7eb",
  };

  const workTypeTextColors = {
    OFFICE: "text-white",
    HYBRID: "text-white",
    REMOTE: "text-gray-700",
  };

  return (
    <div className="bg-white rounded-lg shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] w-[540px] h-[675px] shrink-0 flex flex-col overflow-hidden">
      
      {/* Header Section */}
      <div
        className="min-h-[250px] p-6 pb-2 flex flex-col gap-2 shrink-0 rounded-lg z-20 relative"
        style={{ backgroundColor: job.backgroundColor }}
      >
        <div className="bg-white rounded-lg px-4 py-2 flex items-center justify-between shadow-sm border border-gray-100">
          <div className="flex items-center gap-3">
            <CountryFlag countryCode={job.countryCode} />
            <div className="text-gray-700 font-bold text-[18px] tracking-tight leading-4">
              {job.location}
            </div>
          </div>
          <div
            className="px-4 py-1 rounded"
            style={{ backgroundColor: workTypeColors[job.workType] }}
          >
            <p className={`font-bold text-sm tracking-tight leading-5 ${workTypeTextColors[job.workType]}`}>
              {job.workType}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center flex-1">
          <h1 className="text-white text-center font-extrabold uppercase tracking-[-1.5px] drop-shadow-md leading-[42px] text-[42px] px-2">
            {job.title}
          </h1>
        </div>
      </div>

      {/* Dynamic Content Section */}
      <div className="flex-1 bg-white px-6 flex flex-col items-center overflow-hidden rounded-lg mt-[-15px] relative z-10 border-[1.5px] border-black shadow-[0_-4px_15px_-5px_rgba(0,0,0,0.1)]">
        
        {/* TOP SPACER 
            Kept at flex-[2] to maintain the movement logic you liked.
        */}
        <div className="flex-[2] min-h-[20px]" />

        {/* The Content Unit
            - Added -translate-y-5: This shifts the whole block up by 20px 
              without affecting the spacer calculations.
        */}
        <div className="flex flex-col items-center w-full shrink-0 -translate-y-5">
          <h2 className="text-gray-800 text-[36px] font-bold text-center uppercase tracking-tight leading-[1.1] line-clamp-2">
            {job.company}
          </h2>
          
          <p className="mt-4 text-gray-500 text-[20px] font-medium italic text-center tracking-wide leading-[28px] px-4">
            {job.companyTagline}
          </p>

          {/* Fixed Internal Gap */}
          <div className="h-17 shrink-2" />

          {/* Salary Badge */}
          <div className="flex items-center justify-center shrink-0">
            <div className="bg-gray-800 px-8 h-[46px] flex items-center justify-center rounded-lg shadow-[0px_4px_12px_0px_rgba(0,0,0,0.2)] border border-gray-700">
              <p className="text-white font-semibold text-[26px] leading-none mt-[-2px] text-center uppercase tracking-tight">
                {job.salary}
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM SPACER */}
        <div className="flex-1" />
      </div>

      {/* Footer Section */}
      <div className="h-[110px] bg-[#f3f0eb] flex flex-col justify-center shrink-0 border-[1.5px] border-black rounded-lg mt-[-20px] relative z-0 pt-4 px-6">
        <div className="flex flex-col items-center justify-center gap-1">
          <p className="text-gray-500 font-bold text-[20px] tracking-tight leading-normal text-center">
            link in the bio.
          </p>
          <p className="text-gray-400 italic text-[18px] leading-normal text-center">
            @samssocialmediaclub
          </p>
        </div>
      </div>
    </div>
  );
}