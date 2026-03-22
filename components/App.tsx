"use client";

import { useState } from 'react';
import { Job } from '../types/job';
import { Region } from '../types/regions';
import { RegionSelector } from './RegionSelector';
import { DataInput } from './DataInput';
import { CarouselPreview } from './CarouselPreview';
import { ExportCarousel } from './ExportCarousel';

export default function App() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Job Board Carousel Generator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select a region, import your top 10 jobs, and generate beautiful Instagram carousel designs 
            with automatic color themes.
          </p>
        </div>

        {/* Region Selector */}
        <div className="max-w-4xl mx-auto mb-8">
          <RegionSelector 
            selectedRegion={selectedRegion}
            onRegionSelect={setSelectedRegion}
          />
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Left Column: Data Input */}
          <div className="space-y-6">
            <DataInput 
              onDataLoaded={setJobs}
              selectedRegion={selectedRegion}
            />
            
            {jobs.length > 0 && selectedRegion && (
              <ExportCarousel 
                jobs={jobs}
                region={selectedRegion}
              />
            )}
          </div>

          {/* Right Column: Carousel Preview */}
          <div>
            <CarouselPreview jobs={jobs} />
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-12 max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use</h2>
          
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold text-lg mb-2">1. Select Your Region</h3>
              <p className="text-sm">
                Choose one of the 9 regions (UK, Nigeria, Canada, US, Australia, Philippines, India, South Africa, or WFA). 
                This will automatically apply the correct color theme to all job cards.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">2. Fetch Your Top 10 Jobs</h3>
              <p className="text-sm">
                Click "Fetch Jobs from WordPress" to pull jobs directly from your site. 
                The system will automatically apply the region's color and filter to the top 10 jobs.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">3. Preview the Carousel</h3>
              <p className="text-sm">
                Use the arrow buttons to preview each of the 10 slides. All slides will use the same color theme based on your selected region.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">4. Export for Instagram</h3>
              <p className="text-sm">
                Click "Export All Cards as Images" to download all 10 slides as PNG files (1080x1350px). 
                Upload them to Instagram as a carousel post!
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">📌 Region Color Themes:</h4>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded" style={{ backgroundColor: '#3a4fa3' }}></span>
                <span>UK: #3a4fa3</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded" style={{ backgroundColor: '#6b52a8' }}></span>
                <span>Nigeria: #6b52a8</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded" style={{ backgroundColor: '#d23a32' }}></span>
                <span>Canada: #d23a32</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded" style={{ backgroundColor: '#5a5a66' }}></span>
                <span>US: #5a5a66</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded" style={{ backgroundColor: '#1f8f94' }}></span>
                <span>Australia: #1f8f94</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded" style={{ backgroundColor: '#c94c8f' }}></span>
                <span>Philippines: #c94c8f</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded" style={{ backgroundColor: '#2a8f2f' }}></span>
                <span>India: #2a8f2f</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded" style={{ backgroundColor: '#c9a13a' }}></span>
                <span>South Africa: #c9a13a</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded" style={{ backgroundColor: '#6f86d6' }}></span>
                <span>WFA: #6f86d6</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}