import { Copy, Check } from "lucide-react";
import { useState } from "react";

interface CopyButtonProps {
  text: string;
  className?: string;
  showTooltip?: boolean;
}

export const CopyButton = ({ text, className = ""}: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      alert('Failed to copy');
    }
  };

  return (
   
      <button
        onClick={handleCopy}
        className={`absolute right-2.5 top-1/2 -translate-1/2 cursor-pointer z-10 ${className}`}
      >
        {copied ? (
          <Check className="text-green-500 " />
        ) : (
           <Copy className="text-[#9013FE]"/>
        )}
      </button>
      
  );
};