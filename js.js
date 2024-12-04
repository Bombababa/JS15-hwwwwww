const users = [
    {
      name: "Alice",
      balance: 2000,
      friends: ["Bob", "Charlie", "Diana"],
      skills: ["JavaScript", "React", "Node.js"]
    },
    {
      name: "Bob",
      balance: 1500,
      friends: ["Alice", "Charlie"],
      skills: ["Java", "Spring"]
    },
    {
      name: "Charlie",
      balance: 2500,
      friends: ["Alice", "Bob", "Diana"],
      skills: ["Python", "Django", "Machine Learning"]
    },
    {
      name: "Diana",
      balance: 3000,
      friends: ["Alice", "Charlie"],
      skills: ["HTML", "CSS", "JavaScript"]
    }
  ];

  const getTotalBalance = (users) => {
    return users.reduce((total, user) => total + user.balance, 0);
  };
  
  console.log(getTotalBalance(users));  


  
  const getUsersWithFriend = (users, friendName) => {
    return users
      .filter(user => user.friends.includes(friendName))
      .map(user => user.name);
  };
  
  console.log(getUsersWithFriend(users, "Charlie"));  


const getUsersSortedByFriendsCount = (users) => {
  return users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(user => user.name);
};

console.log(getUsersSortedByFriendsCount(users));  


const getUniqueSortedSkills = (users) => {
    const allSkills = users.flatMap(user => user.skills);
    const uniqueSkills = [...new Set(allSkills)];
    return uniqueSkills.sort();
  };
  
  console.log(getUniqueSortedSkills(users));  
  
  

  