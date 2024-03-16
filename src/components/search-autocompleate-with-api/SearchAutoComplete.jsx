import React, { useEffect, useState } from 'react';

const SearchFilter = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://dummyjson.com/users');
        const data = await response.json();
        if (data && data.users && data.users.length) {
          setUsers(data.users);
          setFilteredUsers(data.users);
          setLoading(false);
        }
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filteredData = users.filter((user) =>
      user.firstName.toLowerCase().includes(term)
      // user.firstName.toLowerCase().indexOf(term) > -1
    );
    setFilteredUsers(filteredData);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search..."
        className="border-2 border-gray-300 rounded-md p-2 mb-4"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredUsers.map((user, index) => (
          <li key={index} className="border-b-2 border-gray-300 p-2">
            {user.firstName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;