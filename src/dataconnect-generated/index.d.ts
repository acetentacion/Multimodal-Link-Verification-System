import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface CreateMindMapData {
  mindMap_insert: MindMap_Key;
}

export interface CreateMindMapVariables {
  title: string;
  description?: string | null;
  isPublic?: boolean | null;
}

export interface DeleteMindMapData {
  mindMap_delete?: MindMap_Key | null;
}

export interface DeleteMindMapVariables {
  id: UUIDString;
}

export interface GetMindMapData {
  mindMap?: {
    id: UUIDString;
    title: string;
    description?: string | null;
    isPublic?: boolean | null;
    createdAt: TimestampString;
    updatedAt: TimestampString;
    owner?: {
      id: UUIDString;
      displayName: string;
      email?: string | null;
      photoUrl?: string | null;
    } & User_Key;
      nodes_on_mindMap: ({
        id: UUIDString;
        content: string;
        positionX: number;
        positionY: number;
        textContent?: string | null;
        type: string;
      } & Node_Key)[];
        tags_via_MindMapTag: ({
          id: UUIDString;
          name: string;
        } & Tag_Key)[];
  } & MindMap_Key;
}

export interface GetMindMapVariables {
  id: UUIDString;
}

export interface MediaAsset_Key {
  id: UUIDString;
  __typename?: 'MediaAsset_Key';
}

export interface MindMapTag_Key {
  mindMapId: UUIDString;
  tagId: UUIDString;
  __typename?: 'MindMapTag_Key';
}

export interface MindMap_Key {
  id: UUIDString;
  __typename?: 'MindMap_Key';
}

export interface Node_Key {
  id: UUIDString;
  __typename?: 'Node_Key';
}

export interface Tag_Key {
  id: UUIDString;
  __typename?: 'Tag_Key';
}

export interface UpdateNodeData {
  node_update?: Node_Key | null;
}

export interface UpdateNodeVariables {
  id: UUIDString;
  content?: string | null;
  positionX?: number | null;
  positionY?: number | null;
  textContent?: string | null;
  type?: string | null;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateMindMapRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateMindMapVariables): MutationRef<CreateMindMapData, CreateMindMapVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateMindMapVariables): MutationRef<CreateMindMapData, CreateMindMapVariables>;
  operationName: string;
}
export const createMindMapRef: CreateMindMapRef;

export function createMindMap(vars: CreateMindMapVariables): MutationPromise<CreateMindMapData, CreateMindMapVariables>;
export function createMindMap(dc: DataConnect, vars: CreateMindMapVariables): MutationPromise<CreateMindMapData, CreateMindMapVariables>;

interface GetMindMapRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetMindMapVariables): QueryRef<GetMindMapData, GetMindMapVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetMindMapVariables): QueryRef<GetMindMapData, GetMindMapVariables>;
  operationName: string;
}
export const getMindMapRef: GetMindMapRef;

export function getMindMap(vars: GetMindMapVariables): QueryPromise<GetMindMapData, GetMindMapVariables>;
export function getMindMap(dc: DataConnect, vars: GetMindMapVariables): QueryPromise<GetMindMapData, GetMindMapVariables>;

interface UpdateNodeRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateNodeVariables): MutationRef<UpdateNodeData, UpdateNodeVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateNodeVariables): MutationRef<UpdateNodeData, UpdateNodeVariables>;
  operationName: string;
}
export const updateNodeRef: UpdateNodeRef;

export function updateNode(vars: UpdateNodeVariables): MutationPromise<UpdateNodeData, UpdateNodeVariables>;
export function updateNode(dc: DataConnect, vars: UpdateNodeVariables): MutationPromise<UpdateNodeData, UpdateNodeVariables>;

interface DeleteMindMapRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteMindMapVariables): MutationRef<DeleteMindMapData, DeleteMindMapVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteMindMapVariables): MutationRef<DeleteMindMapData, DeleteMindMapVariables>;
  operationName: string;
}
export const deleteMindMapRef: DeleteMindMapRef;

export function deleteMindMap(vars: DeleteMindMapVariables): MutationPromise<DeleteMindMapData, DeleteMindMapVariables>;
export function deleteMindMap(dc: DataConnect, vars: DeleteMindMapVariables): MutationPromise<DeleteMindMapData, DeleteMindMapVariables>;

