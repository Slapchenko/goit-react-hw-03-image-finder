import { Component } from 'react';
import { Searchbar } from './Searchbar';
import * as API from '../services/api';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
import { Box } from './App.styled';
import { Blocks } from 'react-loader-spinner';
import { Modal } from './Modal';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    images: [],
    error: false,
    isLoading: false,
    showModal: false,
  };

  async componentDidUpdate(_, prevState) {
    if (prevState.page !== this.state.page) {
      try {
        this.setState({ isLoading: true });
        const images = await API.getImages(this.state.query, this.state.page);
        this.setState(() => ({
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

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  fonKeydown = e => {
    console.log(e);
  };

  handleImgClick = e => {
    console.log('Кликнули в IMG');
    // console.log('currentTarget: ', event.currentTarget);
    // console.log('target: ', event.target);
    // if (event.currentTarget === event.target) {
    //   this.props.onClose();
    // }
  };

  render() {
    const availabilityImages = this.state.images.length > 0 ? true : false;

    return (
      <Box>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          images={this.state.images}
          onClick={this.handleImgClick}
        />
        <Button onLoadMore={this.loadMore} isImages={availabilityImages} />
        <Blocks
          visible={this.state.isLoading}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
        />
        {this.state.showModal && <Modal onClose={this.toggleModal} />}
      </Box>
    );
  }
}
