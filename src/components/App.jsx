import { Component } from 'react';
import { StikerList } from './Sticker/StickerList';
import data from './Sticker/stickers.json';
import { Choice } from './Sticker/Choice';

export class App extends Component {
  state = {
    img: '',
  };
  onChoose = newImg => {
    this.setState({ img: newImg });
  };
  render() {
    return (
      <>
        <StikerList data={data} choose={this.onChoose} />
        <Choice img={this.state.img} />
      </>
    );
  }
}
