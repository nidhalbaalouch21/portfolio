import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface BallpitProps {
  count?: number;
  gravity?: number;
  friction?: number;
  wallBounce?: number;
  followCursor?: boolean;
  colors?: string[];
  ballSize?: number;
}

const DEFAULT_COLORS = ['#0057FE', '#EAEAE9', '#013EAB', '#80A5E2'];

interface BallData {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  radius: number;
  color: THREE.Color;
}

function Balls({ count = 100, gravity = 0.01, friction = 0.9975, wallBounce = 0.95, followCursor = false, colors = DEFAULT_COLORS, ballSize = 0.35 }: BallpitProps) {
  const { viewport, mouse } = useThree();
  const meshRef = useRef<THREE.InstancedMesh>(null);
  
  // Use a ref for mutable state to avoid React purity rule violations
  const ballsRef = useRef<BallData[]>([]);

  // Initialize balls only once or when count/viewport changes
  useEffect(() => {
    const newBalls: BallData[] = [];
    for (let i = 0; i < count; i++) {
      newBalls.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * viewport.width,
          (Math.random() - 0.5) * viewport.height,
          (Math.random() - 0.5) * 5
        ),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.1,
          (Math.random() - 0.5) * 0.1,
          (Math.random() - 0.5) * 0.1
        ),
        radius: ballSize + Math.random() * 0.2,
        color: new THREE.Color(colors[Math.floor(Math.random() * colors.length)]),
      });
    }
    ballsRef.current = newBalls;
  }, [count, viewport.width, viewport.height, colors, ballSize]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(() => {
    if (!meshRef.current || ballsRef.current.length === 0) return;

    for (let i = 0; i < count; i++) {
      const ball = ballsRef.current[i];
      if (!ball) continue;

      // Gravity
      ball.velocity.y -= gravity;

      // Friction
      ball.velocity.multiplyScalar(friction);

      // Mouse Interaction
      if (followCursor) {
        const mouseX = (mouse.x * viewport.width) / 2;
        const mouseY = (mouse.y * viewport.height) / 2;
        const target = new THREE.Vector3(mouseX, mouseY, 0);
        const dist = ball.position.distanceTo(target);
        
        if (dist < 3) {
           const force = target.clone().sub(ball.position).normalize().multiplyScalar(0.005);
           ball.velocity.add(force);
        }
      }

      // Update position
      ball.position.add(ball.velocity);

      // Boundaries
      const halfWidth = viewport.width / 2;
      const halfHeight = viewport.height / 2;
      const depth = 2.5;

      // X
      if (Math.abs(ball.position.x) + ball.radius > halfWidth) {
        ball.position.x = Math.sign(ball.position.x) * (halfWidth - ball.radius);
        ball.velocity.x *= -wallBounce;
      }
      // Y
      if (Math.abs(ball.position.y) + ball.radius > halfHeight) {
        ball.position.y = Math.sign(ball.position.y) * (halfHeight - ball.radius);
        ball.velocity.y *= -wallBounce;
      }
      // Z (depth)
      if (Math.abs(ball.position.z) + ball.radius > depth) {
        ball.position.z = Math.sign(ball.position.z) * (depth - ball.radius);
        ball.velocity.z *= -wallBounce;
      }

      // Update instanced mesh
      dummy.position.copy(ball.position);
      dummy.scale.setScalar(ball.radius * 2);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
      meshRef.current.setColorAt(i, ball.color);
    }
    
    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]} castShadow receiveShadow>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial roughness={0.1} metalness={0.1} />
    </instancedMesh>
  );
}

const Ballpit: React.FC<BallpitProps> = (props) => {
  return (
    <div className="w-full h-full min-h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <Balls {...props} />
      </Canvas>
    </div>
  );
};

export default Ballpit;
