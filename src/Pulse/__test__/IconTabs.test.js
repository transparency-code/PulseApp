import React from 'react';
import IconTabs from '../IconTabs.js'
import renderer from 'react-test-renderer';

it('team is not rendered when companyUser is not set', () => {
    const tree = renderer
      .create(<IconTabs />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('team is  rendered when companyUser is set', () => {
    const tree = renderer
      .create(<IconTabs companyUser={true}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });