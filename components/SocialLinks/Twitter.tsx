import { ImTwitter as TwitterIcon } from "react-icons/Im";
import SocialSquare from "./SocialSquare";
const href = "https://twitter.com/roma_j";
export default function Twitter(): JSX.Element {
  return <SocialSquare SocialIcon={TwitterIcon} href={href} />;
}
