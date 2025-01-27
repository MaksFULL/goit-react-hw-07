import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { fetchContacts } from "./redux/contactsOps";
import { selectError, selectIsLoading } from "./redux/contactsSlice";
import { useEffect } from "react";
import Loader from "./components/Loader/Loader";

const App = () => {
  const dispatch = useDispatch();
  const loader = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>
        Phone<span>book</span>
      </h1>
      <ContactForm />
      <SearchBox />
      {loader && !error ? <Loader /> : <ContactList />}
    </div>
  );
};

export default App;