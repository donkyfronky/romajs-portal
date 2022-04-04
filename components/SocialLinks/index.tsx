import Facebook from "./Facebook";
import Github from "./Github";
import GooglePlus from "./GooglePlus";
import Slack from "./Slack";
import Twitter from "./Twitter";
import Youtube from "./Youtube";

export default function SocialLinks(): JSX.Element {
  return (
    <div className="container max-w-screen-lg mx-auto">
      <div>
        <div className="flex flex-wrap justify-center gap-2">
          <Facebook />
          <Twitter />
          <Youtube />
          <Slack />
          <Github />
          <GooglePlus />
        </div>
      </div>
    </div>
  );
}
