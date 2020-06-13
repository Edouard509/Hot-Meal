import React from 'react';
import { Link } from 'react-router-dom';

export default function ShowDishes(props) {
  const { dishes, currentUser, destroyDish } = props;
  return (
    <>
      <hr />
      <h3>Dishes</h3>
      {
        dishes.map(dish => (
          <React.Fragment key={dish.id}>
            <div className='Image'>
              <p>{dish.name}</p>
              <img src={dish.image} />
            </div>
            {
              currentUser && currentUser.id === dish.user_id && (
                <>
                  <Link to={`/dish/${dish.id}/edit`}> <button>edit</button> </Link>
                  <button onClick={() => destroyDish(dish.id)}>delete</button>
                </>
              )
            }
          </React.Fragment>
        ))
      }
      <br />
      <Link to='/new/dish'><button>Create</button></Link>
    </>
  )
}