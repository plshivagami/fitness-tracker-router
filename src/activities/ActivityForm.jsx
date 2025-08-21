import useMutation from "../api/useMutation";

export default function ActivityForm() {
  const {
    mutate: add,
    loading,
    error,
  } = useMutation("POST", "/activities", ["activities"]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const description = form.description.value;
    add({ name, description });
    form.reset();
  };

  return (
    <>
      <h2>Add a new activity</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" />
        </label>
        <label>
          Description
          <input type="text" name="description" />
        </label>
        <button>{loading ? "Adding..." : "Add activity"}</button>
        {error && <output>{error}</output>}
      </form>
    </>
  );
}

/** Users can create new activities with a name and description. */
// export default function ActivityForm() {
//   const {
//     mutate: add,
//     loading,
//     error,
//   } = useMutation("POST", "/activities", ["activities"]);

//   const addActivity = (formData) => {
//     const name = formData.get("name");
//     const description = formData.get("description");
//     add({ name, description });
//   };

//   return (
//     <>
//       <h2>Add a new activity</h2>
//       <form action={addActivity}>
//         <label>
//           Name
//           <input type="text" name="name" />
//         </label>
//         <label>
//           Description
//           <input type="text" name="description" />
//         </label>
//         <button>{loading ? "Adding..." : "Add activity"}</button>
//         {error && <output>{error}</output>}
//       </form>
//     </>
//   );
// }
