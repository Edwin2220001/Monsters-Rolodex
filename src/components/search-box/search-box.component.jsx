import './search-box.styles.css';

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
    <input
        className={className}
        type='search'
        placeholder={placeholder}
        onChange={onChangeHandler}
    />
);


export default SearchBox;





// import { Component } from 'react';

// import './search-box.styles.css';

// class SearchBox extends Component {
//     render() {

//         return (
//             <input
//                 className={this.props.className}
//                 type='search'
//                 placeholder={this.props.placeholder}
//                 onChange={this.props.onChangeHandler}
//             />
//         )

//     }
// }

// export default SearchBox;