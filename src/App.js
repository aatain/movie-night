import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import {
  ReactiveBase,
  DataSearch,
  MultiList,
  SingleRange,
  RangeSlider,
  MultiDataList,
  DateRange,
} from '@appbaseio/reactivesearch';

const appTheme = {
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif',
  fontSize: "16px",
  textColor: "#fff",
  backgroundColor: "#212121",
  primaryTextColor: "#fff",
  primaryColor: "#2196F3",
  titleColor: "#fff",
  alertColor: "#d9534f",
  borderColor: "#666"
};

class App extends Component {
  render() {
    return (
      <div className="main-container" style={appTheme}>
        <ReactiveBase
          app="MovieSearchTime"
          credentials="VRIY8J7b1:85cbdca6-38ef-4f19-b7dc-b2645c833099"
        >
          <div className='navbar'>
            <div className='logo-container'>
              <img className='App-logo' src='./logo.svg' alt='MovieSearch' />
            </div>
            <h2 className='App-title'>Movie Night</h2>
            <div className="search-container">
              <DataSearch
                componentId="mainSearch"
                dataField={["original_title.search"]}
                className="search-bar"
                queryFormat="and"
                placeholder="Search for movies..."
              />
            </div>
          </div>
          <MultiList
            componentId="genres-list"
            dataField="genres_data.raw"
            className="genres-filter"
            size={20}
            sortBy="asc"
            queryFormat="or"
            selectAllLabel="All Genres"
            showCheckbox={true}
            showCount={true}
            showSearch={true}
            placeholder="Search for a Genre"
            react={{
              and: [
                "mainSearch",
                "results",
                "date-filter",
                "RangeSlider",
                "language-list",
                "revenue-list"
              ]
            }}
            showFilter={true}
            filterLabel="Genre"
            URLParams={false}
            innerClass={{
              label: "list-item",
              input: "list-input"
            }}
          />
          <hr />

          <SingleRange
            componentId="revenue-list"
            dataField="ran_revenue"
            className="revenue-filter"
            data={[
              { start: 0, end: 1000, label: "< 1M" },
              { start: 1000, end: 10000, label: "1M-10M" },
              { start: 10000, end: 500000, label: "10M-500M" },
              { start: 500000, end: 1000000, label: "500M-1B" },
              { start: 1000000, end: 10000000, label: "> 1B" }
            ]}
            showRadio={true}
            showFilter={true}
            filterLabel="Revenue"
            URLParams={false}
            innerClass={{
              label: "revenue-label",
              radio: "revenue-radio"
            }}
          />
          <hr />
          <RangeSlider
            componentId="RangeSlider"
            dataField="vote_average"
            className="review-filter"
            title="ratings"
            range={{
              start: 0,
              end: 10
            }}
            rangeLabels={{
              start: "0",
              end: "10"
            }}
            react={{
              and: [
                "mainSearch",
                "results",
                "language-list",
                "date-Filter",
                "genres-list",
                "revenue-list"
              ]
            }}
          />
          <hr />
          <MultiDataList
            componentId="language-list"
            dataField="original_language.raw"
            className="language-filter"
            title="language"
            size={100}
            sortBy="asc"
            queryFormat="or"
            selectAllLabel="All Languages"
            showCheckbox={true}
            showSearch={true}
            placeholder="Search for a language"
            react={{
              and: [
                "mainSearch",
                "results",
                "date-filter",
                "RangeSlider",
                "genres-list",
                "revenue-list"
              ]
            }}
            data={[
              {
                label: "English",
                value: "English"
              },
              {
                label: "Chinese",
                value: "Chinese"
              },
              {
                label: "Turkish",
                value: "Turkish"
              },
              {
                label: "Swedish",
                value: "Swedish"
              },
              {
                label: "Russian",
                value: "Russian"
              },
              {
                label: "Portuguese",
                value: "Portuguese"
              },
              {
                label: "Korean",
                value: "Korean"
              },
              {
                label: "Japanese",
                value: "Japanese"
              },
              {
                label: "Italian",
                value: "Italian"
              },
              {
                label: "Hindi",
                value: "Hindi"
              },
              {
                label: "French",
                value: "French"
              },
              {
                label: "Finnish",
                value: "Finnish"
              },
              {
                label: "Spanish",
                value: "Spanish"
              },
              {
                label: "Deutsch",
                value: "Deutsch"
              }
            ]}
            showFilter={true}
            filterLabel="Language"
            URLParams={false}
            innerClass={{
              label: "list-item",
              input: "list-input"
            }}
          />
          <hr />
          <DateRange
            title="release date"
            componentId="date-filter"
            dataField="release_date"
            className="datePicker"
          />
          <div>Hello ReactiveSearch</div>
        </ReactiveBase>
      </div >
    );
  }
}

export default App;
