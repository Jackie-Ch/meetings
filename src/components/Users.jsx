import React, { useState, useEffect } from 'react';
import User from './User';
import SearchStatus from './SearchStatus';
import Pagination from './Pagination';
import { paginate } from '../utils/pagination';
import PropTypes from 'prop-types';
import GroupList from './GroupList';
import api from '../api/index';

function Users({ users, ...rest }) {
  console.log(users);
  const [professions, setProfessions] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProf, setSelectedProf] = useState();
  const count = users.length;
  const pageSize = 4;

  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfessions(data));
  }, []);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handleProfessionSelect = (item) => {
    setSelectedProf(item);
  };

  const filteredUsers = selectedProf
    ? users.filter((user) => user.profession === selectedProf)
    : users;

  const userCrop = paginate(filteredUsers, currentPage, pageSize);

  const clearFilter = () => {
    setSelectedProf();
  };

  if (count === 0) {
    return <h1 className="badge bg-danger fs-5">Никто с тобой не тусанет</h1>;
  }

  return (
    <>
      <SearchStatus users={users} />
      {professions && (
        <>
          <GroupList
            items={professions}
            onItemSelect={handleProfessionSelect}
            selectedItem={selectedProf}
          />
          <button className="btn btn-secondary mt-2" onClick={clearFilter}>
            Очистить
          </button>
        </>
      )}
      <table className="table">
        <thead>
          <tr>
            <th>Имя</th>
            <th>Качество</th>
            <th>Профессия</th>
            <th>Встретился раз</th>
            <th>Оценка</th>
            <th>Избранное</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {userCrop.map((user) => (
            <User key={user._id} {...user} {...rest} />
          ))}
        </tbody>
      </table>
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </>
  );
}

Users.propTypes = {
  users: PropTypes.array.isRequired
};

export default Users;
