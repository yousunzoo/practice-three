import { useHelper } from '@react-three/drei';
import { useRef } from 'react';
import { DirectionalLight, DirectionalLightHelper } from 'three';

interface Props {
  color: string;
  intensity: number;
  position: [number, number, number];
  helperSize: number;
  helperColor: string;
}

export const DirectionalLightWithHelper= ({
  color,
  intensity,
  position,
  helperSize,
  helperColor,
}:Props) => {
  const lightRef = useRef<DirectionalLight>(null);

  // @ts-expect-error
  useHelper(lightRef, DirectionalLightHelper, helperSize, helperColor);

  return (
    <directionalLight
      // @ts-expect-error
      ref={lightRef}
      color={color}
      intensity={intensity}
      position={position}
      castShadow  

      // 절구체 크기 설정
      shadow-camera-top={6}
      shadow-camera-bottom={-6}
      shadow-camera-left={-6}
      shadow-camera-right={6}

      // 그림자 품질
      shadow-mapSize={[512, 512]}

      shadow-radius={10}

      // 그림자 노이즈 제거
      shadow-bias={-0.0001}
      />
  );
};
