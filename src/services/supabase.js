import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://eetadkdepjhzlglumsre.supabase.co';
//const supabaseKey = process.env.SUPABASE_KEY;
const supabaseKey = 'sb_publishable_N9EQoFr2kFwqLzm1W_85FQ_cMRi-yMc';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
