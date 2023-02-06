import "./App.css";
import Profile from "./compopnent/Profile";
import img from "./John-Doe.jpg";

function App() {
  const profile = {
    fullName: "john doe",
    bio: "hello my name is john doe and i make horrible websites",
    profession: "Web developer",
  };
  const handleName = (fullName) => alert(`fullName: ${fullName}`);
  return (
    <div>
      <Profile profile={profile} handleName={handleName}>
        <img src={img} alt="profileimage" />
      </Profile>
    </div>
  );
}

export default App;
