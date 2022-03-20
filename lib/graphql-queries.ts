export const MeetupArticleLead = `
fragment MeetupArticleLead on Event{
  id
  title
  dateTime
  shortDescription
  eventUrl
}
`;
export const MeetupArticle = `
fragment MeetupArticle on Event{
  title
  eventUrl
  description
  dateTime
  duration
  host {
    id
    name
  }
  images {
    id
    baseUrl
    preview
  }
  group {
    id
    name
    urlname
  }
  tickets {
    edges {
      node {
        id
        user {
          name
        }
        createdAt
      }
      cursor
    }
  }
}
`;
export const ALL_POSTS_QUERY = `
${MeetupArticleLead}
query ($urlname: String!) {
  allEvents: groupByUrlname(urlname: $urlname) {
    pastEvents(input: {first: 55}, sortOrder:DESC) {
      count
      pageInfo {
        endCursor
        startCursor
      }
      edges {
        node {
    ...MeetupArticleLead
        }
      }
    }
    upcomingEvents(input: {first: 1}) {
      count
      pageInfo {
        endCursor
      }
      edges {
        node {
    ...MeetupArticleLead
        }
      }
    }
  }
}`;

export const LAST_UPCOMING_EVENT_QUERY = `
${MeetupArticle}
query ($urlname: String!) {
  allEvents: groupByUrlname(urlname: $urlname) {
 #   upcomingEvents(input: {first: 1}) {
  pastEvents(input: {first: 1}) {
      count
      pageInfo {
        endCursor
      }
      edges {
        node {
    ...MeetupArticle
        }
      }
    }
  }
}`;

export const EVENT_BY_EVENTID = `
${MeetupArticle}
query($eventId: ID!) {
  event(id: $eventId){
    ...MeetupArticle
  }
}
`;
