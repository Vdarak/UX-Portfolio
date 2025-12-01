import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiVercel } from "react-icons/si";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 bg-background border-t border-border">
      {/* Accent line at top */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-cyber-yellow to-transparent mb-8" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-cyber-yellow transition-colors duration-300"
            >
              <FaLinkedin className="w-5 h-5" />
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-cyber-yellow transition-colors duration-300"
            >
              <FaGithub className="w-5 h-5" />
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-cyber-yellow transition-colors duration-300"
            >
              <FaXTwitter className="w-5 h-5" />
            </Link>
            <Link
              href={siteConfig.links.v0}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-cyber-yellow transition-colors duration-300"
            >
              <SiVercel className="w-5 h-5" />
            </Link>
          </div>
          
          {/* Tech Info */}
          <div className="text-center md:text-right">
            <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
              Designed in{" "}
              <span className="text-cyber-yellow font-semibold">Figma</span>
              <span className="mx-1">{"//"}</span>
              Built with{" "}
              <span className="text-cyber-yellow font-semibold">Next.js</span>
            </p>
            <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground/60 mt-1">
              SYS.UPDATE: AUG 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
