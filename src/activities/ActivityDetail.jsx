import { useParams, useNavigate } from "react-router";
import useQuery from "../api/useQuery";
import useMutation from "../api/useMutation";
import { useAuth } from "../auth/AuthContext";

export default function ActivityDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();

  const {
    data: activity,
    loading,
    error,
  } = useQuery(`/activities/${id}`, ["activity", id]);
  const {
    mutate: deleteActivity,
    loading: deleting,
    error: deleteError,
  } = useMutation("DELETE", `/activities/${id}`, ["activities"]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;
  if (!activity) return <p>Activity not found.</p>;

  const handleDelete = async () => {
    await deleteActivity();
    navigate("/activities"); // Go back to the list after deletion
  };
  return (
    <div>
      <h2>{activity.name}</h2>
      <p>{activity.description}</p>
      <p>Created by: {activity.creatorName}</p>

      {token && (
        <button onClick={handleDelete}>
          {deleting
            ? "Deleting..."
            : deleteError
            ? deleteError
            : "Delete Activity"}
        </button>
      )}
    </div>
  );
}
