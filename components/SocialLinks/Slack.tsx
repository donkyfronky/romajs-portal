import { FaSlackHash as SlackIcon } from "react-icons/fa";
import SocialSquare from "./SocialSquare";
const href = "https://romajs.herokuapp.com/";

export default function Slack(): JSX.Element {
  return <SocialSquare SocialIcon={SlackIcon} href={href} />;
}
