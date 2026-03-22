import { Region, REGION_COLORS, REGION_LABELS } from '../types/regions';
import { Button } from './button';
import { Check } from 'lucide-react';

interface RegionSelectorProps {
  selectedRegion: Region | null;
  onRegionSelect: (region: Region) => void;
}

export function RegionSelector({ selectedRegion, onRegionSelect }: RegionSelectorProps) {
  const regions: Region[] = ['UK', 'Nigeria', 'Canada', 'US', 'Australia', 'Philippines', 'India', 'South Africa', 'WFA'];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Select Region</h2>
        <p className="text-sm text-gray-600">
          Choose a region to apply the correct color theme and filter jobs.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {regions.map((region) => {
          const isSelected = selectedRegion === region;
          const color = REGION_COLORS[region];
          
          return (
            <button
              key={region}
              onClick={() => onRegionSelect(region)}
              className={`
                relative p-4 rounded-lg border-2 transition-all
                ${isSelected ? 'border-gray-900 shadow-lg' : 'border-gray-200 hover:border-gray-400'}
              `}
              style={{
                backgroundColor: isSelected ? `${color}15` : 'white',
              }}
            >
              <div className="flex flex-col items-center gap-2">
                <div
                  className="w-12 h-12 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <span className="text-sm font-semibold text-gray-900">
                  {REGION_LABELS[region]}
                </span>
                {isSelected && (
                  <div className="absolute top-2 right-2">
                    <Check className="w-5 h-5 text-gray-900" />
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {selectedRegion && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-900">
            <span className="font-semibold">Selected Region:</span> {REGION_LABELS[selectedRegion]}
          </p>
          <p className="text-xs text-blue-800 mt-1">
            All jobs will use the color theme:{' '}
            <span
              className="inline-block w-4 h-4 rounded align-middle"
              style={{ backgroundColor: REGION_COLORS[selectedRegion] }}
            />{' '}
            <code className="bg-blue-100 px-1 rounded">{REGION_COLORS[selectedRegion]}</code>
          </p>
        </div>
      )}
    </div>
  );
}
