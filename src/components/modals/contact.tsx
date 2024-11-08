import { HomeIcon, InboxIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { t } from "i18next";

function Contact() {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="p-4 flex flex-col w-[300px] h-max bg-white dark:bg-black rounded-3xl"
    >
      <div className="flex gap-y-5 flex-col">
        <span className="text-[26px] self-center dark:text-white font-bold">{t("contactus")}</span>
        <div className="flex w-max h-[17px] items-center">
          <PhoneIcon className="mr-5 h-[20px] dark:fill-white" />
          <span className="font-medium text-[22px] dark:text-white">+ 1 123 456 7890</span>
        </div>
        <div className="flex w-max h-[17px] items-center">
          <InboxIcon className="mr-5 h-[20px] dark:fill-white" />
          <span className="font-medium text-[22px] dark:text-white">pizza@gmail.com</span>
        </div>
        <div className="flex w-max h-[17px] items-center">
          <HomeIcon className="mr-5 h-[20px] dark:fill-white" />
          <span className="font-medium text-[22px] dark:text-white">St. Fetor 34</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
