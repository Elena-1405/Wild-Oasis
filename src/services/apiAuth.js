import supabase from './supabase';

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;
  console.log('SESSION EXISTS:', !!session.session);
  console.log('SESSION ERROR:', session.Error);
  const { data, error } = await supabase.auth.getUser();

  console.log(data);

  if (error) throw new Error(error.message);
  console.log('USER:', data.user);
  console.log('USER ERROR:', error);
  return data?.user;
}
