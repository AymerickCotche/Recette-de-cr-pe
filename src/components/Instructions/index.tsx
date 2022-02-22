/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import * as PropTypes from 'prop-types';
import './style.scss';

interface Props {
  instructions: string[];
}

export default function Instructions({ instructions }: Props) {
  const jsxIngredients = instructions.map((instruction: string) => {
    const li = (
      <li className="instructions__li" key={instruction}>
        {instruction}
      </li>
    );
    return li;
  });
  return <ul className="instructions">{jsxIngredients}</ul>;
}

Instructions.propTypes = {
  instructions: PropTypes.arrayOf(PropTypes.string).isRequired,
};
