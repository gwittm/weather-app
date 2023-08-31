import { uid } from "uid";

export default function List({ activities }) {
  return (
    <ul>
      {activities.map(({ id, name }) => (
        <div>
          <li key={id}>{name}</li>
        </div>
      ))}
    </ul>
  );
}
