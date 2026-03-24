import "./App.css";
import ModalForm from "./Components/ModalForm";
import Navbar from './Components/Navbar';
import TableList from "./Components/TableList";

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add');

  const handleOpen = (mode) => {
    setIsModalOpen(true);
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
      <Navbar />
      <TableList />
      <ModalForm />
    </>
  );
}

export default App;
