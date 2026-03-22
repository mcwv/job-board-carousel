import { useState } from 'react';
import { Job } from '../types/job';
import { JobCard } from './JobCard';
import { Button } from './button';
import { Download, Loader2, Image as ImageIcon } from 'lucide-react';
import html2canvas from 'html2canvas';

interface ExportCarouselProps {
  jobs: Job[];
  region: string;
}

export function ExportCarousel({ jobs, region }: ExportCarouselProps) {
  const [isExporting, setIsExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);

  const exportSingleCard = async (job: Job, index: number): Promise<void> => {
    return new Promise((resolve) => {
      // Create a temporary container
      const container = document.createElement('div');
      container.style.position = 'absolute';
      container.style.left = '-9999px';
      container.style.top = '0';
      document.body.appendChild(container);

      // Create a wrapper for the card with exact dimensions
      const wrapper = document.createElement('div');
      wrapper.style.width = '1080px';
      wrapper.style.height = '1350px';
      wrapper.style.backgroundColor = '#ffffff';
      wrapper.style.color = '#0f172a';
      wrapper.style.fontFamily = 'Inter, system-ui, sans-serif';
      wrapper.style.all = 'initial';

      container.appendChild(wrapper);


      // Render the JobCard into the wrapper
      const root = document.createElement('div');
      wrapper.appendChild(root);

      // Import React and ReactDOM dynamically
      import('react-dom/client').then(({ createRoot }) => {
        import('react').then((React) => {
          const reactRoot = createRoot(root);
          reactRoot.render(
            React.createElement(JobCard, { job })
          );

          // Wait for rendering and then capture
          html2canvas(wrapper, {
            width: 1080,
            height: 1350,
            scale: 1,
            backgroundColor: '#ffffff',
            logging: false,
            useCORS: true,
            ignoreElements: (el) => {
              const style = getComputedStyle(el);
              return (
                style.color.includes('lab(') ||
                style.backgroundColor.includes('lab(')
              );
            },
          }).then((canvas) => {
              // Convert to blob and download
              canvas.toBlob((blob) => {
                if (blob) {
                  const url = URL.createObjectURL(blob);
                  const link = document.createElement('a');
                  link.download = `${region}_job_${index + 1}_${job.company.replace(/\s+/g, '_')}.png`;
                  link.href = url;
                  link.click();
                  URL.revokeObjectURL(url);
                }

                // Cleanup
                reactRoot.unmount();
                document.body.removeChild(container);
                resolve();
              }, 'image/png');
            });
        });
      });
    });
  };

  const exportAllCards = async () => {
    setIsExporting(true);
    setExportProgress(0);

    for (let i = 0; i < jobs.length; i++) {
      await exportSingleCard(jobs[i], i);
      setExportProgress(Math.round(((i + 1) / jobs.length) * 100));
      
      // Small delay between exports
      await new Promise(resolve => setTimeout(resolve, 300));
    }

    setIsExporting(false);
    setExportProgress(0);
  };

  return (
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200 space-y-4">
      <div className="flex items-center gap-3">
        <ImageIcon className="w-6 h-6 text-green-600" />
        <div>
          <h3 className="font-semibold text-gray-900">Export Instagram Carousel</h3>
          <p className="text-sm text-gray-600">
            Download all {jobs.length} job cards as PNG images (1080x1350px)
          </p>
        </div>
      </div>

      {isExporting && (
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm text-gray-700">
            <span>Exporting images...</span>
            <span className="font-semibold">{exportProgress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-green-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${exportProgress}%` }}
            />
          </div>
        </div>
      )}

      <Button
        onClick={exportAllCards}
        disabled={isExporting || jobs.length === 0}
        className="w-full bg-green-600 hover:bg-green-700"
        size="lg"
      >
        {isExporting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Exporting {exportProgress}%
          </>
        ) : (
          <>
            <Download className="w-5 h-5 mr-2" />
            Export All {jobs.length} Cards as Images
          </>
        )}
      </Button>

      <div className="text-xs text-gray-600 space-y-1">
        <p>✓ Images will be downloaded as PNG files</p>
        <p>✓ Each file will be named: {region}_job_#_CompanyName.png</p>
        <p>✓ Resolution: 1080x1350px (Instagram carousel format)</p>
      </div>
    </div>
  );
}
