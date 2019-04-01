import React from 'react';
import fetch from '../fakeFetch';

class Pub extends React.Component {
  constructor() {
    super();

    this.state = {
      data: null,
      error: null,
      isLoading: false,
    };
  }

  async componentDidMount() {
    this.setState({
      isLoading: true,
    });

    try {
      const data = await fetch('/coffee');

      this.setState({
        data,
        isLoading: false,
      });
    } catch (error) {
      this.setState({
        error,
        isLoading: false,
      });
    }
  }

  render() {
    if (this.state.error) {
      return <div>Error: {this.state.error.message}</div>;
    }

    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h2>Coffee</h2>
        <p>
          You should go to... <strong>{this.state.data}</strong>
        </p>
      </div>
    );
  }
}

export default Pub;
