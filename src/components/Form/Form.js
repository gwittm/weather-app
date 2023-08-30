export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddActivity(data);
    event.target.reset();
  }

  return (
    <div>
      <h1>Weather and activities</h1>
      <form
        className="form"
        aria-labelledby="form-activities"
        onSubmit={onAddActivity}
      >
        <label htmlFor="activity">Name of Activity </label>
        <input
          id="activity"
          type="text"
          name="activity"
          placeholder="e.g. read a book"
        />

        <label htmlFor="weather-check">Good weather activity? </label>
        <input id="weather-check" type="checkbox" name="weather-check" />
        <button type="submit" className="form__submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}
