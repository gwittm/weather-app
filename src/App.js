import "./App.css";
import Form from "./components/Form/Form.js";

export default function App() {
  const [activities, SetActivities] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddActivity(data);
    event.target.reset();
  }

  return <Form onAddActivity={handleSubmit} />;
}
