-- Create a table for public profiles
create table users (
  id text not null primary key, -- Clerk User ID (string)
  email text,
  full_name text,
  image_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Set up Row Level Security (RLS)
alter table users enable row level security;

create policy "Public profiles are viewable by everyone." on users
  for select using (true);

create policy "Enable insert for all users" on users
  for insert with check (true);

create policy "Enable update for users based on id" on users
  for update using (true);

-- Ensure anon/authenticated roles have permission
grant insert, update, select on table users to anon, authenticated, service_role;
