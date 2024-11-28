export type ShapeType = 'box' | 'cylinder' | 'sphere';

export interface Shape {
  id: string;
  type: ShapeType;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
}