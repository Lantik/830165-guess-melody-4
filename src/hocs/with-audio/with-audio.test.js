import React from 'react';
import PropTypes from 'prop-types';
import renderer from 'react-test-renderer';
import withAudio from './with-audio.js';

const MockComponent = (props) => {
  return (<div>
    { props.children }
  </div>);
};

MockComponent.propTypes = {
  children: PropTypes.node.isRequired
};

const MockComponentWithAudio = withAudio(MockComponent);

it(`withAudio hoc rendered correctly`, () => {
  const tree = renderer
    .create(<MockComponentWithAudio
      src={``}
      isPlaying={true}
      onPlayButtonClick={() => {}}
    />, {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

  expect(tree).toMatchSnapshot();
});
