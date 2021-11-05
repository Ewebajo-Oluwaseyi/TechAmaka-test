import { gql } from "@apollo/client";

export const GET_EVENTS = gql`
query {
    events {
      id,
      uuid,
      name,
      theme,
      description,
      venue,
      attendance,
      code,
      startDate,
      endDate,
      startTime,
      endTime
      photoUrl
    }
  }
  `