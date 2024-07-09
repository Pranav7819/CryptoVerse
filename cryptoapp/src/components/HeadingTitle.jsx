// src/components/HeadingTitle.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';

const { Title } = Typography;

const HeadingTitle = ({ levelNumber, title, cssClass }) => (
  <Title level={levelNumber} className={cssClass}>
    {title}
  </Title>
);

HeadingTitle.propTypes = {
  levelNumber: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  cssClass: PropTypes.string,
};

HeadingTitle.defaultProps = {
  cssClass: '',
};

export default HeadingTitle;
