import { FaYoutube as YoutubeIcon } from "react-icons/fa";
import SocialSquare from "./SocialSquare";
const href = "https://www.youtube.com/channel/UCFm8OPi5USbFybw9SaTLxeA";

export default function Youtube(): JSX.Element {
  return <SocialSquare SocialIcon={YoutubeIcon} href={href} />;
}
