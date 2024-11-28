import { useAppSelector } from '../../hooks/useAppSelector';
import { Shape } from '../../types/shapes';
import { ShapeComponent } from './ShapeComponent';

export const Model = () => {
  const shapes = useAppSelector(state => state.shapes.shapes);

  return (
    <>
      {shapes.map((shape) => (
        <ShapeComponent key={shape.id} shape={shape} />
      ))}
    </>
  );
};