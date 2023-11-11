print('[START]##########################################################################################');

db = db.getSiblingDB('dev');

db.createUser(
  {
    user: 'developer',
    pwd: 'local',
    roles: [{ role: 'readWrite', db: 'dev' }],
  },
);

db.createCollection('movies');

db.movies.insertMany(
  [
    {"name":"The silence of the lambs"},
    {"name":"The Godfather"},
    {"name":"The Shawshank Redemption"},
    {"name":"Pulp Fiction"},
    {"name":"The Good, the Bad and the Ugly"},
    {"name":"The Dark Knight"},
    {"name":"Mission Impossible"}
  ]
);

print('[END  ]##########################################################################################');
