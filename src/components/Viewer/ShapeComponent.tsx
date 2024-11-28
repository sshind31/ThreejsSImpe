import { FC } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { Shape } from '../../types/shapes';

export const ShapeComponent: FC<{ shape: Shape }> = ({ shape }) => {
  const isActive = useAppSelector(state => state.shapes.activeShapeId === shape.id);
  const color = isActive ? '#f5a742' : shape.type === 'box' ? '#4287f5' : shape.type === 'cylinder' ? '#42f587' : '#f54242';

  switch (shape.type) {
    case 'box':
      return (
        <mesh position={shape.position} rotation={shape.rotation} scale={shape.scale}>
          <boxGeometry />
          <meshStandardMaterial color={color} />
        </mesh>
      );
    case 'cylinder':
      return (
        <mesh position={shape.position} rotation={shape.rotation} scale={shape.scale}>
          <cylinderGeometry />
          <meshStandardMaterial color={color} />
        </mesh>
      );
    case 'sphere':
      return (
        <mesh position={shape.position} rotation={shape.rotation} scale={shape.scale}>
          <sphereGeometry />
          <meshStandardMaterial color={color} />
        </mesh>
      );
    default:
      return null;
  }
};