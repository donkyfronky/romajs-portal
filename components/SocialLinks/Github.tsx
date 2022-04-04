import { FaGithub as GithubIcon } from "react-icons/fa";
import SocialSquare from "./SocialSquare";
const href = "https://github.com/Roma-JS";

export default function Github(): JSX.Element {
  return <SocialSquare SocialIcon={GithubIcon} href={href} />;
}
