// eslint-disable
// this is an auto generated file. This will be overwritten

export const getMoodItem = `query GetMoodItem($id: ID!) {
  getMoodItem(id: $id) {
    id
    date
    note
    mood
  }
}
`;
export const listMoodItems = `query ListMoodItems(
  $filter: ModelMoodItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listMoodItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      date
      note
      mood
    }
    nextToken
  }
}
`;
