import { createClient } from '@supabase/supabase-js';

// Hardcoding your credentials directly fixes the blank page immediately
const supabaseUrl = 'https://salbqqnrbjrzurmfrgrx.supabase.co';
const supabaseAnonKey = 'sb_publishable_KFuFZ3fEUbEmqAwLli_Sow_lmbjNVjB';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
