/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { MeetupEventType } from "../types";

export default function MeetupEventLead({
  event,
}: {
  event: MeetupEventType;
}): JSX.Element {
  return (
    <div className="article-card-right" key={event.id}>
      <div>
        <h2 className="article-title">
          <Link href={`/event/${event.id}`}>
            <a>{event.title}</a>
          </Link>
        </h2>
        <img className="article-image" src={event.imageUrl} alt={event.title} />
        {event.shortDescription && (
          <p className="article-body">{event.shortDescription}</p>
        )}
      </div>
    </div>
  );
}
