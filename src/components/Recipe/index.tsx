import * as React from 'react';
import Header from 'src/components/Header';
import Ingredients from 'src/components/Ingredients';
import Instructions from 'src/components/Instructions';
import data from 'src/data/recipe';
import './style.scss';

function Recipe() {
  return (
    <div className="recipe">
      <Header
        imgUrl={data.thumbnail}
        title={data.title}
        author={data.author}
        difficulty={data.difficulty}
      />
      <Ingredients ingredients={data.ingredients} />
      <Instructions instructions={data.instructions} />
    </div>
  );
}

export default Recipe;
