import { Component } from 'react';
import {
  Header,
  SearchForm,
  Button,
  ButtonLabel,
  Input,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    name: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <Button type="submit">
            <ButtonLabel>Search</ButtonLabel>
          </Button>

          <Input
            name="name"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            // value={this.state.name}
            onChange={this.handleChange}
          />
        </SearchForm>
      </Header>
    );
  }
}
