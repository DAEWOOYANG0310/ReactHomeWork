import React, { useState } from "react";

const App = () => {
  const bodyStyle = {
    width: "1200px",
    height: "800px",
    display: "flex",
    flexDirection: "column",
  };

  const titleStyle = {
    backgroundColor: "gray",
    padding: "30px",
    borderRadius: "10px",
  };

  const mainStyle = {
    display: "flex",
    gap: "20px",
    margin: "10px",
  };

  const [lists, setLists] = useState([
    {
      id: new Date().getTime() + 1,
      title: "리액트를 공부하자",
      content: "공부중",
      completed: false,
    },
    {
      id: new Date().getTime() + 2,
      title: "리액트를 공부하자",
      content: "공부중",
      completed: false,
    },
  ]);
  const deleteUserhander = (id) => {
    const deleteUsers = lists.filter(function (list) {
      return list.id != id;
    });
    setLists(deleteUsers);
  };

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const titleTextHandler = (e) => {
    setTitle(e.target.value);
  };
  const contentTextHandler = (e) => {
    setContent(e.target.value);
  };
  const addListHandler = (e) => {
    e.preventDefault();
    const newList = {
      id: new Date().getTime(),
      title: title,
      content: content,
      completed: false,
    };
    setLists([...lists, newList]);
  };
  const toggleCompleted = (id) => {
    const updatedLists = lists.map((list) =>
      list.id === id ? { ...list, completed: !list.completed } : list
    );
    setLists(updatedLists);
  };

  const workingLists = lists.filter((list) => !list.completed);
  const completedLists = lists.filter((list) => list.completed);

  return (
    <div style={bodyStyle}>
      <header>
        <h1>My Todo List</h1>
        <form style={titleStyle}>
          제목 : <input type="text" value={title} onChange={titleTextHandler} />
          내용 :
          <input type="text" value={content} onChange={contentTextHandler} />
          <button onClick={addListHandler}>추가</button>
        </form>
      </header>
      <section>
        <h3>Working</h3>
        <main style={mainStyle}>
          {workingLists.map((list) => (
            <List
              key={list.id}
              list={list}
              deleteUserhander={deleteUserhander}
              toggleCompleted={toggleCompleted}
            />
          ))}
        </main>
        <h3>Done!</h3>
        <main style={mainStyle}>
          {completedLists.map((list) => (
            <List
              key={list.id}
              list={list}
              deleteUserhander={deleteUserhander}
              toggleCompleted={toggleCompleted}
            />
          ))}
        </main>
      </section>
    </div>
  );
};
export default App;

const List = ({ list, deleteUserhander, toggleCompleted }) => {
  const { title, content, id, completed } = list;

  const listStyle = {
    width: "200px",
    height: "100px",
    border: "5px solid skyblue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    flexDirection: "column",
  };
  return (
    <div style={listStyle}>
      {title}
      <p>{content}</p>
      <div>
        <button onClick={() => toggleCompleted(id)}>
          {completed ? "취소" : "완료"}
        </button>
        <button onClick={() => deleteUserhander(id)}>삭제</button>
      </div>
    </div>
  );
};
