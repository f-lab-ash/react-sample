// Item.jsx
function UserList() {
  return (
    <div>
      {users.map((user) => {
        return <Item key={user.id} {...user} />;
      })}
    </div>
  );
}

function Item({ user }) {
  console.log("Item component render");

  const getResult = useCallback((score) => {
    if (score <= 70) {
      return { grade: "D" };
    }
    if (score <= 80) {
      return { grade: "C" };
    }
    if (score <= 90) {
      return { grade: "B" };
    } else {
      return { grade: "A" };
    }
  }, []);

  const { grade } = getResult(user.score);

  return (
    <div className="item">
      <div>이름: {user.name}</div>
      <div>나이: {user.age}</div>
      <div>점수: {user.score}</div>
      <div>등급: {grade}</div>
    </div>
  );
}

export default Item;
