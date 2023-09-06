import wsLogo from "/public/icons/WS.svg";
import Image from "next/image";

export default function WhatsappButton() {
  return (
    <div className="fixed bottom-3 right-3 z-50">
      <a
        href="https://wa.me/573016928524"
        target="_blank"
        className="bg-green-500 rounded-full h-[5rem] w-[5rem] flex items-center justify-center"
      >
        <Image
          className="h-[3.5rem] w-[3.5rem] py-1 px-1"
          src={wsLogo}
          alt="Whatsapp logo"
        />
      </a>
    </div>
  );
}
