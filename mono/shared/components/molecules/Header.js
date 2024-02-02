import React from 'react';
import Text from 'shared/components/atoms/Text';
import PropTypes from 'prop-types';

const Header = ({headerName, styleName}) => {
  return (
    <div>
      <Text style={styleName} label={headerName} />
    </div>
  );
};

Header.propTypes = {
  headerName: PropTypes.string
}

Header.defaultProps = {
  headerName: 'Header'
}

export default Header;
