import React, { Component, Fragment } from 'react';
import CoolButton from '../CoolButton';
import GithubSearch from '../GithubSearch';

export const LinkedPage = (props) => {
  return (
    <Fragment>
      <div className='flex-center'>
        <GithubSearch />
      </div>
      <CoolButton />
    </Fragment>
  );
};
