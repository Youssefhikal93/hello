-- This file should undo anything in `up.sql`
ALTER TABLE tasks
ALTER COLUMN progress TYPE TEXT;

ALTER TABLE tasks DROP COLUMN progress;

