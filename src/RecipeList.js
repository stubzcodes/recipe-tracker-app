import React from "react";

function RecipeList({ recipes, deleteRecipe }) {
  // TODO: Display the list of recipes using the structure of the table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  const handleDelete = (index) => {
    deleteRecipe(index);
  };

  const rows = recipes.map((formData, index) => (
    <tr key={index}>
      <td className="small_td">{formData.name}</td>
      <td className="small_td">{formData.cuisine}</td>
      <td className="small_td">
        <img src={formData.photo} alt={formData.name} className="recipe-img" />
      </td>
      <td className="content_td">{formData.ingredients}</td>
      <td className="content_td">{formData.preparation}</td>
      <td className="small_td">
        <button name="delete" onClick={() => handleDelete(index)}>
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th className="small_th heading">Name</th>
            <th className="small_th heading">Cuisine</th>
            <th className="small_th heading">Photo</th>
            <th className="content_td heading">Ingredients</th>
            <th className="content_td heading">Preparation</th>
            <th className="small_th heading">Actions</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default RecipeList;