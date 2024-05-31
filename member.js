function skillsMember() {
  const member = {
    name: 'John Doe',
    skills: ['HTML', 'CSS', 'JS'],
    age: 25,
    showSkills: function() {
      this.skills.forEach((skill, index) => {
        console.log(`${this.name} knows ${skill} (index: ${index})`);
      });
    }
  };
  return member;
}