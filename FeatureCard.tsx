import Image from "next/image";

export default function FeatureCard({ src, title, desc }:{ src:string; title:string; desc:string; }) {
  return (
    <div className="card max-w-xs text-center shadow-lg">
      <div className="mx-auto mb-3">
        <Image src={src} alt={title} width={80} height={80} />
      </div>
      <h3 className="text-lg font-bold text-shahbaz-gold">{title}</h3>
      <p className="text-white/90 mt-2">{desc}</p>
    </div>
  );
}
