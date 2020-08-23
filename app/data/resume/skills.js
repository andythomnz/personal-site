const skills = [{
  title: 'Javascript',
  competency: 3,
  category: ['Web Development', 'Languages', 'Javascript'],
},
{
  title: 'Node.JS',
  competency: 4,
  category: ['Web Development', 'Javascript'],
},
{
  title: 'React',
  competency: 3,
  category: ['Web Development', 'Javascript'],
},
{
  title: 'Vue.js',
  competency: 3,
  category: ['Web Development', 'Javascript'],
},
{
  title: 'React Native',
  competency: 2,
  category: ['Mobile Development', 'Javascript'],
},
{
  title: 'RESTful APIs / Web Services',
  competency: 4,
  category: ['Web Development', 'Databases', 'Tools'],
},
{
  title: 'Tableau',
  competency: 2,
  category: ['Data Science', 'Tools'],
},
{
  title: 'Ionic',
  competency: 3,
  category: ['Mobile Development', 'Javascript'],
},
{
  title: 'Native Android',
  competency: 3,
  category: ['Mobile Development'],
},
{
  title: 'Bash',
  competency: 2,
  category: ['Tools', 'Languages'],
},
{
  title: 'Amazon Web Services',
  competency: 2,
  category: ['Web Development', 'Tools'],
},
{
  title: 'Heroku',
  competency: 3,
  category: ['Web Development', 'Tools'],
},
{
  title: 'MongoDB',
  competency: 3,
  category: ['Web Development', 'Databases'],
},
{
  title: 'PostgreSQL/SQLite3/SQL',
  competency: 4,
  category: ['Web Development', 'Databases', 'Languages'],
},
{
  title: 'DynamoDB',
  competency: 2,
  category: ['Web Development', 'Databases'],
},
{
  title: 'Neo4j',
  competency: 1,
  category: ['Web Development', 'Databases'],
},
{
  title: 'Express.JS',
  competency: 4,
  category: ['Web Development', 'Javascript'],
},
{
  title: 'D3',
  competency: 3,
  category: ['Web Development', 'Javascript', 'Data Science'],
},
{
  title: 'Git/GitHub/GitLab/CodeCommit',
  competency: 4,
  category: ['Tools'],
},
{
  title: 'Microsoft Azure',
  competency: 2,
  category: ['Tools', 'Web Development'],
},
{
  title: 'Typescript',
  competency: 2,
  category: ['Web Development', 'Languages', 'Javascript'],
},
{
  title: 'HTML + SASS/SCSS/CSS',
  competency: 3,
  category: ['Web Development', 'Languages'],
},
{
  title: 'Python',
  competency: 2,
  category: ['Languages'],
},
{
  title: 'Jira',
  competency: 4,
  category: ['Tools'],
},
{
  title: 'Jenkins',
  competency: 2,
  category: ['Tools'],
},
{
  title: 'Postman',
  competency: 4,
  category: ['Tools'],
},
{
  title: 'Confluence',
  competency: 2,
  category: ['Tools'],
},
{
  title: 'Microsoft Power Automate',
  competency: 3,
  category: ['Tools'],
},
{
  title: 'Django',
  competency: 2,
  category: ['Web Development'],
},
{
  title: 'C',
  competency: 2,
  category: ['Languages'],
},
{
  title: 'Java',
  competency: 3,
  category: ['Languages'],
},
{
  title: 'Data Visualization',
  competency: 4,
  category: ['Data Science', 'Javascript'],
},
{
  title: 'GraphQL',
  competency: 1,
  category: ['Web Development', 'Databases'],
},
{
  title: 'Cassandra / CQL',
  competency: 2,
  category: ['Web Development', 'Databases', 'Languages'],
},
{
  title: 'Public Speaking',
  competency: 3,
  category: ['Soft Skills'],
},
{
  title: 'Written Communication',
  competency: 3,
  category: ['Soft Skills'],
},
{
  title: 'Scrum Master',
  competency: 2,
  category: ['Soft Skills'],
},

].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#EAC435',
  '#5C415D',
  '#03CEA4',
  '#5FBFF9',
  '#EB9486',
  '#D68FD6',
  '#4D7EA8',
  '#156064',
];

const categories = [...new Set(
  skills.reduce((acc, { category }) => acc.concat(category), []),
)].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
