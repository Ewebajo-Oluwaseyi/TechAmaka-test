import { gql } from "@apollo/client";

export const GET_EVENT = gql`
query eventById($id: Int!) {
    eventById(id: $id) {
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