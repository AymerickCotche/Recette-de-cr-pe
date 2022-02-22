/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import * as PropTypes from 'prop-types';
import './style.scss';

interface Props {
  ingredients: { id: number; quantity: number; unit: string; name: string }[];
}

interface IngredientObj {
  id: number;
  quantity: number;
  unit: string;
  name: string;
}

export default function Ingredients({ ingredients }: Props) {
  const jsxIngredients = ingredients.map((ingredient: IngredientObj) => {
    const li = (
      <li className="ingredients" key={ingredient.id}>
        <span className="ingredients__mesure">
          {ingredient.quantity}&nbsp;
          {ingredient.unit}
        </span>
        &nbsp;
        <span className="ingredients__name">{ingredient.name}</span>
      </li>
    );
    return li;
  });
  return <ul className="ingredient">{jsxIngredients}</ul>;
}

Ingredients.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      quantity: PropTypes.number,
      unit: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
};
