import crypto from "crypto";

const users = new Map();

//GET ALL USERS
export const getUsers = (req, res) => {
    const usersArray = Array.from(users.values());

    res.status(200).json({
      success: true,
      count: usersArray.length,
      data: usersArray,
    });
}

//GET USER
export const getUser = (req, res) => {
  const user = users.get(req.params.username);
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
};

export const createUser = (req, res) => {
  const { username } = req.body;

  if (!username || typeof username !== "string") {
    return res.status(400).json({ error: "Invalid username" });
  }

  // Check if username exists in the Map
  const userExists = Array.from(users.values()).some(
    (user) => user.username === username
  );

  if (userExists) {
    return res.status(400).json({ error: "Username already exists" });
  }
  
  // 2. Check username length (example validation)
  if (username.length < 3 || username.length > 20) {
    return res.status(400).json({
      success: false,
      error: "Username must be between 3-20 characters",
    });
  }

  // 3. Generate unique ID if creating new user
  const userId = crypto.randomUUID();

  // 4. Update user in storage
  users.set("user", {
    id: userId,
    username: username,
    createdAt: new Date(),
  });

  console.log(users);

  // 5. Return success response
  return res.status(200).json({
    success: true,
    user: {
      id: userId,
      username: username,
    },
  });
};
