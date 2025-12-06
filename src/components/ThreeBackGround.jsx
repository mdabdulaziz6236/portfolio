'use client';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    const particlesGeometry = new THREE.BufferGeometry();
    const posArray = new Float32Array(500 * 3);
    for(let i = 0; i < 500 * 3; i++) posArray[i] = (Math.random() - 0.5) * 20;
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const material = new THREE.PointsMaterial({ size: 0.03, color: '#10b981', transparent: true, opacity: 0.6 });
    const particlesMesh = new THREE.Points(particlesGeometry, material);
    scene.add(particlesMesh);
    camera.position.z = 3;

    let mouseX = 0, mouseY = 0;
    const animateParticles = (event) => { mouseX = event.clientX; mouseY = event.clientY; }
    
    const animate = () => {
      particlesMesh.rotation.y += 0.001;
      particlesMesh.rotation.x += 0.001;
      const targetX = (mouseX / window.innerWidth - 0.5) * 0.2;
      const targetY = (mouseY / window.innerHeight - 0.5) * 0.2;
      particlesMesh.rotation.y += 0.05 * (targetX - particlesMesh.rotation.y);
      particlesMesh.rotation.x += 0.05 * (targetY - particlesMesh.rotation.x);
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();
    
    const handleResize = () => { camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth, window.innerHeight); };
    window.addEventListener('resize', handleResize);
    document.addEventListener('mousemove', animateParticles);
    return () => { 
        window.removeEventListener('resize', handleResize); 
        document.removeEventListener('mousemove', animateParticles);
        if (mountRef.current) mountRef.current.innerHTML = '';
    };
  }, []);

  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10 bg-slate-950" />;
}