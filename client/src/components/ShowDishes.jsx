import React from 'react';
import './ShowDishes.css'
import { Link } from 'react-router-dom';

export default function ShowDishes(props) {
  const { dishes, currentUser, destroyDish } = props;
  return (
    <>
      {/* <hr /> */}
      <div className="dishes">
        <h3>Dishes</h3>
      </div>
      {
        dishes.map(dish => (
          <React.Fragment key={dish.id}>

            <Link className="post" to={`/dish/${dish.id}/recipes`}>

              <div className='image'>
                <img className="post-image" src={dish.image} alt={dish.name} />
              </div>

              <div className="post-name">
                <p>{dish.name}</p>
              </div>

            </Link>
            {
              currentUser && currentUser.id === dish.user_id && (
                <div className="button-container">
                  <Link to={`/dish/${dish.id}/edit`}>
                    <button className="edit-button">
                      Edit
                    </button>
                  </Link>
                  <button className="delete-button" onClick={() => destroyDish(dish.id)}>
                    Delete
                  </button>
                </div>
              )
            }


          </React.Fragment>
        ))
      }
      <br />
      <div className='create'>
        <Link className="create-link" to='/new/dish'>
          <button className="create-button">
            Create
          </button>
        </Link>
      </div>
    </>
  )
}