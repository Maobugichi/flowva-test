import { useEffect, useRef } from 'react';
import { Modal } from 'antd';
import confetti from 'canvas-confetti';
import { CircleCheckBig, GemIcon, Sparkles, Target, X } from 'lucide-react';

interface ConfettiModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  children?: React.ReactNode;
  confettiConfig?: 'default' | 'stars' | 'continuous' | 'burst';
}

export const ConfettiModal = ({
  isOpen,
  onClose,
  title = '🎉 Congratulations!',
  message = 'You did it!',
  children,
  confettiConfig = 'default'
}: ConfettiModalProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const confettiInstanceRef = useRef<confetti.CreateTypes | null>(null);

  useEffect(() => {
    if (isOpen && canvasRef.current) {
      confettiInstanceRef.current = confetti.create(canvasRef.current, {
        resize: true,
        useWorker: true
      });
      
      const timeout = setTimeout(() => {
        triggerConfetti(confettiConfig);
      }, 100);
      
      return () => {
        clearTimeout(timeout);
        confettiInstanceRef.current?.reset();
      };
    }
  }, [isOpen, confettiConfig]);

  const triggerConfetti = (type: string) => {
    if (!confettiInstanceRef.current) return;

    switch (type) {
      case 'stars':
        confettiStars();
        break;
      case 'continuous':
        confettiContinuous();
        break;
      case 'burst':
        confettiBurst();
        break;
      default:
        confettiDefault();
    }
  };

  const confettiDefault = () => {
    if (!confettiInstanceRef.current) return;
    
    const count = 200;
    const defaults = {
      origin: { y: 0.7, x: 0.5 },
      colors: ['#9013FE', '#E490E6', '#70D6FF', '#FFD700', '#FF69B4', '#00CED1'],
      gravity: 1,
      ticks: 400,
      decay: 0.96,
      drift: 0
    };

    confettiInstanceRef.current({
      ...defaults,
      particleCount: count * 0.4,
      spread: 100,
      startVelocity: 50,
      scalar: 1.2
    });

    setTimeout(() => {
      confettiInstanceRef.current?.({
        ...defaults,
        particleCount: count * 0.3,
        spread: 80,
        startVelocity: 40,
        scalar: 0.9
      });
    }, 100);

    setTimeout(() => {
      confettiInstanceRef.current?.({
        ...defaults,
        particleCount: count * 0.15,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.3 },
        startVelocity: 45
      });
      
      confettiInstanceRef.current?.({
        ...defaults,
        particleCount: count * 0.15,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.3 },
        startVelocity: 45
      });
    }, 200);
  };

  const confettiStars = () => {
    if (!confettiInstanceRef.current) return;

    const defaults = {
      spread: 360,
      ticks: 300,
      gravity: 1,
      decay: 0.96,
      startVelocity: 35,
      colors: ['#9013FE', '#E490E6', '#70D6FF', '#FFD700', '#FF69B4']
    };

    confettiInstanceRef.current({
      ...defaults,
      particleCount: 60,
      scalar: 1.5,
      shapes: ['star'],
      origin: { y: 0.2, x: 0.5 }
    });

    setTimeout(() => {
      confettiInstanceRef.current?.({
        ...defaults,
        particleCount: 40,
        scalar: 1,
        shapes: ['star'],
        origin: { y: 0.2, x: 0.5 }
      });
    }, 100);

    setTimeout(() => {
      confettiInstanceRef.current?.({
        ...defaults,
        particleCount: 30,
        scalar: 0.75,
        shapes: ['circle'],
        origin: { y: 0.2, x: 0.5 }
      });
    }, 200);
  };

  const confettiContinuous = () => {
    if (!confettiInstanceRef.current) return;

    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const colors1 = ['#9013FE', '#E490E6', '#70D6FF'];
    const colors2 = ['#FFD700', '#FF69B4', '#00CED1'];

    const frame = () => {
      if (!confettiInstanceRef.current) return;

      confettiInstanceRef.current({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.5 },
        colors: colors1,
        startVelocity: 35,
        gravity: 1,
        scalar: 1.2,
        ticks: 300,
        decay: 0.96
      });

      confettiInstanceRef.current({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.5 },
        colors: colors2,
        startVelocity: 35,
        gravity: 1,
        scalar: 1.2,
        ticks: 300,
        decay: 0.96
      });

      if (Date.now() < animationEnd) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  };

  const confettiBurst = () => {
    if (!confettiInstanceRef.current) return;

    const count = 250;
    const defaults = {
      origin: { y: 0.7, x: 0.5 },
      gravity: 1,
      ticks: 300,
      decay: 0.96
    };

    const fire = (particleRatio: number, opts: any) => {
      confettiInstanceRef.current?.({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    };

    fire(0.3, {
      spread: 26,
      startVelocity: 55,
      scalar: 1.4,
      colors: ['#9013FE', '#E490E6']
    });

    setTimeout(() => {
      fire(0.25, {
        spread: 60,
        startVelocity: 45,
        scalar: 1.2,
        colors: ['#70D6FF', '#FFD700']
      });
    }, 50);

    setTimeout(() => {
      fire(0.35, {
        spread: 100,
        startVelocity: 35,
        scalar: 1,
        colors: ['#FF69B4', '#00CED1']
      });
    }, 100);

    setTimeout(() => {
      fire(0.1, {
        spread: 120,
        startVelocity: 30,
        scalar: 1.5,
        colors: ['#9013FE', '#FFD700']
      });
    }, 150);
  };

  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      centered
      width={450}
      closeIcon={<X className="h-5 w-5 text-gray-600" />}
      styles={{
        body: { padding: 0 }
      }}
    >
      <div className="relative overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
        />

        <div className="relative py-4 text-center z-0 grid place-items-center">
          <CircleCheckBig className='text-green-400 w-72 h-32'/>
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            {title}
          </h2>
          
          {children || (
            <>
              <p className="text-4xl font-semibold text-gray-600 mb-6">
                {message}
              </p>
              <span className='flex gap-3'>
                <Sparkles className="h-5 w-5 text-yellow-400" />
                <GemIcon className="h-5 w-5 text-cyan-400" />
                <Target className="h-5 w-5 text-red-500" />
              </span>
              <p className="mt-4 text-gray-600">
                You have claimed your daily points. Come back tomorrow for more!
              </p>
            </>
          )}
        </div>
      </div>
    </Modal>
  );
};