import { GrGooglePlus as GooglePlusIcon } from "react-icons/gr";
import SocialSquare from "./SocialSquare";
const href = "https://plus.google.com/communities/114324393897443067092";

export default function GooglePlus(): JSX.Element {
  return <SocialSquare SocialIcon={GooglePlusIcon} href={href} />;
}
