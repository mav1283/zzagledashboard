import React from 'react';
import { v4 } from "uuid";
import {IoMdRibbon} from 'react-icons/io';
import {FaUsers} from 'react-icons/fa';

const slides = [
  {
    id: v4(),
    icon: <IoMdRibbon />,
    title: 'Rewards',
    cta: 'Redeem'
  },
  {
    id: v4(),
    icon: <FaUsers />,
    title: 'Invite',
    cta: 'Refer'
  },
  
];

export default slides;
