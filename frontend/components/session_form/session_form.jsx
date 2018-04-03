import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then();
  }

  update(field) {
    return e =>
      this.setState({[field]: e.currentTarget.value});
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2> Welcome to BenchBnB! </h2>
        <input
          type="text"
          placeholder="Username"
          onChange={this.update('username')}
          value={this.state.username}
        />
        {this.renderErrors}
        <input
          type="password"
          placeholder="Password"
          onChange={this.update('password')}
          value={this.state.password}
        />
        <input
          type="submit"
          value={this.props.formType}
        />
      </form>
    )
  }
}

export default withRouter(SessionForm);
