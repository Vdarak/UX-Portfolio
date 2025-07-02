import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiVercel } from "react-icons/si";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { FlowingText } from "@/components/flowing-text";

export default function Footer() {
  return (
    <footer className="py-8 bg-background border-t border-border/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <FaLinkedin className="w-6 h-6" />
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <FaGithub className="w-6 h-6" />
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <FaXTwitter className="w-6 h-6" />
            </Link>
            <Link
              href={siteConfig.links.v0}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <SiVercel className="w-6 h-6" />
            </Link>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">
              Designed in{" "}
              <FlowingText text="v0" className="inline font-bold" />{" "}&{" "}<FlowingText text="Figma" className="inline font-bold" />,{" "}
              built in{" "}
              <FlowingText text="VSCode" className="inline font-bold" /> with a little help from{" "}
              <FlowingText text="AI Agents" className="inline font-bold" />
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Last Updated July 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
