import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateItem } from '../store/items';
 

const EditItemForm = ({ itemId, hideForm }) => {
  const item = useSelector(state => state.items[itemId]);
  const dispatch = useDispatch();

  const [happiness, setHappiness] = useState(item.happiness);
  const [price, setPrice] = useState(item.price);
  const [name, setName] = useState(item.name);

  const updateName = (e) => setName(e.target.value);
  const updateHappiness = (e) => setHappiness(e.target.value);
  const updatePrice = (e) => setPrice(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...item,
      name,
      happiness,
      price,
    };

    let updatedItem;
    console.log('ItemUpdate:', payload);
    updatedItem = await dispatch(updateItem(payload));
    if (updatedItem) {
      hideForm();
    }
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    hideForm();
  };

  return (
    <section className="edit-form-holder centered middled">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={updateName} />
        <input
          type="number"
          placeholder="Happiness"
          min="0"
          max="100"
          required
          value={happiness}
          onChange={updateHappiness} />
        <input
          type="number"
          placeholder="Price"
          required
          value={price}
          onChange={updatePrice} />
        <button type="submit">Update Item</button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
      </form>
    </section>
  );
};

export default EditItemForm;
