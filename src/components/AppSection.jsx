import { useState, useEffect } from "react";

export default function AppSection({
  darkTheme,
  setDarkTheme,
  todos,
  setTodos,
  section,
  setSection,
}) {
  const [todo, setTodo] = useState("");
  function handleChange(string) {
    setTodo(string);
  }
  function handleTodos(e, string) {
    e.preventDefault();
    setTodos([...todos, { text: string, active: true }]);
    setTodo("");
  }
  return (
    <section className="todo-app">
      {/* <!-- TODO APP MAIN HEADER --> */}
      <Header />
      {/* <!-- CREATE NEW TODO --> */}
      <form
        onSubmit={(e) => handleTodos(e, todo)}
        className="create-new-todo-header"
      >
        <span className="check-box">&nbsp;</span>
        <input
          type="text"
          placeholder="Create new todo"
          className="create-new-todo-input"
          size="1"
          required
          minLength="5"
          maxLength="50"
          value={todo}
          onChange={(e) => handleChange(e.target.value)}
        />
      </form>

      {/* <!-- TODOS CONTAINER --> */}
      <section className="bottom-part">
        <ul className="todos-container dark-theme">
          {/*  */}
          <Todos />
          {/*  */}
        </ul>
        {/*  */}
        <Footer />
        {/*  */}
      </section>
    </section>
  );
  function Header() {
    return (
      <header className="todo-header">
        <h1 className="todo-header--heading">TODO</h1>
        <ThemeIcon />
      </header>
    );

    function ThemeIcon() {
      function handleTheme() {
        setDarkTheme((theme) => !theme);
      }
      return (
        <span className="icon" onClick={handleTheme}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`theme-icon sun  ${darkTheme ? "" : "hidden"}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`theme-icon moon ${darkTheme ? "hidden" : ""}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        </span>
      );
    }
  }
  function Todos() {
    function handleClick(currTodo) {
      setTodos((todos) =>
        todos.map((todo) =>
          todo.text === currTodo.text
            ? { ...todo, active: !todo.active }
            : { ...todo }
        )
      );
    }
    return (
      <>
        {section === "all" ? (
          todos.length ? (
            todos.map((todo) => (
              <section
                key={Math.random()}
                className={`todo ${todo.active}`}
                onClick={() => handleClick(todo)}
              >
                <span className="check-box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="check-box--icon display-none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </span>
                <p className="todo-text" style={{ backgroundColor: " none" }}>
                  {todo.text}
                </p>
              </section>
            ))
          ) : (
            <></>
          )
        ) : (
          <></>
        )}
        {section === "active" ? (
          todos.length ? (
            todos
              .filter((todo) => todo.active === true)
              .map((todo) => (
                <section
                  key={Math.random()}
                  className={`todo ${todo.active}`}
                  onClick={() => handleClick(todo)}
                >
                  <span className="check-box">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="check-box--icon display-none"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <p className="todo-text" style={{ backgroundColor: " none" }}>
                    {todo.text}
                  </p>
                </section>
              ))
          ) : (
            <></>
          )
        ) : (
          <></>
        )}
        {section === "completed" ? (
          todos.length ? (
            todos
              .filter((todo) => todo.active === false)
              .map((todo) => (
                <section
                  key={Math.random()}
                  className={`todo ${todo.active}`}
                  onClick={() => handleClick(todo)}
                >
                  <span className="check-box">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="check-box--icon display-none"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <p className="todo-text" style={{ backgroundColor: " none" }}>
                    {todo.text}
                  </p>
                </section>
              ))
          ) : (
            <></>
          )
        ) : (
          <></>
        )}
      </>
    );
  }
  function Footer() {
    function handleClick(string) {
      setSection(string);
    }
    function handleClear() {
      setTodos(todos.filter((todo) => (todo.active ? todo : "")));
    }

    return (
      <footer className="todo-footer dark-theme">
        <p>
          <span className="items-left">{todos.length}</span> items left
        </p>
        <section className="show-buttons">
          <button onClick={() => handleClick("all")}>All</button>
          <button onClick={() => handleClick("active")}>Active</button>
          <button onClick={() => handleClick("completed")}>Completed</button>
        </section>
        <button onClick={handleClear} className="clear-completed">
          clear completed
        </button>
      </footer>
    );
  }
}
