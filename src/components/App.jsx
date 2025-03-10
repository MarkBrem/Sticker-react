import { Component } from 'react';
import { StikerList } from './Sticker/StickerList';
import data from './Sticker/stickers.json';
import { Choice } from './Sticker/Choice';

export class App extends Component {
  state = {
    label: '',
  };
  onChoose = newLabel => {
    this.setState({ label: newLabel });
  };
  render() {
    return (
      <>
        <StikerList data={data} choose={this.onChoose} newLabel = {this.state.label} />
        {/* <Choice label={this.state.label} /> */}
      </>
    );
  }
}
