import { ArrowUp } from "lucide-react";
import { Container } from "./Container";
import { profile } from "@/lib/content";

export function Footer() {
  return <footer className="site-footer"><Container><div><p>© {new Date().getFullYear()} {profile.name}<span> · Thoughtfully built.</span></p><a href="#top">Back to top <ArrowUp size={16} /></a></div></Container></footer>;
}
