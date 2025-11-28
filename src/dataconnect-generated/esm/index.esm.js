import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'multimodallinkverificationsystem',
  location: 'us-east4'
};

export const createMindMapRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateMindMap', inputVars);
}
createMindMapRef.operationName = 'CreateMindMap';

export function createMindMap(dcOrVars, vars) {
  return executeMutation(createMindMapRef(dcOrVars, vars));
}

export const getMindMapRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMindMap', inputVars);
}
getMindMapRef.operationName = 'GetMindMap';

export function getMindMap(dcOrVars, vars) {
  return executeQuery(getMindMapRef(dcOrVars, vars));
}

export const updateNodeRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateNode', inputVars);
}
updateNodeRef.operationName = 'UpdateNode';

export function updateNode(dcOrVars, vars) {
  return executeMutation(updateNodeRef(dcOrVars, vars));
}

export const deleteMindMapRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteMindMap', inputVars);
}
deleteMindMapRef.operationName = 'DeleteMindMap';

export function deleteMindMap(dcOrVars, vars) {
  return executeMutation(deleteMindMapRef(dcOrVars, vars));
}

