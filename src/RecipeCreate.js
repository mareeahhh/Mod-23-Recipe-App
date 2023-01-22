import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {

  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  };

  const [formData, setFormData] = useState({...initialFormState});
  const handleChange = ({target}) => {
    setFormData({
      ...formData, 
      [target.name]: target.value
    });
  }

  const handleSubmit =(event) => {
    event.preventDefault();
    // console.log("submitted", formData);
    createRecipe(formData);
    setFormData({...initialFormState});
  };

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form onSubmit={handleSubmit}name="create">
      <table>
        <tbody>
          <tr>
            <td><input onChange={handleChange} type="text" name="name" id="" placeholder="Name" value={formData.name} /></td>
            <td><input onChange={handleChange} type="text" name="cuisine" id="" placeholder="Cuisine" value={formData.cuisine} /></td>
            <td><input onChange={handleChange} type="text" name="photo" id="" placeholder="URL" value={formData.photo} /></td>
            <td id="wider"><textarea onChange={handleChange} name="ingredients" id="" placeholder="Ingredients" value={formData.ingredients} cols="30" rows="10"></textarea></td>
            <td id="wider"><textarea onChange={handleChange} name="preparation" id="" placeholder="Preparation" value={formData.preparation} cols="30" rows="10"></textarea></td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
