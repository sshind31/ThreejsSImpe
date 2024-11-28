import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { useAppDispatch } from '../../hooks/useAppDispatch';

export const Controls = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="absolute bottom-4 right-4 bg-white p-2 rounded-lg shadow-lg">
      <div className="flex gap-2">
        <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
          <ZoomIn className="w-6 h-6" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
          <ZoomOut className="w-6 h-6" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
          <RotateCcw className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};