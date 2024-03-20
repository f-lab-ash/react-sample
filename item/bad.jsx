// UserList.jsx  
function UserList() {

 const getResult = useCallback((score) => {
    if (score <= 70) {
      return { grade: "D" };
    } else if (score <= 80) {
      return { grade: "C" };
    } else if (score <= 90) {
      return { grade: "B" };
    } else {
      return { grade: "A" };
    }
  }, []);

return(
 <div>
 {users.map((user) => {
    return (
      <Item key={user.id} user={user} />
        );
      })}
 </div> 
 
)
}
export default UserList;


// Item.jsx  
function Item({ user, result }) {
  console.log("Item component render");

  return (
    <div className="item">
      <div>이름: {user.name}</div>
      <div>나이: {user.age}</div>
      <div>점수: {user.score}</div>
      <div>등급: {result.grade}</div>
    </div>
  );
}

export default Item;