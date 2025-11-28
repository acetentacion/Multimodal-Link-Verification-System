const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'multimodallinkverificationsystem',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const createMindMapRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateMindMap', inputVars);
}
createMindMapRef.operationName = 'CreateMindMap';
exports.createMindMapRef = createMindMapRef;

exports.createMindMap = function createMindMap(dcOrVars, vars) {
  return executeMutation(createMindMapRef(dcOrVars, vars));
};

const getMindMapRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMindMap', inputVars);
}
getMindMapRef.operationName = 'GetMindMap';
exports.getMindMapRef = getMindMapRef;

exports.getMindMap = function getMindMap(dcOrVars, vars) {
  return executeQuery(getMindMapRef(dcOrVars, vars));
};

const updateNodeRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateNode', inputVars);
}
updateNodeRef.operationName = 'UpdateNode';
exports.updateNodeRef = updateNodeRef;

exports.updateNode = function updateNode(dcOrVars, vars) {
  return executeMutation(updateNodeRef(dcOrVars, vars));
};

const deleteMindMapRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteMindMap', inputVars);
}
deleteMindMapRef.operationName = 'DeleteMindMap';
exports.deleteMindMapRef = deleteMindMapRef;

exports.deleteMindMap = function deleteMindMap(dcOrVars, vars) {
  return executeMutation(deleteMindMapRef(dcOrVars, vars));
};
