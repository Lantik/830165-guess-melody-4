import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withUserAnswer = (Component) => {
  class WithUserAnswer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        answers: new Array(props.question.answers.length).fill(false),
      };

      this._handleChange = this._handleChange.bind(this);
      this._handleAnswer = this._handleAnswer.bind(this);
    }

    _handleChange(value, i) {
      const {answers} = this.state;

      this.setState({
        answers: [...answers.slice(0, i), value, ...answers.slice(i + 1)]
      });
    }

    _handleAnswer(evt) {
      const {onAnswer, question} = this.props;
      const {answers} = this.state;

      evt.preventDefault();
      onAnswer(question, answers);
    }


    render() {
      const {answers: userAnswers} = this.state;

      return (
        <Component
          {...this.props}
          onChange={this._handleChange}
          onAnswer={this._handleAnswer}
          userAnswers={userAnswers}
        >
        </Component>
      );
    }
  }

  WithUserAnswer.propTypes = {
    question: PropTypes.shape({
      type: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      answers: PropTypes.arrayOf(PropTypes.shape({
        src: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired
      })).isRequired
    }).isRequired,
    onAnswer: PropTypes.func.isRequired
  };

  return WithUserAnswer;
};

export default withUserAnswer;
