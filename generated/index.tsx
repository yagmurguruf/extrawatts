// THIS IS A GENERATED FILE, use `yarn codegen` to regenerate
/* tslint:disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};




export type ApprovalEntity = {
  __typename?: 'ApprovalEntity';
  id: Scalars['ID'];
  count: Scalars['BigInt'];
  account: Scalars['Bytes'];
  operator: Scalars['Bytes'];
};

export type ApprovalEntity_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  count?: Maybe<Scalars['BigInt']>;
  count_not?: Maybe<Scalars['BigInt']>;
  count_gt?: Maybe<Scalars['BigInt']>;
  count_lt?: Maybe<Scalars['BigInt']>;
  count_gte?: Maybe<Scalars['BigInt']>;
  count_lte?: Maybe<Scalars['BigInt']>;
  count_in?: Maybe<Array<Scalars['BigInt']>>;
  count_not_in?: Maybe<Array<Scalars['BigInt']>>;
  account?: Maybe<Scalars['Bytes']>;
  account_not?: Maybe<Scalars['Bytes']>;
  account_in?: Maybe<Array<Scalars['Bytes']>>;
  account_not_in?: Maybe<Array<Scalars['Bytes']>>;
  account_contains?: Maybe<Scalars['Bytes']>;
  account_not_contains?: Maybe<Scalars['Bytes']>;
  operator?: Maybe<Scalars['Bytes']>;
  operator_not?: Maybe<Scalars['Bytes']>;
  operator_in?: Maybe<Array<Scalars['Bytes']>>;
  operator_not_in?: Maybe<Array<Scalars['Bytes']>>;
  operator_contains?: Maybe<Scalars['Bytes']>;
  operator_not_contains?: Maybe<Scalars['Bytes']>;
};

export enum ApprovalEntity_OrderBy {
  Id = 'id',
  Count = 'count',
  Account = 'account',
  Operator = 'operator'
}



export type Block_Height = {
  hash?: Maybe<Scalars['Bytes']>;
  number?: Maybe<Scalars['Int']>;
  number_gte?: Maybe<Scalars['Int']>;
};


export type CardEntity = {
  __typename?: 'CardEntity';
  id: Scalars['ID'];
  owner?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  external_url?: Maybe<Scalars['String']>;
  animation_url?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['BigInt']>;
  total?: Maybe<TotalEntity>;
  category?: Maybe<CategoryEntity>;
  category_id?: Maybe<Scalars['BigInt']>;
  edition_id?: Maybe<Scalars['BigInt']>;
  total_edition?: Maybe<Scalars['BigInt']>;
  sold?: Maybe<Scalars['Boolean']>;
};

export type CardEntity_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  owner?: Maybe<Scalars['String']>;
  owner_not?: Maybe<Scalars['String']>;
  owner_gt?: Maybe<Scalars['String']>;
  owner_lt?: Maybe<Scalars['String']>;
  owner_gte?: Maybe<Scalars['String']>;
  owner_lte?: Maybe<Scalars['String']>;
  owner_in?: Maybe<Array<Scalars['String']>>;
  owner_not_in?: Maybe<Array<Scalars['String']>>;
  owner_contains?: Maybe<Scalars['String']>;
  owner_not_contains?: Maybe<Scalars['String']>;
  owner_starts_with?: Maybe<Scalars['String']>;
  owner_not_starts_with?: Maybe<Scalars['String']>;
  owner_ends_with?: Maybe<Scalars['String']>;
  owner_not_ends_with?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  background_color_not?: Maybe<Scalars['String']>;
  background_color_gt?: Maybe<Scalars['String']>;
  background_color_lt?: Maybe<Scalars['String']>;
  background_color_gte?: Maybe<Scalars['String']>;
  background_color_lte?: Maybe<Scalars['String']>;
  background_color_in?: Maybe<Array<Scalars['String']>>;
  background_color_not_in?: Maybe<Array<Scalars['String']>>;
  background_color_contains?: Maybe<Scalars['String']>;
  background_color_not_contains?: Maybe<Scalars['String']>;
  background_color_starts_with?: Maybe<Scalars['String']>;
  background_color_not_starts_with?: Maybe<Scalars['String']>;
  background_color_ends_with?: Maybe<Scalars['String']>;
  background_color_not_ends_with?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_gt?: Maybe<Scalars['String']>;
  description_lt?: Maybe<Scalars['String']>;
  description_gte?: Maybe<Scalars['String']>;
  description_lte?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Scalars['String']>>;
  description_not_in?: Maybe<Array<Scalars['String']>>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  description_starts_with?: Maybe<Scalars['String']>;
  description_not_starts_with?: Maybe<Scalars['String']>;
  description_ends_with?: Maybe<Scalars['String']>;
  description_not_ends_with?: Maybe<Scalars['String']>;
  external_url?: Maybe<Scalars['String']>;
  external_url_not?: Maybe<Scalars['String']>;
  external_url_gt?: Maybe<Scalars['String']>;
  external_url_lt?: Maybe<Scalars['String']>;
  external_url_gte?: Maybe<Scalars['String']>;
  external_url_lte?: Maybe<Scalars['String']>;
  external_url_in?: Maybe<Array<Scalars['String']>>;
  external_url_not_in?: Maybe<Array<Scalars['String']>>;
  external_url_contains?: Maybe<Scalars['String']>;
  external_url_not_contains?: Maybe<Scalars['String']>;
  external_url_starts_with?: Maybe<Scalars['String']>;
  external_url_not_starts_with?: Maybe<Scalars['String']>;
  external_url_ends_with?: Maybe<Scalars['String']>;
  external_url_not_ends_with?: Maybe<Scalars['String']>;
  animation_url?: Maybe<Scalars['String']>;
  animation_url_not?: Maybe<Scalars['String']>;
  animation_url_gt?: Maybe<Scalars['String']>;
  animation_url_lt?: Maybe<Scalars['String']>;
  animation_url_gte?: Maybe<Scalars['String']>;
  animation_url_lte?: Maybe<Scalars['String']>;
  animation_url_in?: Maybe<Array<Scalars['String']>>;
  animation_url_not_in?: Maybe<Array<Scalars['String']>>;
  animation_url_contains?: Maybe<Scalars['String']>;
  animation_url_not_contains?: Maybe<Scalars['String']>;
  animation_url_starts_with?: Maybe<Scalars['String']>;
  animation_url_not_starts_with?: Maybe<Scalars['String']>;
  animation_url_ends_with?: Maybe<Scalars['String']>;
  animation_url_not_ends_with?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  image_not?: Maybe<Scalars['String']>;
  image_gt?: Maybe<Scalars['String']>;
  image_lt?: Maybe<Scalars['String']>;
  image_gte?: Maybe<Scalars['String']>;
  image_lte?: Maybe<Scalars['String']>;
  image_in?: Maybe<Array<Scalars['String']>>;
  image_not_in?: Maybe<Array<Scalars['String']>>;
  image_contains?: Maybe<Scalars['String']>;
  image_not_contains?: Maybe<Scalars['String']>;
  image_starts_with?: Maybe<Scalars['String']>;
  image_not_starts_with?: Maybe<Scalars['String']>;
  image_ends_with?: Maybe<Scalars['String']>;
  image_not_ends_with?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_lt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['BigInt']>;
  weight_not?: Maybe<Scalars['BigInt']>;
  weight_gt?: Maybe<Scalars['BigInt']>;
  weight_lt?: Maybe<Scalars['BigInt']>;
  weight_gte?: Maybe<Scalars['BigInt']>;
  weight_lte?: Maybe<Scalars['BigInt']>;
  weight_in?: Maybe<Array<Scalars['BigInt']>>;
  weight_not_in?: Maybe<Array<Scalars['BigInt']>>;
  total?: Maybe<Scalars['String']>;
  total_not?: Maybe<Scalars['String']>;
  total_gt?: Maybe<Scalars['String']>;
  total_lt?: Maybe<Scalars['String']>;
  total_gte?: Maybe<Scalars['String']>;
  total_lte?: Maybe<Scalars['String']>;
  total_in?: Maybe<Array<Scalars['String']>>;
  total_not_in?: Maybe<Array<Scalars['String']>>;
  total_contains?: Maybe<Scalars['String']>;
  total_not_contains?: Maybe<Scalars['String']>;
  total_starts_with?: Maybe<Scalars['String']>;
  total_not_starts_with?: Maybe<Scalars['String']>;
  total_ends_with?: Maybe<Scalars['String']>;
  total_not_ends_with?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  category_not?: Maybe<Scalars['String']>;
  category_gt?: Maybe<Scalars['String']>;
  category_lt?: Maybe<Scalars['String']>;
  category_gte?: Maybe<Scalars['String']>;
  category_lte?: Maybe<Scalars['String']>;
  category_in?: Maybe<Array<Scalars['String']>>;
  category_not_in?: Maybe<Array<Scalars['String']>>;
  category_contains?: Maybe<Scalars['String']>;
  category_not_contains?: Maybe<Scalars['String']>;
  category_starts_with?: Maybe<Scalars['String']>;
  category_not_starts_with?: Maybe<Scalars['String']>;
  category_ends_with?: Maybe<Scalars['String']>;
  category_not_ends_with?: Maybe<Scalars['String']>;
  category_id?: Maybe<Scalars['BigInt']>;
  category_id_not?: Maybe<Scalars['BigInt']>;
  category_id_gt?: Maybe<Scalars['BigInt']>;
  category_id_lt?: Maybe<Scalars['BigInt']>;
  category_id_gte?: Maybe<Scalars['BigInt']>;
  category_id_lte?: Maybe<Scalars['BigInt']>;
  category_id_in?: Maybe<Array<Scalars['BigInt']>>;
  category_id_not_in?: Maybe<Array<Scalars['BigInt']>>;
  edition_id?: Maybe<Scalars['BigInt']>;
  edition_id_not?: Maybe<Scalars['BigInt']>;
  edition_id_gt?: Maybe<Scalars['BigInt']>;
  edition_id_lt?: Maybe<Scalars['BigInt']>;
  edition_id_gte?: Maybe<Scalars['BigInt']>;
  edition_id_lte?: Maybe<Scalars['BigInt']>;
  edition_id_in?: Maybe<Array<Scalars['BigInt']>>;
  edition_id_not_in?: Maybe<Array<Scalars['BigInt']>>;
  total_edition?: Maybe<Scalars['BigInt']>;
  total_edition_not?: Maybe<Scalars['BigInt']>;
  total_edition_gt?: Maybe<Scalars['BigInt']>;
  total_edition_lt?: Maybe<Scalars['BigInt']>;
  total_edition_gte?: Maybe<Scalars['BigInt']>;
  total_edition_lte?: Maybe<Scalars['BigInt']>;
  total_edition_in?: Maybe<Array<Scalars['BigInt']>>;
  total_edition_not_in?: Maybe<Array<Scalars['BigInt']>>;
  sold?: Maybe<Scalars['Boolean']>;
  sold_not?: Maybe<Scalars['Boolean']>;
  sold_in?: Maybe<Array<Scalars['Boolean']>>;
  sold_not_in?: Maybe<Array<Scalars['Boolean']>>;
};

export enum CardEntity_OrderBy {
  Id = 'id',
  Owner = 'owner',
  BackgroundColor = 'background_color',
  Description = 'description',
  ExternalUrl = 'external_url',
  AnimationUrl = 'animation_url',
  Image = 'image',
  Name = 'name',
  Weight = 'weight',
  Total = 'total',
  Category = 'category',
  CategoryId = 'category_id',
  EditionId = 'edition_id',
  TotalEdition = 'total_edition',
  Sold = 'sold'
}

export type CategoryEntity = {
  __typename?: 'CategoryEntity';
  id: Scalars['ID'];
  name: Scalars['String'];
  weight: Scalars['BigInt'];
};

export type CategoryEntity_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_lt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['BigInt']>;
  weight_not?: Maybe<Scalars['BigInt']>;
  weight_gt?: Maybe<Scalars['BigInt']>;
  weight_lt?: Maybe<Scalars['BigInt']>;
  weight_gte?: Maybe<Scalars['BigInt']>;
  weight_lte?: Maybe<Scalars['BigInt']>;
  weight_in?: Maybe<Array<Scalars['BigInt']>>;
  weight_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum CategoryEntity_OrderBy {
  Id = 'id',
  Name = 'name',
  Weight = 'weight'
}

export type HistoryEntity = {
  __typename?: 'HistoryEntity';
  id: Scalars['ID'];
  operator: Scalars['String'];
  from: Scalars['String'];
  to: Scalars['String'];
  tokenId: Scalars['String'];
  blockNumber: Scalars['BigInt'];
};

export type HistoryEntity_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  operator?: Maybe<Scalars['String']>;
  operator_not?: Maybe<Scalars['String']>;
  operator_gt?: Maybe<Scalars['String']>;
  operator_lt?: Maybe<Scalars['String']>;
  operator_gte?: Maybe<Scalars['String']>;
  operator_lte?: Maybe<Scalars['String']>;
  operator_in?: Maybe<Array<Scalars['String']>>;
  operator_not_in?: Maybe<Array<Scalars['String']>>;
  operator_contains?: Maybe<Scalars['String']>;
  operator_not_contains?: Maybe<Scalars['String']>;
  operator_starts_with?: Maybe<Scalars['String']>;
  operator_not_starts_with?: Maybe<Scalars['String']>;
  operator_ends_with?: Maybe<Scalars['String']>;
  operator_not_ends_with?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  from_not?: Maybe<Scalars['String']>;
  from_gt?: Maybe<Scalars['String']>;
  from_lt?: Maybe<Scalars['String']>;
  from_gte?: Maybe<Scalars['String']>;
  from_lte?: Maybe<Scalars['String']>;
  from_in?: Maybe<Array<Scalars['String']>>;
  from_not_in?: Maybe<Array<Scalars['String']>>;
  from_contains?: Maybe<Scalars['String']>;
  from_not_contains?: Maybe<Scalars['String']>;
  from_starts_with?: Maybe<Scalars['String']>;
  from_not_starts_with?: Maybe<Scalars['String']>;
  from_ends_with?: Maybe<Scalars['String']>;
  from_not_ends_with?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  to_not?: Maybe<Scalars['String']>;
  to_gt?: Maybe<Scalars['String']>;
  to_lt?: Maybe<Scalars['String']>;
  to_gte?: Maybe<Scalars['String']>;
  to_lte?: Maybe<Scalars['String']>;
  to_in?: Maybe<Array<Scalars['String']>>;
  to_not_in?: Maybe<Array<Scalars['String']>>;
  to_contains?: Maybe<Scalars['String']>;
  to_not_contains?: Maybe<Scalars['String']>;
  to_starts_with?: Maybe<Scalars['String']>;
  to_not_starts_with?: Maybe<Scalars['String']>;
  to_ends_with?: Maybe<Scalars['String']>;
  to_not_ends_with?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
  tokenId_not?: Maybe<Scalars['String']>;
  tokenId_gt?: Maybe<Scalars['String']>;
  tokenId_lt?: Maybe<Scalars['String']>;
  tokenId_gte?: Maybe<Scalars['String']>;
  tokenId_lte?: Maybe<Scalars['String']>;
  tokenId_in?: Maybe<Array<Scalars['String']>>;
  tokenId_not_in?: Maybe<Array<Scalars['String']>>;
  tokenId_contains?: Maybe<Scalars['String']>;
  tokenId_not_contains?: Maybe<Scalars['String']>;
  tokenId_starts_with?: Maybe<Scalars['String']>;
  tokenId_not_starts_with?: Maybe<Scalars['String']>;
  tokenId_ends_with?: Maybe<Scalars['String']>;
  tokenId_not_ends_with?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['BigInt']>;
  blockNumber_not?: Maybe<Scalars['BigInt']>;
  blockNumber_gt?: Maybe<Scalars['BigInt']>;
  blockNumber_lt?: Maybe<Scalars['BigInt']>;
  blockNumber_gte?: Maybe<Scalars['BigInt']>;
  blockNumber_lte?: Maybe<Scalars['BigInt']>;
  blockNumber_in?: Maybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum HistoryEntity_OrderBy {
  Id = 'id',
  Operator = 'operator',
  From = 'from',
  To = 'to',
  TokenId = 'tokenId',
  BlockNumber = 'blockNumber'
}

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  approvalEntity?: Maybe<ApprovalEntity>;
  approvalEntities: Array<ApprovalEntity>;
  cardEntity?: Maybe<CardEntity>;
  cardEntities: Array<CardEntity>;
  historyEntity?: Maybe<HistoryEntity>;
  historyEntities: Array<HistoryEntity>;
  categoryEntity?: Maybe<CategoryEntity>;
  categoryEntities: Array<CategoryEntity>;
  statisticsEntity?: Maybe<StatisticsEntity>;
  statisticsEntities: Array<StatisticsEntity>;
  totalEntity?: Maybe<TotalEntity>;
  totalEntities: Array<TotalEntity>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryApprovalEntityArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryApprovalEntitiesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ApprovalEntity_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ApprovalEntity_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCardEntityArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCardEntitiesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CardEntity_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<CardEntity_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryHistoryEntityArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryHistoryEntitiesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<HistoryEntity_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<HistoryEntity_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCategoryEntityArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCategoryEntitiesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CategoryEntity_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<CategoryEntity_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStatisticsEntityArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStatisticsEntitiesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<StatisticsEntity_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<StatisticsEntity_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTotalEntityArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTotalEntitiesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TotalEntity_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TotalEntity_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_MetaArgs = {
  block?: Maybe<Block_Height>;
};

export type StatisticsEntity = {
  __typename?: 'StatisticsEntity';
  id: Scalars['ID'];
  totalWeight?: Maybe<Scalars['BigInt']>;
};

export type StatisticsEntity_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  totalWeight?: Maybe<Scalars['BigInt']>;
  totalWeight_not?: Maybe<Scalars['BigInt']>;
  totalWeight_gt?: Maybe<Scalars['BigInt']>;
  totalWeight_lt?: Maybe<Scalars['BigInt']>;
  totalWeight_gte?: Maybe<Scalars['BigInt']>;
  totalWeight_lte?: Maybe<Scalars['BigInt']>;
  totalWeight_in?: Maybe<Array<Scalars['BigInt']>>;
  totalWeight_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum StatisticsEntity_OrderBy {
  Id = 'id',
  TotalWeight = 'totalWeight'
}

export type Subscription = {
  __typename?: 'Subscription';
  approvalEntity?: Maybe<ApprovalEntity>;
  approvalEntities: Array<ApprovalEntity>;
  cardEntity?: Maybe<CardEntity>;
  cardEntities: Array<CardEntity>;
  historyEntity?: Maybe<HistoryEntity>;
  historyEntities: Array<HistoryEntity>;
  categoryEntity?: Maybe<CategoryEntity>;
  categoryEntities: Array<CategoryEntity>;
  statisticsEntity?: Maybe<StatisticsEntity>;
  statisticsEntities: Array<StatisticsEntity>;
  totalEntity?: Maybe<TotalEntity>;
  totalEntities: Array<TotalEntity>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionApprovalEntityArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionApprovalEntitiesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ApprovalEntity_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ApprovalEntity_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCardEntityArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCardEntitiesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CardEntity_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<CardEntity_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionHistoryEntityArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionHistoryEntitiesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<HistoryEntity_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<HistoryEntity_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCategoryEntityArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCategoryEntitiesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CategoryEntity_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<CategoryEntity_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionStatisticsEntityArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionStatisticsEntitiesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<StatisticsEntity_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<StatisticsEntity_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTotalEntityArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTotalEntitiesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TotalEntity_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TotalEntity_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_MetaArgs = {
  block?: Maybe<Block_Height>;
};

export type TotalEntity = {
  __typename?: 'TotalEntity';
  id: Scalars['ID'];
  total?: Maybe<Scalars['BigInt']>;
  sold?: Maybe<Scalars['BigInt']>;
};

export type TotalEntity_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  total?: Maybe<Scalars['BigInt']>;
  total_not?: Maybe<Scalars['BigInt']>;
  total_gt?: Maybe<Scalars['BigInt']>;
  total_lt?: Maybe<Scalars['BigInt']>;
  total_gte?: Maybe<Scalars['BigInt']>;
  total_lte?: Maybe<Scalars['BigInt']>;
  total_in?: Maybe<Array<Scalars['BigInt']>>;
  total_not_in?: Maybe<Array<Scalars['BigInt']>>;
  sold?: Maybe<Scalars['BigInt']>;
  sold_not?: Maybe<Scalars['BigInt']>;
  sold_gt?: Maybe<Scalars['BigInt']>;
  sold_lt?: Maybe<Scalars['BigInt']>;
  sold_gte?: Maybe<Scalars['BigInt']>;
  sold_lte?: Maybe<Scalars['BigInt']>;
  sold_in?: Maybe<Array<Scalars['BigInt']>>;
  sold_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum TotalEntity_OrderBy {
  Id = 'id',
  Total = 'total',
  Sold = 'sold'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type CardEntitiesQueryVariables = Exact<{
  first?: Maybe<Scalars['Int']>;
}>;


export type CardEntitiesQuery = (
  { __typename?: 'Query' }
  & { cardEntities: Array<(
    { __typename?: 'CardEntity' }
    & Pick<CardEntity, 'id' | 'owner' | 'background_color' | 'description' | 'external_url' | 'animation_url' | 'image' | 'name' | 'weight' | 'category_id' | 'edition_id' | 'total_edition' | 'sold'>
    & { total?: Maybe<(
      { __typename?: 'TotalEntity' }
      & Pick<TotalEntity, 'id' | 'total' | 'sold'>
    )>, category?: Maybe<(
      { __typename?: 'CategoryEntity' }
      & Pick<CategoryEntity, 'id' | 'name' | 'weight'>
    )> }
  )>, categoryEntities: Array<(
    { __typename?: 'CategoryEntity' }
    & Pick<CategoryEntity, 'id' | 'name' | 'weight'>
  )> }
);

export type CardEntitiesLengthQueryVariables = Exact<{ [key: string]: never; }>;


export type CardEntitiesLengthQuery = (
  { __typename?: 'Query' }
  & { cardEntities: Array<(
    { __typename?: 'CardEntity' }
    & Pick<CardEntity, 'id' | 'owner' | 'background_color' | 'description' | 'external_url' | 'animation_url' | 'image' | 'name' | 'weight' | 'category_id' | 'edition_id' | 'total_edition' | 'sold'>
    & { total?: Maybe<(
      { __typename?: 'TotalEntity' }
      & Pick<TotalEntity, 'id' | 'total' | 'sold'>
    )>, category?: Maybe<(
      { __typename?: 'CategoryEntity' }
      & Pick<CategoryEntity, 'id' | 'name' | 'weight'>
    )> }
  )> }
);

export type CardEntitiesFilterByCategoryQueryVariables = Exact<{
  category_id?: Maybe<Scalars['BigInt']>;
  first?: Maybe<Scalars['Int']>;
}>;


export type CardEntitiesFilterByCategoryQuery = (
  { __typename?: 'Query' }
  & { cardEntities: Array<(
    { __typename?: 'CardEntity' }
    & Pick<CardEntity, 'id' | 'owner' | 'background_color' | 'description' | 'external_url' | 'animation_url' | 'image' | 'name' | 'weight' | 'category_id' | 'edition_id' | 'total_edition' | 'sold'>
    & { total?: Maybe<(
      { __typename?: 'TotalEntity' }
      & Pick<TotalEntity, 'id' | 'total' | 'sold'>
    )>, category?: Maybe<(
      { __typename?: 'CategoryEntity' }
      & Pick<CategoryEntity, 'id' | 'name' | 'weight'>
    )> }
  )>, categoryEntities: Array<(
    { __typename?: 'CategoryEntity' }
    & Pick<CategoryEntity, 'id' | 'name' | 'weight'>
  )> }
);


export const CardEntitiesDocument = gql`
    query cardEntities($first: Int) {
  cardEntities(orderBy: id, first: $first) {
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
  categoryEntities {
    id
    name
    weight
  }
}
    `;

/**
 * __useCardEntitiesQuery__
 *
 * To run a query within a React component, call `useCardEntitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCardEntitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCardEntitiesQuery({
 *   variables: {
 *      first: // value for 'first'
 *   },
 * });
 */
export function useCardEntitiesQuery(baseOptions?: Apollo.QueryHookOptions<CardEntitiesQuery, CardEntitiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CardEntitiesQuery, CardEntitiesQueryVariables>(CardEntitiesDocument, options);
      }
export function useCardEntitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CardEntitiesQuery, CardEntitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CardEntitiesQuery, CardEntitiesQueryVariables>(CardEntitiesDocument, options);
        }
export type CardEntitiesQueryHookResult = ReturnType<typeof useCardEntitiesQuery>;
export type CardEntitiesLazyQueryHookResult = ReturnType<typeof useCardEntitiesLazyQuery>;
export type CardEntitiesQueryResult = Apollo.QueryResult<CardEntitiesQuery, CardEntitiesQueryVariables>;
export const CardEntitiesLengthDocument = gql`
    query cardEntitiesLength {
  cardEntities {
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

/**
 * __useCardEntitiesLengthQuery__
 *
 * To run a query within a React component, call `useCardEntitiesLengthQuery` and pass it any options that fit your needs.
 * When your component renders, `useCardEntitiesLengthQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCardEntitiesLengthQuery({
 *   variables: {
 *   },
 * });
 */
export function useCardEntitiesLengthQuery(baseOptions?: Apollo.QueryHookOptions<CardEntitiesLengthQuery, CardEntitiesLengthQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CardEntitiesLengthQuery, CardEntitiesLengthQueryVariables>(CardEntitiesLengthDocument, options);
      }
export function useCardEntitiesLengthLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CardEntitiesLengthQuery, CardEntitiesLengthQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CardEntitiesLengthQuery, CardEntitiesLengthQueryVariables>(CardEntitiesLengthDocument, options);
        }
export type CardEntitiesLengthQueryHookResult = ReturnType<typeof useCardEntitiesLengthQuery>;
export type CardEntitiesLengthLazyQueryHookResult = ReturnType<typeof useCardEntitiesLengthLazyQuery>;
export type CardEntitiesLengthQueryResult = Apollo.QueryResult<CardEntitiesLengthQuery, CardEntitiesLengthQueryVariables>;
export const CardEntitiesFilterByCategoryDocument = gql`
    query cardEntitiesFilterByCategory($category_id: BigInt, $first: Int) {
  cardEntities(where: {category_id: $category_id}, orderBy: id, first: $first) {
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
  categoryEntities {
    id
    name
    weight
  }
}
    `;

/**
 * __useCardEntitiesFilterByCategoryQuery__
 *
 * To run a query within a React component, call `useCardEntitiesFilterByCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCardEntitiesFilterByCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCardEntitiesFilterByCategoryQuery({
 *   variables: {
 *      category_id: // value for 'category_id'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useCardEntitiesFilterByCategoryQuery(baseOptions?: Apollo.QueryHookOptions<CardEntitiesFilterByCategoryQuery, CardEntitiesFilterByCategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CardEntitiesFilterByCategoryQuery, CardEntitiesFilterByCategoryQueryVariables>(CardEntitiesFilterByCategoryDocument, options);
      }
export function useCardEntitiesFilterByCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CardEntitiesFilterByCategoryQuery, CardEntitiesFilterByCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CardEntitiesFilterByCategoryQuery, CardEntitiesFilterByCategoryQueryVariables>(CardEntitiesFilterByCategoryDocument, options);
        }
export type CardEntitiesFilterByCategoryQueryHookResult = ReturnType<typeof useCardEntitiesFilterByCategoryQuery>;
export type CardEntitiesFilterByCategoryLazyQueryHookResult = ReturnType<typeof useCardEntitiesFilterByCategoryLazyQuery>;
export type CardEntitiesFilterByCategoryQueryResult = Apollo.QueryResult<CardEntitiesFilterByCategoryQuery, CardEntitiesFilterByCategoryQueryVariables>;