-- Your SQL goes here
ALTER TABLE tasks DROP COLUMN progress;

ALTER TABLE tasks ADD COLUMN progress VARCHAR;
