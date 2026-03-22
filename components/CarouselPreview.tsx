import { useState } from 'react';
import { Job } from '../types/job';
import { JobCard } from './JobCard';
import { Button } from './button';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';

interface CarouselPreviewProps {
  jobs: Job[];
}

export function CarouselPreview({ jobs }: CarouselPreviewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : jobs.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < jobs.length - 1 ? prev + 1 : 0));
  };

  const handleExport = () => {
    // This would typically trigger download of images
    // For now, we'll just show the data
    const dataStr = JSON.stringify(jobs, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'job-carousel-data.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  if (jobs.length === 0) {
    return (
      <div className="flex items-center justify-center h-[675px] bg-gray-100 rounded-lg">
        <div className="text-center">
          <p className="text-gray-500 text-lg">No jobs loaded yet</p>
          <p className="text-gray-400 text-sm mt-2">Load data to see the carousel preview</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Instagram Carousel Preview</h2>
          <p className="text-sm text-gray-600 mt-1">
            Slide {currentIndex + 1} of {jobs.length}
          </p>
        </div>
        <Button onClick={handleExport} variant="outline" size="sm">
          <Download className="w-4 h-4 mr-2" />
          Export Data
        </Button>
      </div>

      {/* Carousel Navigation */}
      <div className="relative">
        <div className="flex items-center justify-center gap-6">
          <Button
            onClick={handlePrevious}
            variant="outline"
            size="icon"
            className="h-12 w-12 rounded-full"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          {/* Card Display */}
          <div className="relative">
            <JobCard job={jobs[currentIndex]} />
          </div>

          <Button
            onClick={handleNext}
            variant="outline"
            size="icon"
            className="h-12 w-12 rounded-full"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {jobs.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'w-8 bg-blue-600'
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Current Job Details */}
      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-3">Current Job Details:</h3>
        <dl className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <dt className="text-gray-600">Title:</dt>
            <dd className="font-medium text-gray-900">{jobs[currentIndex].title}</dd>
          </div>
          <div>
            <dt className="text-gray-600">Company:</dt>
            <dd className="font-medium text-gray-900">{jobs[currentIndex].company}</dd>
          </div>
          <div>
            <dt className="text-gray-600">Location:</dt>
            <dd className="font-medium text-gray-900">{jobs[currentIndex].location}</dd>
          </div>
          <div>
            <dt className="text-gray-600">Salary:</dt>
            <dd className="font-medium text-gray-900">{jobs[currentIndex].salary}</dd>
          </div>
          <div>
            <dt className="text-gray-600">Work Type:</dt>
            <dd className="font-medium text-gray-900">{jobs[currentIndex].workType}</dd>
          </div>
          <div>
            <dt className="text-gray-600">Country:</dt>
            <dd className="font-medium text-gray-900">{jobs[currentIndex].country}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}