import { profile } from "../data/profile";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-sand-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-3">
        <span className="truncate font-heading text-lg font-bold text-ink">
          {profile.name}
        </span>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
