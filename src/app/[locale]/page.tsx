import { useTranslations } from "next-intl";
import HomePage from "../home/page";

export default function Home() {
  const t = useTranslations("Navbar");
  return <HomePage />;
}
