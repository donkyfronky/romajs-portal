import { IconType } from "react-icons/lib";
//#f50030
//#8f001c
export default function SocialSquare({
  SocialIcon,
  className,
  href,
}: {
  SocialIcon: IconType;
  className?: string;
  href?: string;
}): JSX.Element {
  return href ? (
    <a
      rel="noreferrer"
      href={href}
      target={"_blank"}
      className={`${className} p-2 font-semibold text-white inline-flex items-center space-x-2 rounded`}
    >
      <SocialIcon size={56} fill="#8f001c" className="hover:fill-gray-600" />
    </a>
  ) : null;
}
