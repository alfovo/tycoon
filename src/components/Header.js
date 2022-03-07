import Clock from "./Clock";
export default function Header(props) {
  function formatName(user) {
    return user.firstName + " " + user.lastName;
  }

  return (
    <div>
      <h1>Hello, {formatName(props.user)}</h1>
      <Clock />
    </div>
  );
}
