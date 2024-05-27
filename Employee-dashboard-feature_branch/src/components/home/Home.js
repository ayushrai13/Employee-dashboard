// Home.js
import React from 'react';
import { BsCaretUpFill, BsCaretDownFill } from 'react-icons/bs';
import './home.css';
import Card from '../card/Card';
import logo from '../images/Layer 1.png';
import rank1 from '../images/1st_Rank.png';
import rank2 from '../images/2nd_Rank.png';
import rank3 from '../images/3rd_Rank.png';
import { sampleData } from '../db/data';

// Function to sort data by hours worked and assign rank
const sortByHoursWorkedAndAssignRank = (data) => {
  const sortedData = data.sort((a, b) => b.hoursWorked - a.hoursWorked);
  sortedData.forEach((item, index) => {
    item.rank = index + 1;
  });
  return sortedData;
};

// Function to render table headers
const renderTableHeaders = () => {
  return (
    <tr>
      <th></th>
      <th>Rank</th>
      <th>Name</th>
      <th>Designation</th>
      <th>No. of Hours Worked</th>
      <th>Changes</th>
    </tr>
  );
};

// Function to render table rows
const renderTableRows = (data) => {
  return data.map((item, index) => (
    <tr key={item.name}>
      <td>
        {item.rank === 1 ? (
          <img className="rankImg" src={rank1} alt="Rank 1" />
        ) : item.rank === 2 ? (
          <img className="rankImg" src={rank2} alt="Rank 2" />
        ) : item.rank === 3 ? (
          <img className="rankImg" src={rank3} alt="Rank 3" />
        ) : (
          ''
        )}
      </td>
      <td>{item.rank}</td>
      <td>
        <div className="emp_name_n_pic">
          <img
            className="profile-img"
            src={item.profile_url}
            alt="Profile"
            width={30}
            height={30}
          />
          <p>{item.name}</p>
        </div>
      </td>
      <td>{item.designation}</td>
      <td>7({item.hoursWorked})</td>
      <td>
        {item.changes.sign === '+' ? (
          <BsCaretUpFill style={{ color: 'lightgreen' }} />
        ) : (
          <BsCaretDownFill style={{ color: 'red' }} />
        )}{' '}
        {item.changes.totalHrs} hrs
      </td>
    </tr>
  ));
};

const Home = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const formattedTime = currentDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });

  const sortedData = sortByHoursWorkedAndAssignRank(sampleData);

  return (
    <div className="home">
      <div className="top">
        <div className="title">
          <img src={logo} alt="Logo" width={40} height={40} />
          <h1>Employees Activity Dashboard</h1>
        </div>
        <div className="dateNtime">
          <p>{formattedDate}</p>
          <p>{formattedTime}</p>
        </div>
      </div>

      <div className="wrapper">
        <div className="left">
          <table>
            <thead>{renderTableHeaders()}</thead>
            <tbody>{renderTableRows(sortedData)}</tbody>
          </table>
        </div>
        <div className="right">
          <Card props={sortedData[0]} />
        </div>
      </div>
    </div>
  );
};

export default Home;
