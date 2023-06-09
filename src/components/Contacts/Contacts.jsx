import { List, Item, Text, Button } from './Contacts.style';

export const Contacts = ({ contactsList, receiveID }) => {
  console.log(contactsList);
  return (
    <List>
      {contactsList &&
        contactsList.map(({ id, name, number }) => {
          return (
            <Item key={id}>
              <Text>
                {name}: {number}
              </Text>
              <Button
                onClick={() => {
                  receiveID(id);
                }}
              >
                Remove
              </Button>
            </Item>
          );
        })}
    </List>
  );
};

// Contacts.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,

//   receiveID: PropTypes.func.isRequired,
// };

// Contacts.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   receiveID: PropTypes.func.isRequired,
// };

// import React, { Component } from 'react';

// class Contacts extends Component {
//   render() {
//     return (
//       <ul>
//         {this.props.contacts.map(({ id, name, number }) => {
//           return (
//             <li key={id}>
//               <p>
//                 {name}: {number}
//               </p>
//               <button
//                 onClick={() => {
//                   console.log(id);
//                   this.props.receiveID(id);
//                 }}
//               >
//                 Remove
//               </button>
//             </li>
//           );
//         })}
//       </ul>
//     );
//   }
// }

// export default Contacts;
