function Profile({ user }) {
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
}

// ====================================

function UserInfo({ user }) {
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
}
function SignOutButton({ signOut }) {
  return <button onClick={signOut}>Sign out</button>;
}
function Profile({ user, signOut }) {
  return (
    <div>
      <UserInfo user={user} />
      <SignOutButton signOut={signOut} />
    </div>
  );
}
