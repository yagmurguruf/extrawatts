import gql from "graphql-tag";

export const CARD_QUERY = gql`
  query cardEntities($first:Int){
   cardEntities(orderBy:id,first:$first){
    id
    owner
    background_color
    description
    external_url
    animation_url
    image
    name
    weight
    total {
      id
      total
      sold
    }
    category {
      id
      name
      weight
    }
    category_id
    edition_id
    total_edition
    sold
  }
  categoryEntities{
    id
    name
    weight
  }
}
`;

export const CARD_LENGTH_QUERY = gql`
  query cardEntitiesLength{
   cardEntities{
    id
    owner
    background_color
    description
    external_url
    animation_url
    image
    name
    weight
    total {
      id
      total
      sold
    }
    category {
      id
      name
      weight
    }
    category_id
    edition_id
    total_edition
    sold
  }
}
`;

export const CATEGORY_FILTER_QUERY = gql`
  query cardEntitiesFilterByCategory($category_id:BigInt, $first:Int){
   cardEntities(where: {category_id:$category_id}, orderBy:id, first:$first){
     id
    owner
    background_color
    description
    external_url
    animation_url
    image
    name
    weight
    total {
      id
      total
      sold
    }
    category {
      id
      name
      weight
    }
    category_id
    edition_id
    total_edition
    sold
  }
  categoryEntities{
    id
    name
    weight
  }
}
`;
