import { FaFacebook as FacebookIcon } from "react-icons/fa";
import SocialSquare from "./SocialSquare";
const href = "https://www.facebook.com/romajs.org";
export default function Facebook(): JSX.Element {
  return <SocialSquare SocialIcon={FacebookIcon} href={href} />;
}
