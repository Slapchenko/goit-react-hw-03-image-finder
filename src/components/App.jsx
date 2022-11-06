import { Component } from 'react';
import { Searchbar } from './Searchbar';
import * as API from '../services/api';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
import { Box } from './App.styled';
import { Blocks } from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    images: [],
    error: false,
    isLoading: false,
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page
      // prevState.page !== this.state.page ||
      // prevState.query !== this.state.query
    ) {
      try {
        this.setState({ isLoading: true });
        const images = await API.getImages(this.state.query, this.state.page);

        this.setState(prevState => ({
          images: [...this.state.images, ...images.hits],
          isLoading: false,
        }));
      } catch (error) {
        this.setState({ error: true, isLoading: false });
        console.log(error);
      }
    }
  }

  handleFormSubmit = async ({ name }) => {
    this.setState({ page: 1, query: name, images: [] });

    try {
      this.setState({ isLoading: true });
      const images = await API.getImages(name, this.state.page);
      this.setState({ images: [...images.hits], isLoading: false });
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.log(error);
    }
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const availabilityImages = this.state.images.length > 0 ? true : false;

    return (
      <Box>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={this.state.images} />
        <Button onLoadMore={this.loadMore} isImages={availabilityImages} />
        <Blocks
          visible={true}
          // visible={this.state.isLoading}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
        />
      </Box>
    );
  }
}
