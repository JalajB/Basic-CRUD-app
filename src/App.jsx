import { useState } from 'react';
import "./App.css";
import ModalForm from "./Components/ModalForm";
import Navbar from './Components/Navbar';
import TableList from "./Components/TableList";

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add');

  const handleOpen = (mode) => {
    setIsOpen(true);
  }

  const handleSubmit = () => {
    if (modalMode === 'add') {
      console.log("MODAL MODE - ADD");
    } else {
      console.log("MODAL MODE - EDIT");
    }
  }
  return (
    <>
      <Navbar onOpen={() => handleOpen('add')} />
      <TableList />
      <ModalForm isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={handleSubmit}

      />
    </>
  );
}

export default App;
