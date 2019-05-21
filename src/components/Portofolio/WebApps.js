import React from 'react';
import axios from 'axios';
import { Carousel } from 'antd';

export default class WebApps extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://my-json-server.typicode.com/Ilhamsat/PortofolioWebApps/portfolio`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <Carousel autoplay>
      { this.state.persons.map(person => 
        <div>
          <h1>{person.title}</h1>
          <h2>{person.description}</h2>
        </div>
      )}
      </Carousel>
    )
  }
}