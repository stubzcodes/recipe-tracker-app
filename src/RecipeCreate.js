import React, { useState } from "react";

function RecipeCreate({createRecipe}) {

  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const [formState, setFormState] = useState(initialFormState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(formState);
    setFormState(initialFormState);
  };
  //<input name="name">, <input name="cuisine">, <input name="photo">, <textarea name="ingredients"> and <textarea name="preparation">
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td className="create_small">
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formState.name}
                onChange={handleChange}
                placeholder="Name"
              />
            </td>
            <td className="create_small">
              <input 
                type="text" 
                id="cuisine" 
                name="cuisine"
                value={formState.cuisine}
                onChange={handleChange}
                placeholder="Cuisine"
              />
            </td>
            <td className="create_small">
              <input 
                type="url" 
                id="photo" 
                name="photo" 
                value={formState.photo}
                onChange={handleChange}
                placeholder="URL"
              />
            </td>
            <td className="create_lg">
              <textarea  
                className="text-box"
                id="ingredients" 
                name="ingredients" 
                value={formState.ingredients}
                onChange={handleChange}  
                placeholder="Ingredients"
              />
            </td>
            <td className="create_lg">
              <textarea 
                className="text-box"
                id="preparation" 
                name="preparation" 
                value={formState.preparation}
                onChange={handleChange}
                placeholder="Preparation"
              />
            </td>
            <td className="create_sm"> 
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
