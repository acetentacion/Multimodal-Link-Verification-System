# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetMindMap*](#getmindmap)
- [**Mutations**](#mutations)
  - [*CreateMindMap*](#createmindmap)
  - [*UpdateNode*](#updatenode)
  - [*DeleteMindMap*](#deletemindmap)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetMindMap
You can execute the `GetMindMap` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getMindMap(vars: GetMindMapVariables): QueryPromise<GetMindMapData, GetMindMapVariables>;

interface GetMindMapRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetMindMapVariables): QueryRef<GetMindMapData, GetMindMapVariables>;
}
export const getMindMapRef: GetMindMapRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getMindMap(dc: DataConnect, vars: GetMindMapVariables): QueryPromise<GetMindMapData, GetMindMapVariables>;

interface GetMindMapRef {
  ...
  (dc: DataConnect, vars: GetMindMapVariables): QueryRef<GetMindMapData, GetMindMapVariables>;
}
export const getMindMapRef: GetMindMapRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getMindMapRef:
```typescript
const name = getMindMapRef.operationName;
console.log(name);
```

### Variables
The `GetMindMap` query requires an argument of type `GetMindMapVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetMindMapVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetMindMap` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetMindMapData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetMindMap`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getMindMap, GetMindMapVariables } from '@dataconnect/generated';

// The `GetMindMap` query requires an argument of type `GetMindMapVariables`:
const getMindMapVars: GetMindMapVariables = {
  id: ..., 
};

// Call the `getMindMap()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getMindMap(getMindMapVars);
// Variables can be defined inline as well.
const { data } = await getMindMap({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getMindMap(dataConnect, getMindMapVars);

console.log(data.mindMap);

// Or, you can use the `Promise` API.
getMindMap(getMindMapVars).then((response) => {
  const data = response.data;
  console.log(data.mindMap);
});
```

### Using `GetMindMap`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getMindMapRef, GetMindMapVariables } from '@dataconnect/generated';

// The `GetMindMap` query requires an argument of type `GetMindMapVariables`:
const getMindMapVars: GetMindMapVariables = {
  id: ..., 
};

// Call the `getMindMapRef()` function to get a reference to the query.
const ref = getMindMapRef(getMindMapVars);
// Variables can be defined inline as well.
const ref = getMindMapRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getMindMapRef(dataConnect, getMindMapVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.mindMap);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.mindMap);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateMindMap
You can execute the `CreateMindMap` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createMindMap(vars: CreateMindMapVariables): MutationPromise<CreateMindMapData, CreateMindMapVariables>;

interface CreateMindMapRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateMindMapVariables): MutationRef<CreateMindMapData, CreateMindMapVariables>;
}
export const createMindMapRef: CreateMindMapRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createMindMap(dc: DataConnect, vars: CreateMindMapVariables): MutationPromise<CreateMindMapData, CreateMindMapVariables>;

interface CreateMindMapRef {
  ...
  (dc: DataConnect, vars: CreateMindMapVariables): MutationRef<CreateMindMapData, CreateMindMapVariables>;
}
export const createMindMapRef: CreateMindMapRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createMindMapRef:
```typescript
const name = createMindMapRef.operationName;
console.log(name);
```

### Variables
The `CreateMindMap` mutation requires an argument of type `CreateMindMapVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateMindMapVariables {
  title: string;
  description?: string | null;
  isPublic?: boolean | null;
}
```
### Return Type
Recall that executing the `CreateMindMap` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateMindMapData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateMindMapData {
  mindMap_insert: MindMap_Key;
}
```
### Using `CreateMindMap`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createMindMap, CreateMindMapVariables } from '@dataconnect/generated';

// The `CreateMindMap` mutation requires an argument of type `CreateMindMapVariables`:
const createMindMapVars: CreateMindMapVariables = {
  title: ..., 
  description: ..., // optional
  isPublic: ..., // optional
};

// Call the `createMindMap()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createMindMap(createMindMapVars);
// Variables can be defined inline as well.
const { data } = await createMindMap({ title: ..., description: ..., isPublic: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createMindMap(dataConnect, createMindMapVars);

console.log(data.mindMap_insert);

// Or, you can use the `Promise` API.
createMindMap(createMindMapVars).then((response) => {
  const data = response.data;
  console.log(data.mindMap_insert);
});
```

### Using `CreateMindMap`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createMindMapRef, CreateMindMapVariables } from '@dataconnect/generated';

// The `CreateMindMap` mutation requires an argument of type `CreateMindMapVariables`:
const createMindMapVars: CreateMindMapVariables = {
  title: ..., 
  description: ..., // optional
  isPublic: ..., // optional
};

// Call the `createMindMapRef()` function to get a reference to the mutation.
const ref = createMindMapRef(createMindMapVars);
// Variables can be defined inline as well.
const ref = createMindMapRef({ title: ..., description: ..., isPublic: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createMindMapRef(dataConnect, createMindMapVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.mindMap_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.mindMap_insert);
});
```

## UpdateNode
You can execute the `UpdateNode` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateNode(vars: UpdateNodeVariables): MutationPromise<UpdateNodeData, UpdateNodeVariables>;

interface UpdateNodeRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateNodeVariables): MutationRef<UpdateNodeData, UpdateNodeVariables>;
}
export const updateNodeRef: UpdateNodeRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateNode(dc: DataConnect, vars: UpdateNodeVariables): MutationPromise<UpdateNodeData, UpdateNodeVariables>;

interface UpdateNodeRef {
  ...
  (dc: DataConnect, vars: UpdateNodeVariables): MutationRef<UpdateNodeData, UpdateNodeVariables>;
}
export const updateNodeRef: UpdateNodeRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateNodeRef:
```typescript
const name = updateNodeRef.operationName;
console.log(name);
```

### Variables
The `UpdateNode` mutation requires an argument of type `UpdateNodeVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateNodeVariables {
  id: UUIDString;
  content?: string | null;
  positionX?: number | null;
  positionY?: number | null;
  textContent?: string | null;
  type?: string | null;
}
```
### Return Type
Recall that executing the `UpdateNode` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateNodeData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateNodeData {
  node_update?: Node_Key | null;
}
```
### Using `UpdateNode`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateNode, UpdateNodeVariables } from '@dataconnect/generated';

// The `UpdateNode` mutation requires an argument of type `UpdateNodeVariables`:
const updateNodeVars: UpdateNodeVariables = {
  id: ..., 
  content: ..., // optional
  positionX: ..., // optional
  positionY: ..., // optional
  textContent: ..., // optional
  type: ..., // optional
};

// Call the `updateNode()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateNode(updateNodeVars);
// Variables can be defined inline as well.
const { data } = await updateNode({ id: ..., content: ..., positionX: ..., positionY: ..., textContent: ..., type: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateNode(dataConnect, updateNodeVars);

console.log(data.node_update);

// Or, you can use the `Promise` API.
updateNode(updateNodeVars).then((response) => {
  const data = response.data;
  console.log(data.node_update);
});
```

### Using `UpdateNode`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateNodeRef, UpdateNodeVariables } from '@dataconnect/generated';

// The `UpdateNode` mutation requires an argument of type `UpdateNodeVariables`:
const updateNodeVars: UpdateNodeVariables = {
  id: ..., 
  content: ..., // optional
  positionX: ..., // optional
  positionY: ..., // optional
  textContent: ..., // optional
  type: ..., // optional
};

// Call the `updateNodeRef()` function to get a reference to the mutation.
const ref = updateNodeRef(updateNodeVars);
// Variables can be defined inline as well.
const ref = updateNodeRef({ id: ..., content: ..., positionX: ..., positionY: ..., textContent: ..., type: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateNodeRef(dataConnect, updateNodeVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.node_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.node_update);
});
```

## DeleteMindMap
You can execute the `DeleteMindMap` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteMindMap(vars: DeleteMindMapVariables): MutationPromise<DeleteMindMapData, DeleteMindMapVariables>;

interface DeleteMindMapRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteMindMapVariables): MutationRef<DeleteMindMapData, DeleteMindMapVariables>;
}
export const deleteMindMapRef: DeleteMindMapRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteMindMap(dc: DataConnect, vars: DeleteMindMapVariables): MutationPromise<DeleteMindMapData, DeleteMindMapVariables>;

interface DeleteMindMapRef {
  ...
  (dc: DataConnect, vars: DeleteMindMapVariables): MutationRef<DeleteMindMapData, DeleteMindMapVariables>;
}
export const deleteMindMapRef: DeleteMindMapRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteMindMapRef:
```typescript
const name = deleteMindMapRef.operationName;
console.log(name);
```

### Variables
The `DeleteMindMap` mutation requires an argument of type `DeleteMindMapVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteMindMapVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteMindMap` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteMindMapData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteMindMapData {
  mindMap_delete?: MindMap_Key | null;
}
```
### Using `DeleteMindMap`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteMindMap, DeleteMindMapVariables } from '@dataconnect/generated';

// The `DeleteMindMap` mutation requires an argument of type `DeleteMindMapVariables`:
const deleteMindMapVars: DeleteMindMapVariables = {
  id: ..., 
};

// Call the `deleteMindMap()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteMindMap(deleteMindMapVars);
// Variables can be defined inline as well.
const { data } = await deleteMindMap({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteMindMap(dataConnect, deleteMindMapVars);

console.log(data.mindMap_delete);

// Or, you can use the `Promise` API.
deleteMindMap(deleteMindMapVars).then((response) => {
  const data = response.data;
  console.log(data.mindMap_delete);
});
```

### Using `DeleteMindMap`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteMindMapRef, DeleteMindMapVariables } from '@dataconnect/generated';

// The `DeleteMindMap` mutation requires an argument of type `DeleteMindMapVariables`:
const deleteMindMapVars: DeleteMindMapVariables = {
  id: ..., 
};

// Call the `deleteMindMapRef()` function to get a reference to the mutation.
const ref = deleteMindMapRef(deleteMindMapVars);
// Variables can be defined inline as well.
const ref = deleteMindMapRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteMindMapRef(dataConnect, deleteMindMapVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.mindMap_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.mindMap_delete);
});
```

