"use client"
import { useRef, useEffect } from "react";

interface Ripple {
    x: number;
    y: number;
    radius: number;
    alpha: number;
}

export default function WaterRipple() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Resize canvas for HiDPI / full page
        const resizeCanvas = () => {
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();

            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;

            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        let ripples: Ripple[] = [];

        // DRAW LOOP
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ripples.forEach((r, i) => {
                r.radius += 1.5; 
                r.alpha -= 0.006; 

                ctx.beginPath();
                ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(59, 130, 246, ${r.alpha})`; 
                ctx.lineWidth = 1.2;
                ctx.stroke();

                if (r.alpha <= 0) ripples.splice(i, 1);
            });

            requestAnimationFrame(draw);
        };

        draw();

        // GET ACCURATE POSITION
        const getPos = (x: number, y: number) => {
            const rect = canvas.getBoundingClientRect();
            return {
                x: x - rect.left,
                y: y - rect.top,
            };
        };

        // MOUSE HANDLERS
        const handleMouseMove = (e: MouseEvent) => {
            const pos = getPos(e.clientX, e.clientY);
            ripples.push({ x: pos.x, y: pos.y, radius: 0, alpha: 0.20 });
        };

        const handleClick = (e: MouseEvent) => {
            const pos = getPos(e.clientX, e.clientY);
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    ripples.push({
                        x: pos.x + (Math.random() - 0.5) * 25,
                        y: pos.y + (Math.random() - 0.5) * 25,
                        radius: 0,
                        alpha: 0.5,
                    });
                }, i * 100);
            }
        };

        // TOUCH HANDLERS
        const handleTouchMove = (e: TouchEvent) => {
            const touch = e.touches[0];
            if (!touch) return;
            const pos = getPos(touch.clientX, touch.clientY);
            ripples.push({ x: pos.x, y: pos.y, radius: 0, alpha: 0.20 });
        };

        const handleTouchStart = (e: TouchEvent) => {
            const touch = e.touches[0];
            if (!touch) return;
            const pos = getPos(touch.clientX, touch.clientY);
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    ripples.push({
                        x: pos.x + (Math.random() - 0.5) * 25,
                        y: pos.y + (Math.random() - 0.5) * 25,
                        radius: 0,
                        alpha: 0.5,
                    });
                }, i * 100);
            }
        };

        // ADD EVENT LISTENERS
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("click", handleClick);
        window.addEventListener("touchmove", handleTouchMove);
        window.addEventListener("touchstart", handleTouchStart);

        // CLEANUP
        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("click", handleClick);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("touchstart", handleTouchStart);
        };
    }, []);

    return (
        <div
            className="fixed left-0 right-0 bottom-0 pointer-events-none z-0"
            style={{ top: "58px" }}
        >
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none"
            />
        </div>
    );
}
