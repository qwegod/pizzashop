import { Switch } from "@headlessui/react";
import { useTranslation } from "react-i18next";
import { US, UA } from "country-flag-icons/react/3x2";

function LanguageSwitch() {
  const { i18n } = useTranslation();
  const enabled = i18n.language === "en";
  const handleLangSwitch = () => {
    if (enabled) {
      i18n.changeLanguage("ua");
      setTimeout(() => window.location.reload(), 500)
      
    } else {
      i18n.changeLanguage("en");
      setTimeout(() => window.location.reload(), 500)
    }
  };

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Switch
      checked={enabled}
      onChange={() => handleLangSwitch()}
      className={classNames(
        enabled ? "bg-gray-400" : "bg-yellow-600",
        "relative inline-flex h-[60px] w-[150px] items-center flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out"
      )}
    >
      <span className="sr-only">Use setting</span>
      <span
        className={classNames(
          enabled ? "translate-x-2" : "translate-x-[90px]",
          "pointer-events-none relative inline-block h-[50px] w-[50px] transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
        )}
      >
        <span
          className={classNames(
            enabled
              ? "opacity-0 duration-100 ease-out"
              : "opacity-100 duration-200 ease-in",
            "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
          )}
          aria-hidden="true"
        >
          <UA className="w-[30px]" />
        </span>
        <span
          className={classNames(
            enabled
              ? "opacity-100 duration-200 ease-in"
              : "opacity-0 duration-100 ease-out",
            "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
          )}
          aria-hidden="true"
        >
          <US className="w-[30px]" />
        </span>
      </span>
    </Switch>
  );
}

export default LanguageSwitch;
