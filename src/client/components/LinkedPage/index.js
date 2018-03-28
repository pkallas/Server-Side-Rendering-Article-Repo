import React, { Component, Fragment } from 'react';
import CoolButton from '../CoolButton';
import GithubSearch from '../GithubSearch';

export default (props) => {
  return (
    <Fragment>
      <GithubSearch />
      <CoolButton />
    </Fragment>
  );
};
