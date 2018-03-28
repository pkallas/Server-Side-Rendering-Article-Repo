import React, { Component, Fragment } from 'react';
import CoolButton from '../CoolButton';
import GithubSearch from '../GithubSearch';

export const LinkedPage = (props) => {
  return (
    <Fragment>
      <GithubSearch />
      <CoolButton />
    </Fragment>
  );
};
