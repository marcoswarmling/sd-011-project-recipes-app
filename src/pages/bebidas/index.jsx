import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default class Bebidas extends Component {
  render() {
    return (
      <div>
        <Header title="Bebidas" hasSearchBar />
        Main Bebidas
        <Footer />
      </div>
    );
  }
}
