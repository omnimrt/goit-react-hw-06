import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import userData from "./users.json";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import {
  addContact,
  deleteContact,
  setFilter,
} from "./redux/phonebook/phonebookReducer";

function App() {
  const dispatch = useDispatch();
  // const [users, setUsers] = useState(() => {
  //   const stringifiedUsers = localStorage.getItem("users");
  //   if (!stringifiedUsers) return userData;

  //   const parsedUsers = JSON.parse(stringifiedUsers);
  //   return parsedUsers;
  // });

  // const [filter, setFilter] = useState("");

  const contacts = useSelector((state) => state.phonebook.contacts);
  const filters = useSelector((state) => state.phonebook.filter);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // User adding functionality

  const onAddUser = (formData) => {
    const finalUser = {
      ...formData,
      id: nanoid(),
    };
    dispatch(addContact(finalUser));
  };

  // User deleting functionality

  const onUserDelete = (userId) => {
    dispatch(deleteContact(userId));
  };

  // Filter functionality

  const onChangeFilter = (event) => {
    dispatch(setFilter(event.target.value));
  };

  const filteredUsers = users.filter((user) => {
    const nameIncludesFilter =
      user.name && user.name.toLowerCase().includes(filter.toLowerCase());
    const numberIncludesFilter =
      typeof user.number === "string" &&
      user.number.toLowerCase().includes(filter.toLowerCase());
    return nameIncludesFilter || numberIncludesFilter;
  });

  return (
    <>
      <h1>Phonebook</h1>
      <br />
      <ContactForm onAddUser={onAddUser} />
      <SearchBox onChangeFilter={onChangeFilter} value={filter} />
      <ContactList users={filteredUsers} onUserDelete={onUserDelete} />
    </>
  );
}

export default App;
