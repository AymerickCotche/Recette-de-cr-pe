import * as React from 'react';
import * as PropTypes from 'prop-types';
import './style.scss';

interface Props {
  title: string;
  imgUrl: string;
  author: string;
  difficulty: string;
}
export default function Header({ title, imgUrl, author, difficulty }: Props) {
  return (
    <header className="header">
      <img className="header__image" src={imgUrl} alt="" />
      <div className="header__content">
        <p className="header__title">{title}</p>
        <p className="header__infos">
          {author} - {difficulty}
        </p>
      </div>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  author: PropTypes.string,
  difficulty: PropTypes.string,
};

Header.defaultProps = {
  author: 'Anonyme',
  difficulty: 'Difficulté non communiqué',
};
