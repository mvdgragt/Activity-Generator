import "./Activity.css";

const Activity = ({ activity, type, participants }) => {
  return (
    <div className="activity">
      <h2>{activity}</h2>
      <hr />
      <h4>type of activity: {type}</h4>
      <h4>participants: {participants}</h4>
    </div>
  );
};

export default Activity;
