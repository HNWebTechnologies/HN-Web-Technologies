import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)] pt-20 pb-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[var(--primary)] rounded-full mix-blend-screen filter blur-[150px] opacity-10"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-9xl font-bold text-white mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Page Not Found</h2>
        <p className="text-[var(--muted-foreground)] text-lg max-w-lg mx-auto mb-10">
          The page you are looking for doesn&apos;t exist or has been moved. 
          Let&apos;s get you back on track.
        </p>
        
        <Link 
          href="/" 
          className="inline-block px-8 py-4 rounded-full bg-[var(--primary)] text-white font-medium hover:scale-105 hover:shadow-[0_0_20px_rgba(0,71,179,0.4)] transition-all duration-300"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
