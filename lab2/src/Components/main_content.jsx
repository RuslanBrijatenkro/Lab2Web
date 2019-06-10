import React from 'react';
import '../scss/main_content.scss';
import ConcertList from './conserts_list';
import list from '../data/information';
import AdvSearchList from './adv_search_list';
import options from './adv_search_info';
import {connect} from 'react-redux'
import { getSearchFieldValue } from './actions'

function MainContent({searchValue, getSearchFieldValue}) {
    return(
        <div className="content_all_concerts">
            <p className="name">Все концерты</p>
            <div className="concerts_search">
                <ConcertList></ConcertList>
                <AdvSearchList setValue={getSearchFieldValue} options={options}></AdvSearchList>
            </div>
        </div>
    );
  }
  const mapStateToProps = (state) =>({
      searchValue: state.ui.searchValue
  })
  const mapDispatchToProps = {
    getSearchFieldValue
  }
  export default connect(mapStateToProps, mapDispatchToProps)(MainContent);