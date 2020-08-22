CREATE TABLE IF NOT EXISTS menu (
  id BIGSERIAL PRIMARY KEY,
  category VARCHAR(255),
  itemname VARCHAR(255),
  description TEXT
);
