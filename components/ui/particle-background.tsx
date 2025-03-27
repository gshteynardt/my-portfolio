'use client';

import { useEffect, useRef } from 'react';

interface ParticleType {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    color: string;
    update: () => void;
    draw: () => void;
}

export default function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) {
            return;
        }

        const ctx = canvas.getContext('2d');

        if (!ctx) {
            return;
        }

        let animationFrameId: number;

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        const particlesArray: ParticleType[] = [];
        const numberOfParticles = 100;

        class Particle implements ParticleType {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            color: string;

            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = Math.random() * 1 - 0.5;
                this.speedY = Math.random() * 1 - 0.5;
                this.color = this.getRandomColor();
            }

            getRandomColor(): string {
                const colors = [
                    'rgba(0, 255, 255, 0.5)',
                    'rgba(0, 150, 255, 0.5)',
                    'rgba(100, 100, 255, 0.3)',
                ];
                return colors[Math.floor(Math.random() * colors.length)];
            }

            update(): void {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > canvas!.width) this.x = 0;
                else if (this.x < 0) this.x = canvas!.width;

                if (this.y > canvas!.height) this.y = 0;
                else if (this.y < 0) this.y = canvas!.height;
            }

            draw(): void {
                ctx!.fillStyle = this.color;
                ctx!.beginPath();
                ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx!.fill();
            }
        }

        function init(): void {
            for (let i = 0; i < numberOfParticles; i++) {
                particlesArray.push(new Particle());
            }
        }

        function animate(): void {
            if (!ctx || !canvas) {
                return;
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw grid lines
            ctx.strokeStyle = 'rgba(30, 30, 50, 0.3)';
            ctx.lineWidth = 1;

            const gridSize = 50;
            for (let y = 0; y < canvas.height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }

            for (let x = 0; x < canvas.width; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();
            }

            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
                particlesArray[i].draw();
            }

            connectParticles();

            animationFrameId = requestAnimationFrame(animate);
        }

        function connectParticles(): void {
            if (!ctx) {
                return;
            }

            const maxDistance = 150;

            for (let a = 0; a < particlesArray.length; a++) {
                for (let b = a; b < particlesArray.length; b++) {
                    const dx = particlesArray[a].x - particlesArray[b].x;
                    const dy = particlesArray[a].y - particlesArray[b].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxDistance) {
                        const opacity = 1 - distance / maxDistance;
                        ctx.strokeStyle = `rgba(0, 200, 255, ${opacity * 0.2})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                        ctx.stroke();
                    }
                }
            }
        }

        init();
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 opacity-40"
            style={{
                background: 'linear-gradient(to bottom, #000000, #050a18)',
            }}
        />
    );
}
