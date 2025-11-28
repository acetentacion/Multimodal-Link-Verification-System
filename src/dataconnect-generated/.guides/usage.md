# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.





## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { createMindMap, getMindMap, updateNode, deleteMindMap } from '@dataconnect/generated';


// Operation CreateMindMap:  For variables, look at type CreateMindMapVars in ../index.d.ts
const { data } = await CreateMindMap(dataConnect, createMindMapVars);

// Operation GetMindMap:  For variables, look at type GetMindMapVars in ../index.d.ts
const { data } = await GetMindMap(dataConnect, getMindMapVars);

// Operation UpdateNode:  For variables, look at type UpdateNodeVars in ../index.d.ts
const { data } = await UpdateNode(dataConnect, updateNodeVars);

// Operation DeleteMindMap:  For variables, look at type DeleteMindMapVars in ../index.d.ts
const { data } = await DeleteMindMap(dataConnect, deleteMindMapVars);


```