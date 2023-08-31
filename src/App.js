import "./App.css";
import Form from "./components/Form/Form.js";
import List from "./components/List/List.js";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [isForGoodWeather, setIsForGoodWeather] = useLocalStorageState(
    "isForGoodWeather",
    { defaultValue: false }
  );

  function handleIsForGoodWeahter() {
    setIsForGoodWeather(!isForGoodWeather);
  }

  function handleAddActivity(dataObject) {
    setActivities(dataObject.activity);
    setIsForGoodWeather(dataObject.weather.checked);
    console.log(activities, isForGoodWeather);
  }

  return (
    <div>
      <h1> Weather App</h1>
      <Form
        onAddActivity={handleAddActivity}
        onChecked={handleIsForGoodWeahter}
      />
      <List activities={activities} />
    </div>
  );
}
