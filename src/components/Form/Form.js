import { uid } from "uid";

export default function Form({ onAddActivities }) {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formElement = form.elements;

    const data = {
      name: formElement.name.value,
      isForGoodWeather: formElement.isForGoodWeather.checked,
      id: uid(),
    };
    onAddActivities(data);
  }

  return (
    <div>
      <h1>Weather and activities</h1>
      <form
        className="form"
        aria-labelledby="form-activities"
        onSubmit={handleSubmit}
      >
        <label htmlFor="activity">Name of Activity </label>
        <input
          id="activity"
          type="text"
          name="activity"
          placeholder="e.g. read a book"
        />

        <label htmlFor="weather-check">Good weather activity? </label>
        <input id="weather-check" type="checkbox" name="ForGoodWeather" />
        <button type="submit" className="form__submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}
