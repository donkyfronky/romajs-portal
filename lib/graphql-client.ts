import { MeetupEventType } from "../types";
import {
  EVENT_BY_EVENTID,
  LAST_MEETUP_COUNT,
  LAST_UPCOMING_EVENT_QUERY,
  PAST_EVENT_QUERY,
} from "./graphql-queries";
import nodeFileCache from "node-file-cache";
import { env } from "process";

const cache = nodeFileCache.create();

export async function GraphQLClient<T>(
  query: string,
  variables: { [key: string]: unknown }
): Promise<T> {
  const finalQuery = JSON.stringify({
    query,
    variables,
  });

  const res = await fetch(env.MEETUP_GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: finalQuery,
  });
  const json = await res.json();

  if (json.errors) {
    // eslint-disable-next-line no-console
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

export async function cacheManager<T>(
  key: string,
  cb: () => Promise<T>
): Promise<T> {
  if (env.CACHE_ENABLED === "0") {
    return cb();
  }

  const value = cache.get(key);
  if (value == undefined) {
    const result = await cb();
    cache.set(key, result);
    return result;
  }
  return value;
}

export async function cachedGetMeetupsCount(): Promise<number> {
  return cacheManager("mykey", getMeetupsCount);
}
export async function getMeetupsCount(): Promise<number> {
  const response = await GraphQLClient<{
    groupByUrlname: { pastEvents: { count: number } };
  }>(LAST_MEETUP_COUNT, {
    urlname: env.MEETUP_GROUP_ID,
  });
  const {
    groupByUrlname: {
      pastEvents: { count },
    },
  } = response;
  return count;
}
export async function getLastUpcomingEvent(): Promise<MeetupEventType> {
  const response = await GraphQLClient<{
    groupByUrlname: { upcomingEvents: { edges: { node: MeetupEventType }[] } };
  }>(LAST_UPCOMING_EVENT_QUERY, {
    urlname: env.MEETUP_GROUP_ID,
  });
  const {
    groupByUrlname: {
      upcomingEvents: { edges },
    },
  } = response;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [last, ...others] = edges;
  const { node: event } = last || { node: null };
  return event;
}

export async function cachedGetAllPastEvents(): Promise<MeetupEventType[]> {
  const allEvent = await cacheManager("tutti", getAllPastEvents);
  allEvent.map((event) => cache.set(event.id, event));
  return allEvent;
}

export async function getAllPastEvents(): Promise<MeetupEventType[]> {
  const itemsNum = await cachedGetMeetupsCount();
  const response = await GraphQLClient<{
    groupByUrlname: { pastEvents: { edges: { node: MeetupEventType }[] } };
  }>(PAST_EVENT_QUERY, {
    urlname: env.MEETUP_GROUP_ID,
    itemsNum,
  });
  const {
    groupByUrlname: {
      pastEvents: { edges },
    },
  } = response;

  return edges.map((eventElement) => ({
    ...eventElement.node,
    id: eventElement.node.id.replace("!chp", ""),
  }));
}

export async function cachedGetEvent(
  eventID: string
): Promise<MeetupEventType> {
  return cacheManager(eventID, () => getEvent(eventID));
}
export async function getEvent(eventID: string): Promise<MeetupEventType> {
  const response = await GraphQLClient<{ event: MeetupEventType }>(
    EVENT_BY_EVENTID,
    {
      eventId: eventID,
    }
  );
  const { event } = response;
  return event;
}
