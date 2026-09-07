//fake user data for testing of apis

export const users = {
  userA: {
    name: "User A",
    modules: [
      { name: "Orders", permission: ["VIEW", "CREATE"] },
      { name: "Billing", permission: ["VIEW"] },
    ],
  },
  userB: {
    name: "User B",
    modules: [
      { name: "Orders", permission: ["VIEW", "CREATE"] },
    ],
  },
};

export function fetchPermissions(userKey) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(users[userKey]), 300);
  });
}