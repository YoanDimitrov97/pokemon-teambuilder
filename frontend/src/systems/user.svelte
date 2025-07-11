<script lang="ts" module>
  let username = $state("");
  let loading = $state(false);
  let error = $state<string | null>(null);
  let room = $state({})

  //If username already set before
  if (typeof localStorage !== 'undefined') {
    const savedUsername = localStorage.getItem("username");

    if (savedUsername) {
      //syncUsernameWithServer(savedUsername);
      username = savedUsername
      //need to log user to db too
    }
  }

  async function syncUsernameWithServer(name: string) {
    try {
      const response = await fetch(`http://localhost:3000/api/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: name })
      });
      
      //if (!response.ok) throw new Error("Server rejected username");
      const res = await response.json()
      console.log(res);
      username = res.user.username
      return ;
    } catch (err) {
      console.error("Username sync failed:", err);
      error = "Failed to sync with server";
      return null;
    }
  }

  const handleUsername = async (name: string) => {
    if (!name.trim()) {
      error = "Username cannot be empty";
      return;
    }

    loading = true;
    error = null;
    
    try {
      const result = await syncUsernameWithServer(name);
      if (result) {
        username = name;
        localStorage.setItem("username", name);
      }
    } finally {
      loading = false;
    }
  };

  const createRoom = async (name: string) => {
    try {
      const response = await fetch(`http://localhost:3000/api/rooms`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: name })
      });
      
      //if (!response.ok) throw new Error("Server rejected username");
      const res = await response.json()
      console.log(res);
      
      return ;
    } catch (err) {
      console.error("Room sync failed:", err);
      error = "Failed to sync with server";
      return null;
    }
  }

  export const user = {
    get username() {
      return username;
    },
    get isLoading() { return loading; },
    get error() { return error; },
    //send it to db and save it in browser storage
    setUsername: (name: string) => handleUsername(name),
    clear: () => {
      username = "";
      localStorage.removeItem("username");
    },
    setRoom: () => createRoom(username)
  };
</script>
