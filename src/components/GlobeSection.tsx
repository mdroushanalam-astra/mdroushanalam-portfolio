import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Html } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

const ventures = [
  { name: "Techgram", city: "Pan-India", lat: 20.5937, lng: 78.9629, color: "#E8A307" },
  { name: "Gig-Lo", city: "India", lat: 28.4595, lng: 77.0266, color: "#22C55E" },
];

function latLngToVector3(lat: number, lng: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

const GlobeWireframe = () => {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  const gridLines = useMemo(() => {
    const lines: THREE.Vector3[][] = [];
    // Latitude lines
    for (let lat = -60; lat <= 60; lat += 30) {
      const points: THREE.Vector3[] = [];
      for (let lng = 0; lng <= 360; lng += 5) {
        points.push(latLngToVector3(lat, lng, 2.01));
      }
      lines.push(points);
    }
    // Longitude lines
    for (let lng = 0; lng < 360; lng += 30) {
      const points: THREE.Vector3[] = [];
      for (let lat = -90; lat <= 90; lat += 5) {
        points.push(latLngToVector3(lat, lng, 2.01));
      }
      lines.push(points);
    }
    return lines;
  }, []);

  return (
    <group ref={meshRef}>
      <Sphere args={[2, 48, 48]}>
        <meshStandardMaterial
          color="#0a1628"
          transparent
          opacity={0.85}
          roughness={0.8}
        />
      </Sphere>

      {/* Grid lines */}
      {gridLines.map((points, i) => (
        <line key={i}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={points.length}
              array={new Float32Array(points.flatMap((p) => [p.x, p.y, p.z]))}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#1e3a5f" transparent opacity={0.3} />
        </line>
      ))}

      {/* Venture markers */}
      {ventures.map((v) => {
        const pos = latLngToVector3(v.lat, v.lng, 2.05);
        return (
          <group key={v.name} position={[pos.x, pos.y, pos.z]}>
            <mesh>
              <sphereGeometry args={[0.06, 16, 16]} />
              <meshStandardMaterial color={v.color} emissive={v.color} emissiveIntensity={2} />
            </mesh>
            {/* Pulse ring */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <ringGeometry args={[0.08, 0.12, 32]} />
              <meshStandardMaterial color={v.color} transparent opacity={0.4} emissive={v.color} emissiveIntensity={1} />
            </mesh>
            <Html distanceFactor={8} style={{ pointerEvents: "none" }}>
              <div className="bg-card/90 backdrop-blur-sm border border-border rounded-lg px-3 py-1.5 whitespace-nowrap shadow-xl">
                <p className="text-foreground text-xs font-bold">{v.name}</p>
                <p className="text-muted-foreground text-[10px]">{v.city}</p>
              </div>
            </Html>
          </group>
        );
      })}

      {/* Connection arcs */}
      {ventures.length > 1 &&
        ventures.slice(1).map((v, i) => {
          const start = latLngToVector3(ventures[0].lat, ventures[0].lng, 2.05);
          const end = latLngToVector3(v.lat, v.lng, 2.05);
          const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5).normalize().multiplyScalar(2.6);
          const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
          const points = curve.getPoints(50);
          return (
            <line key={i}>
              <bufferGeometry>
                <bufferAttribute
                  attach="attributes-position"
                  count={points.length}
                  array={new Float32Array(points.flatMap((p) => [p.x, p.y, p.z]))}
                  itemSize={3}
                />
              </bufferGeometry>
              <lineBasicMaterial color="#E8A307" transparent opacity={0.5} />
            </line>
          );
        })}

      {/* Atmospheric glow */}
      <Sphere args={[2.15, 48, 48]}>
        <meshStandardMaterial color="#3B82F6" transparent opacity={0.05} side={THREE.BackSide} />
      </Sphere>
    </group>
  );
};

const GlobeSection = () => {
  return (
    <section id="globe" className="py-24 relative overflow-hidden" style={{
      background: "radial-gradient(ellipse at 50% 50%, hsl(217 71% 12%) 0%, hsl(220 50% 5%) 50%, hsl(240 30% 3%) 100%)",
    }}>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-3">Global Presence</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Ventures <span className="text-gradient-gold">Across India</span>
          </h2>
          <p className="text-primary-foreground/40 max-w-md mx-auto text-sm">
            Two ventures, one vision: building technology that empowers communities across every corner of India.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-[400px] md:h-[500px] relative"
        >
          <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }}>
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 5, 10]} intensity={1} color="#3B82F6" />
            <pointLight position={[-10, -5, -10]} intensity={0.5} color="#E8A307" />
            <GlobeWireframe />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.5}
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={(3 * Math.PI) / 4}
            />
          </Canvas>
        </motion.div>

        {/* Legend */}
        <div className="flex justify-center gap-6 mt-4">
          {ventures.map((v) => (
            <div key={v.name} className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: v.color, boxShadow: `0 0 8px ${v.color}80` }} />
              <span className="text-primary-foreground/50 text-xs">{v.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobeSection;
