import React from 'react';
import { Plus, Download } from 'react-feather'
import PropTypes from 'prop-types'

const SearchBar = ({ onAdd, onSearch, placeholder, allowAdd, onDownload, allowDownload }) => 
    <div className="input-group">
        <input type="text" className="form-control app-search"
            placeholder={placeholder} aria-label={placeholder}
            onChange={(e) => onSearch(e.target.value)} />
        <div className="input-group-append">
            {allowAdd && 
            <button className="btn app-button app-search-button" type="button" onClick={() => onAdd()}>
                <Plus height='18px'/>
            </button>}
            {allowDownload &&
            <button className="btn app-button app-download-button" type="button" onClick={() => onDownload()}>
                <Download height='18px'/>
            </button>
            }
        </div>
    </div>


SearchBar.propTypes = {
    onAdd: PropTypes.func,
    onSearch: PropTypes.func,
    placeholder: PropTypes.string,
    allowAdd: PropTypes.bool,
    onDownload: PropTypes.func,
    allowDownload: PropTypes.bool
}

export default SearchBar
