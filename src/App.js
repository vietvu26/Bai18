import Login from "./Login";
import UserDetails from "./Details";

function App() {
  const userInfo = {
    userName: "viet",
    email: "viet@123.com",
    phone: "0123456789",
  };
  return (
    <>
      <div className="Container" style={{ marginLeft: "600px" }}>
        <Login />
      </div>
      <hr></hr>
      <div className="Container" style={{ marginLeft: "600px" }}>
        <UserDetails info={userInfo} />
      </div>
    </>
  );
}

export default App;