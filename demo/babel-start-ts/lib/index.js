var Status;

(function (Status) {
  Status[Status["OFFLINE"] = 0] = "OFFLINE";
  Status[Status["ONLINE"] = 1] = "ONLINE";
})(Status || (Status = {}));

const user = {
  id: 1,
  name: "John"
};
console.log(Status.OFFLINE);