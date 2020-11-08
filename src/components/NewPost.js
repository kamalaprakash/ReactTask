import React from 'react';

class NewPost extends React.Component {
  state = {
    name: '',
    email: '',
    password: ''
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    
  };

  handleSubmit = e => {
     e.preventDefault();
    if (this.state.name.trim() && this.state.email.trim() && this.state.password.trim()) {
      this.props.onAddPost(this.state);
      this.handleReset();
    }
  };

  handleReset = () => {
    this.setState({
      name: '',
      email: '',
      password: ''
    });
  };

  render() {
    return (
      <div>
          <form onSubmit={ this.handleSubmit }>
          <div class="form-group">
              <input
              type="text"
              placeholder="Name"
              class="form-control"
              name="name"
              onChange={ this.handleInputChange }
              value={ this.state.name }
            />
          </div>
            <div class="form-group">
            <input
              type="text"
              placeholder="Email"
              class="form-control"
              name="email"
              onChange={ this.handleInputChange }
              value={ this.state.email }
            />
            </div>
            <div class="form-group">
            <input
              type="text"
              placeholder="Password"
              class="form-control"
              name="password"
              onChange={ this.handleInputChange }
              value={ this.state.password }
            />
            </div>

          
          <div class="form-group">
            <button type="submit" class="btn btn-primary">Submit</button>
            <button type="button" class="btn btn-warning ml-1" onClick={ this.handleReset }>
              Reset
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewPost;