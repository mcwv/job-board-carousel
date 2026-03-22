import { useState } from 'react';
import { Button } from './button';
import { Input } from './input';
import { ChevronDown, ChevronRight, Code } from 'lucide-react';

interface WordPressDebuggerProps {
  endpoint: string;
}

export function WordPressDebugger({ endpoint }: WordPressDebuggerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [rawData, setRawData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchRawData = async () => {
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      const data = await response.json();
      setRawData(data);
      setIsOpen(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch');
    } finally {
      setIsLoading(false);
    }
  };

  const renderValue = (value: any, depth = 0): JSX.Element => {
    if (value === null) return <span className="text-gray-500">null</span>;
    if (value === undefined) return <span className="text-gray-500">undefined</span>;
    
    if (typeof value === 'string') {
      return <span className="text-green-600">"{value.length > 100 ? value.substring(0, 100) + '...' : value}"</span>;
    }
    
    if (typeof value === 'number') {
      return <span className="text-blue-600">{value}</span>;
    }
    
    if (typeof value === 'boolean') {
      return <span className="text-purple-600">{value.toString()}</span>;
    }
    
    if (Array.isArray(value)) {
      if (value.length === 0) return <span className="text-gray-500">[]</span>;
      return (
        <span className="text-gray-700">
          Array[{value.length}]
        </span>
      );
    }
    
    if (typeof value === 'object') {
      const keys = Object.keys(value);
      if (keys.length === 0) return <span className="text-gray-500">{'{}'}</span>;
      return (
        <span className="text-gray-700">
          Object {'{'}...{'}'}
        </span>
      );
    }
    
    return <span>{String(value)}</span>;
  };

  const renderObject = (obj: any, depth = 0) => {
    if (depth > 3) return <div className="text-gray-500 text-xs">...</div>;
    
    if (Array.isArray(obj)) {
      if (obj.length === 0) return <div className="text-gray-500 text-xs">[]</div>;
      
      return (
        <div className="space-y-1">
          {obj.slice(0, 2).map((item, index) => (
            <details key={index} className="ml-4">
              <summary className="cursor-pointer text-xs font-mono hover:bg-gray-100 rounded px-1">
                [{index}]
              </summary>
              <div className="ml-4 mt-1">
                {renderObject(item, depth + 1)}
              </div>
            </details>
          ))}
          {obj.length > 2 && (
            <div className="ml-4 text-xs text-gray-500">
              ... and {obj.length - 2} more items
            </div>
          )}
        </div>
      );
    }
    
    if (typeof obj === 'object' && obj !== null) {
      const entries = Object.entries(obj);
      
      return (
        <div className="space-y-1">
          {entries.map(([key, value]) => (
            <div key={key} className="ml-4 text-xs font-mono">
              <span className="text-blue-700 font-semibold">{key}</span>
              <span className="text-gray-600">: </span>
              {typeof value === 'object' && value !== null ? (
                <details className="inline">
                  <summary className="cursor-pointer hover:bg-gray-100 rounded px-1 inline">
                    {renderValue(value, depth)}
                  </summary>
                  <div className="ml-4 mt-1">
                    {renderObject(value, depth + 1)}
                  </div>
                </details>
              ) : (
                renderValue(value, depth)
              )}
            </div>
          ))}
        </div>
      );
    }
    
    return <div className="text-xs">{renderValue(obj, depth)}</div>;
  };

  return (
    <div className="bg-gray-50 rounded-lg border border-gray-200 p-4 space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Code className="w-4 h-4 text-gray-600" />
          <h3 className="font-semibold text-sm text-gray-900">WordPress API Inspector</h3>
        </div>
        <Button 
          onClick={fetchRawData}
          disabled={isLoading}
          size="sm"
          variant="outline"
        >
          {isLoading ? 'Loading...' : 'Inspect API Response'}
        </Button>
      </div>
      
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded text-xs">
          {error}
        </div>
      )}
      
      {rawData && (
        <div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            Raw API Response
          </button>
          
          {isOpen && (
            <div className="mt-2 bg-white border border-gray-200 rounded p-3 max-h-96 overflow-auto">
              {renderObject(rawData)}
            </div>
          )}
        </div>
      )}
      
      <p className="text-xs text-gray-600">
        Use this tool to see what fields are available in your WordPress API response and customize the field mapping accordingly.
      </p>
    </div>
  );
}
