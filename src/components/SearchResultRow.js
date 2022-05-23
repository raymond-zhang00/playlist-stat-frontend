import React from 'react';

function SearchResultRow({playlist}) {
    return (
        <li><a href="/playlist">Test - {playlist.name}</a></li>
    );
}

export default SearchResultRow;