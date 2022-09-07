enum Status {
  OFFLINE,
  ONLINE,
}

interface User {
  id: number;
  name: string;
}

const user: User = {
  id: 1,
  name: "John",
};

console.log(Status.OFFLINE);
