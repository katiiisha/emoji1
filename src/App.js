
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Filter from './componets/Filter';
import Cards from './componets/Cards';
import Paginate from './componets/Paginate';

function App() {
  // получаем данные с сервера и записываем их в хук
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  // количество отображемых карточек на странице 
  const [cardsPerPage, setcardsPerPage] = useState(9);
  //текущая страница
  const [currentPage, setCurrentPage] = useState(1);

  // получаем данные с сервера
  const url = 'https://63f4e22355677ef68bc5fb32.mockapi.io/emoji';
  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setData(response.data)
      })
  }, []);
  // поиск эмоджи
  const filteredEmoji = data.filter((elem) => {
    const fullSearch = searchValue.split(" ");
    return fullSearch.every(
      (word) =>
        elem.title.toLowerCase().includes(word.toLowerCase())
    );
  });

  // определение индекса первой и последней карточки 
  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;
  // получили первые 12 карточек из полученного с сервера массива 
  const currentCards = Math.ceil(data.length / cardsPerPage);
  // вырезаем из массива нужное количество карточек
  const emojiList = filteredEmoji.slice(
    firstCardIndex,
    lastCardIndex
  );

  let width = document.body.clientWidth;
  window.onresize = (event) => {
    width = document.body.clientWidth

    width >= 645 && width < 1024 ? setcardsPerPage(8) : setcardsPerPage(9)

  };

  return (
    <>

      <Filter setCurrentPage={setCurrentPage} setSearchValue={setSearchValue} />

      <Cards emojiList={emojiList} />
      <Paginate setCurrentPage={setCurrentPage} currentPage={currentPage} cardsPerPage={cardsPerPage} currentCards={currentCards} />
    </>
  );
}

export default App;
