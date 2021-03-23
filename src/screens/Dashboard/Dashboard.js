import React from 'react';
import Header from '../../components/Header';
import './styles/index.css'
export default function DashboardContainer() {


  return (
    <div>
      <Header loginFlag={true} />
      <div className='dashboard-body'>
        <div className='dashboard-text'>
        </div>
      </div>
    </div>
  );
}
