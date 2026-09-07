//function to check the permission of actions
export function hasPermission(modules, moduleName, action = "VIEW") {
  if (!modules) return false;

  const module = modules.find((m) => m.name === moduleName);
  if (!module) return false;

  return module.permission.includes(action);
}