const Notification = ({ message, total }) => {
  return <>{total === 0 && <p>{message}</p>}</>;
};

export default Notification;
