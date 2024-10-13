import { useHelper } from '@react-three/drei';
import { useRef } from 'react';
import { DirectionalLight, PointLightHelper } from 'three';

interface Props {
  color?: string;
  intensity?: number;
  position?: [number, number, number];
  helperSize?: number;
  helperColor?: string;
}

export const PointLightWithHelper= ({
  color,
  intensity,
  position,
  helperSize,
  helperColor,
}:Props) => {
  const lightRef = useRef<DirectionalLight>(null);

  // @ts-expect-error
  useHelper(lightRef, PointLightHelper, helperSize, helperColor);

  return (
    <pointLight
      // @ts-expect-error
      ref={lightRef}
      color={color}
      intensity={intensity}
      position={position}
    />
  );
};
