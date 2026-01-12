import { useLocation } from "react-router";
const AnimatedBackground = () => {
    const location = useLocation();

  const limit = location.pathname === "/" ? 90 : 20;
    return (
        <div className="absolute inset-0 overflow-hidden gradient-bg z-0">
            {/* Animated gradient overlay */}
            <div
                className="absolute inset-0 opacity-50 animate-gradient-shift"
                style={{
                    background: 'linear-gradient(45deg, hsl(270 70% 60% / 0.1), hsl(185 80% 50% / 0.1), hsl(320 70% 55% / 0.1), hsl(270 70% 60% / 0.1))',
                    backgroundSize: '400% 400%',
                }}
            />

           
            {/* Large floating orbs */}
            <div
                className="absolute w-[500px] h-[500px] rounded-full animate-float opacity-20 blur-3xl"
                style={{
                    background: 'radial-gradient(circle, hsl(270 80% 65% / 0.8), transparent 70%)',
                    top: '10%',
                    left: '10%',
                }}
            />

            <div
                className="absolute w-[400px] h-[400px] rounded-full animate-float-delayed opacity-25 blur-3xl"
                style={{
                    background: 'radial-gradient(circle, hsl(185 90% 55% / 0.6), transparent 70%)',
                    top: '50%',
                    right: '5%',
                }}
            />

            <div
                className="absolute w-[350px] h-[350px] rounded-full animate-float-slow opacity-20 blur-3xl"
                style={{
                    background: 'radial-gradient(circle, hsl(320 75% 60% / 0.7), transparent 70%)',
                    bottom: '10%',
                    left: '30%',
                }}
            />

            {/* Smaller accent orbs */}
            <div
                className="absolute w-[200px] h-[200px] rounded-full animate-pulse-glow blur-2xl"
                style={{
                    background: 'radial-gradient(circle, hsl(270 80% 65% / 0.5), transparent 60%)',
                    top: '30%',
                    right: '30%',
                }}
            />

            <div
                className="absolute w-[150px] h-[150px] rounded-full animate-float blur-2xl"
                style={{
                    background: 'radial-gradient(circle, hsl(185 90% 55% / 0.4), transparent 60%)',
                    bottom: '30%',
                    left: '15%',
                }}
            />

            {/* Grid overlay for tech feel */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
            linear-gradient(hsl(185 80% 50% / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(185 80% 50% / 0.3) 1px, transparent 1px)
          `,
                    backgroundSize: '50px 50px',
                }}
            />

            {/* Floating particles */}
            {[...Array(limit)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-4 h-4 rounded-full animate-float"
                    style={{
                        background: i % 3 === 0
                            ? 'hsl(270 80% 65%)'
                            : i % 3 === 1
                                ? 'hsl(185 90% 55%)'
                                : 'hsl(320 75% 60%)',
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        opacity: 0.3 + Math.random() * 0.4,
                        
                        animationDuration: `${2 + Math.random() * 3}s`,
                    }}
                />
            ))}

            {/* Gradient lines */}
            <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{
                    background: 'linear-gradient(90deg, transparent, hsl(320 70% 55%), hsl(270 70% 60%), transparent)',
                }}
            />

            <div
                className="absolute bottom-0 left-0 right-0 h-px opacity-30"
                style={{
                    background: 'linear-gradient(90deg, transparent, hsl(185 80% 50%), transparent)',
                }}
            />
        </div>
    );
};

export default AnimatedBackground;
