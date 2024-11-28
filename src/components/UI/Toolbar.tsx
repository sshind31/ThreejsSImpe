import { Box, Cylinder as CylinderIcon, CircleDot, Trash2 } from 'lucide-react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { addShape, deleteShape } from '../../store/slices/shapesSlice';

export const Toolbar = () => {
  const dispatch = useAppDispatch();
  const activeShapeId = useAppSelector(state => state.shapes.activeShapeId);

  return (
    <div className="absolute top-4 left-4 bg-white p-2 rounded-lg shadow-lg">
      <div className="flex flex-col gap-2">
        <button 
          onClick={() => dispatch(addShape('box'))}
          className="p-2 hover:bg-gray-100 rounded-md transition-colors"
          title="Add Box"
        >
          <Box className="w-6 h-6" />
        </button>
        <button 
          onClick={() => dispatch(addShape('cylinder'))}
          className="p-2 hover:bg-gray-100 rounded-md transition-colors"
          title="Add Cylinder"
        >
          <CylinderIcon className="w-6 h-6" />
        </button>
        <button 
          onClick={() => dispatch(addShape('sphere'))}
          className="p-2 hover:bg-gray-100 rounded-md transition-colors"
          title="Add Sphere"
        >
          <CircleDot className="w-6 h-6" />
        </button>
        {activeShapeId && (
          <button 
            onClick={() => dispatch(deleteShape(activeShapeId))}
            className="p-2 hover:bg-red-100 text-red-600 rounded-md transition-colors mt-2 border-t border-gray-200"
            title="Delete Selected Shape"
          >
            <Trash2 className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
};