import  { useEffect, useRef, useState } from 'react';

export default function AnimatedCoinBadge() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let rotation = 0;
    const maxRotation = Math.PI * 2; 


    const createStarPath = (cx: number, cy: number, spikes: number, outerRadius: number, innerRadius: number): Array<{x: number, y: number}> => {
      const points = [];
      const step = Math.PI / spikes;
      
      for (let i = 0; i < 2 * spikes; i++) {
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const angle = i * step - Math.PI / 2;
        points.push({
          x: cx + Math.cos(angle) * radius,
          y: cy + Math.sin(angle) * radius
        });
      }
      return points;
    };

    let animationId: number;

    const drawCoin = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = 22;
      
      
      const scaleX = Math.cos(rotation);
      
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.scale(scaleX, 1);
      
     
      if (Math.abs(scaleX) < 0.5) {
        const edgeWidth = 4;
        const edgeDepth = 3;
        
     
        for (let i = -edgeDepth; i < edgeDepth; i++) {
          const brightness = 1 - Math.abs(i) / edgeDepth * 0.3;
          ctx.fillStyle = `rgb(${180 * brightness}, ${120 * brightness}, 0)`;
          ctx.fillRect(-edgeWidth/2 + i * 0.5, -radius, edgeWidth, radius * 2);
        }
      }
      
     
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, radius);
      gradient.addColorStop(0, '#FFEA00');
      gradient.addColorStop(0.5, '#FFC700');
      gradient.addColorStop(1, '#FFA500');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI * 2);
      ctx.fill();
      
     
      ctx.strokeStyle = '#D49000';
      ctx.lineWidth = 0.6;
      ctx.beginPath();
      ctx.arc(0, 0, radius - 3, 0, Math.PI * 2);
      ctx.stroke();
      
      
      const innerGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, radius - 6);
      innerGradient.addColorStop(0, '#FFE900');
      innerGradient.addColorStop(0.5, '#FFC700');
      innerGradient.addColorStop(1, '#FFA600');
      
      ctx.fillStyle = innerGradient;
      ctx.beginPath();
      ctx.arc(0, 0, radius - 6, 0, Math.PI * 2);
      ctx.fill();
      
      
      const starPoints = createStarPath(0, 0, 5, 13, 6);
      
      
      ctx.fillStyle = 'rgba(204, 112, 0, 0.3)';
      ctx.beginPath();
      ctx.moveTo(starPoints[0].x, starPoints[0].y + 3);
      for (let i = 1; i < starPoints.length; i++) {
        ctx.lineTo(starPoints[i].x, starPoints[i].y + 3);
      }
      ctx.closePath();
      ctx.fill();
      
      
      const starGradient = ctx.createLinearGradient(0, -13, 0, 13);
      starGradient.addColorStop(0, '#FFAD00');
      starGradient.addColorStop(0.5, '#FF8F00');
      starGradient.addColorStop(1, '#FF7100');
      
      ctx.fillStyle = starGradient;
      ctx.beginPath();
      ctx.moveTo(starPoints[0].x, starPoints[0].y);
      for (let i = 1; i < starPoints.length; i++) {
        ctx.lineTo(starPoints[i].x, starPoints[i].y);
      }
      ctx.closePath();
      ctx.fill();
      
      
      const highlightGradient = ctx.createRadialGradient(-8, -8, 0, -8, -8, 11);
      highlightGradient.addColorStop(0, 'rgba(255, 255, 255, 0.6)');
      highlightGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      
      ctx.fillStyle = highlightGradient;
      ctx.beginPath();
      ctx.ellipse(-8, -8, 11, 8, 0, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
      
      
      rotation += 0.05;
      
      
      if (rotation < maxRotation) {
        animationId = requestAnimationFrame(drawCoin);
      } else {
        setHasAnimated(true);
      }
    };

   
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            drawCoin();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      cancelAnimationFrame(animationId);
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div 
      ref={containerRef}
      style={{ background: 'transparent', margin: '0 auto', outline: 'none', overflow: 'hidden', height: '80px', width: '80px' }}
    >
      <canvas
        ref={canvasRef}
        width="80"
        height="80"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}