import { ChangeEvent, useTransition } from "react";
import "./localSwitcher.scss";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const LocalSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <div className="local-switcher-container">
      <select
        className="language"
        disabled={isPending}
        value={localActive}
        // defaultValue={localActive}
        onChange={onSelectChange}
      >
        {localActive === "tr" ? (
          <>
            <option value="tr" disabled hidden>
              TR
            </option>
            <option value="en">EN</option>
          </>
        ) : (
          <>
            <option value="en" disabled hidden>
              EN
            </option>
            <option value="tr">TR</option>
          </>
        )}
      </select>
    </div>
  );
};

export default LocalSwitcher;
