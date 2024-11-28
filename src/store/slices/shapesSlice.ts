import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Shape, ShapeType } from '../../types/shapes';

interface ShapesState {
  shapes: Shape[];
  activeShapeId: string | null;
}

const initialState: ShapesState = {
  shapes: [],
  activeShapeId: null,
};

export const shapesSlice = createSlice({
  name: 'shapes',
  initialState,
  reducers: {
    addShape: (state, action: PayloadAction<ShapeType>) => {
      const newShape: Shape = {
        id: Math.random().toString(36).substr(2, 9),
        type: action.payload,
        position: [0, 0, 0],
        rotation: [0, 0, 0],
        scale: [1, 1, 1],
      };
      state.shapes.push(newShape);
      state.activeShapeId = newShape.id;
    },
    updateShape: (state, action: PayloadAction<Shape>) => {
      const index = state.shapes.findIndex(shape => shape.id === action.payload.id);
      if (index !== -1) {
        state.shapes[index] = action.payload;
      }
    },
    setActiveShape: (state, action: PayloadAction<string | null>) => {
      state.activeShapeId = action.payload;
    },
    deleteShape: (state, action: PayloadAction<string>) => {
      state.shapes = state.shapes.filter(shape => shape.id !== action.payload);
      if (state.activeShapeId === action.payload) {
        state.activeShapeId = null;
      }
    },
  },
});

export const { addShape, updateShape, setActiveShape, deleteShape } = shapesSlice.actions;
export default shapesSlice.reducer;