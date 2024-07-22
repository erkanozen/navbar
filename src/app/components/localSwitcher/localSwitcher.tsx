import { ChangeEvent, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import "./localSwitcher.scss";
import Image from "next/image";

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
    <select
      className="language"
      disabled={isPending}
      value={localActive}
      onChange={onSelectChange}
    >
      {localActive === "tr" ? (
        <>
          <option value="tr" disabled hidden>
            Tr
          </option>
          <option value="en">En</option>
        </>
      ) : (
        <>
          <option value="en" disabled hidden>
            En
          </option>
          <option value="tr">Tr</option>
        </>
      )}
    </select>
  );
};

export default LocalSwitcher;
