import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { Suspense, useEffect } from "react";
import { Html } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";


function GLTFModel({ url }) {
  const { scene } = useGLTF(url);

  return <primitive object={scene} scale={0.8} position={[0, -1, 0]} />;
}

function STLModel({ url }) {
  const geometry = useLoader(STLLoader, url);

    useEffect(() => {
    geometry.center();                 // center the model
    geometry.computeVertexNormals();   // better lighting
  }, [geometry]);


  return (
    <mesh geometry={geometry} scale={0.08}>
      <meshStandardMaterial color="#ff8c42" metalness={0.2} roughness={0.6} />
    </mesh>
  );
}

function OBJModel({ url }) {
  const obj = useLoader(OBJLoader, url);

  return <primitive object={obj} scale={0.8} position={[0, -1, 0]} />;
}

function Model({ url }) {
  const ext = url.split(".").pop().toLowerCase();

  if (ext === "gltf" || ext === "glb") {
    return <GLTFModel url={url} />;
  }

  if (ext === "stl") {
    return <STLModel url={url} />;
  }

  if (ext === "obj") {
    return <OBJModel url={url} />;
  }

  return null;
}


export default function ModelViewer({ model, fillContainer }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 15],  fov: 60 }}
      style={
        fillContainer
          ? { width: "100%", height: "100%", minHeight: 0, display: "block" }
          : { width: "100%", height: "clamp(220px, 52vw, 300px)" }
      }
      gl={{ preserveDrawingBuffer: true }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 3, 3]} intensity={1} />
      <Suspense fallback={
        <Html center>
            <div style={{ color: "black", fontSize: "14px" }}>
            Loading 3D...
            </div>
        </Html>
        }>
        {model && <Model url={model} />}
        <Environment preset="studio" />
      </Suspense>
      <OrbitControls enableZoom  minDistance={3} maxDistance={10} autoRotate autoRotateSpeed={1} />
    </Canvas>
  );
}